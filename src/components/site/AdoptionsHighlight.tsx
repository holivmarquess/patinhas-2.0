import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";
import { AnimalCard } from "./AnimalCard";

export function AdoptionsHighlight() {
  const preview = SITE.adoptions.animals.filter((a) => a.available).slice(0, 4);

  return (
    <section id="adocoes-destaque" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {SITE.adoptions.label}
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
              {SITE.adoptions.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">{SITE.adoptions.subtext}</p>
          </div>
          <Link
            to="/adocoes"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all shrink-0"
          >
            {SITE.adoptions.ctaList}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {preview.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </section>
  );
}
