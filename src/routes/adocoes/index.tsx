import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AnimalCard } from "@/components/site/AnimalCard";

export const Route = createFileRoute("/adocoes/")({
  head: () => ({
    meta: [
      { title: "Adoções — Abrigo Amigo Bicho" },
      {
        name: "description",
        content:
          "Conheça os animais disponíveis para adoção no Abrigo Amigo Bicho. Cachorros, gatos e muito amor esperando por um lar.",
      },
      { property: "og:title", content: "Adoções — Abrigo Amigo Bicho" },
      {
        property: "og:description",
        content: "Encontre seu novo melhor amigo. Animais resgatados e prontos para uma vida nova.",
      },
    ],
  }),
  component: AdocoesPage,
});

type Filter = "all" | "dog" | "cat";

function AdocoesPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const available = SITE.adoptions.animals.filter((a) => a.available);
  const filtered = filter === "all" ? available : available.filter((a) => a.species === filter);

  const base = "cursor-pointer rounded-2xl px-5 py-2.5 text-sm font-semibold transition-colors";
  const activeBtn = "bg-primary text-primary-foreground";
  const inactiveBtn = "bg-accent text-foreground hover:bg-primary hover:text-primary-foreground";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {SITE.adoptions.label}
          </span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.adoptions.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{SITE.adoptions.subtext}</p>
          <p className="mt-3 text-sm font-semibold text-primary">
            {available.length}{" "}
            {available.length === 1 ? "animal disponível" : "animais disponíveis"}
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setFilter("all")}
              className={`${base} ${filter === "all" ? activeBtn : inactiveBtn}`}
            >
              {SITE.adoptions.filters.all}
            </button>
            <button
              onClick={() => setFilter("dog")}
              className={`${base} ${filter === "dog" ? activeBtn : inactiveBtn}`}
            >
              {SITE.adoptions.filters.dogs}
            </button>
            <button
              onClick={() => setFilter("cat")}
              className={`${base} ${filter === "cat" ? activeBtn : inactiveBtn}`}
            >
              {SITE.adoptions.filters.cats}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
