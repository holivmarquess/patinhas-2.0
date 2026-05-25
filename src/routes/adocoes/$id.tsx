import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const careIconMap: Record<keyof typeof SITE.adoptions.careLabels, string> = {
  vaccinated: "fi fi-sr-syringe",
  neutered: "fi fi-sr-shield-check",
  dewormed: "fi fi-sr-pills",
};

export const Route = createFileRoute("/adocoes/$id")({
  loader: ({ params }) => ({
    animal: SITE.adoptions.animals.find((a) => a.id === params.id) ?? null,
  }),
  head: ({ loaderData }) => {
    const animal = loaderData?.animal;
    return {
      meta: [
        {
          title: animal
            ? `${animal.name} — Adoção | Abrigo Amigo Bicho`
            : "Animal não encontrado — Abrigo Amigo Bicho",
        },
        {
          name: "description",
          content: animal?.shortDescription ?? "Animal não encontrado no Abrigo Amigo Bicho.",
        },
        {
          property: "og:title",
          content: animal
            ? `${animal.name} — Adoção | Abrigo Amigo Bicho`
            : "Animal não encontrado",
        },
        {
          property: "og:description",
          content: animal?.shortDescription ?? "",
        },
      ],
    };
  },
  component: AnimalDetailPage,
});

function AnimalDetailPage() {
  const { animal } = Route.useLoaderData();

  if (!animal) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-accent">
              <i className="fi fi-sr-paw text-primary text-3xl" aria-hidden="true"></i>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Animal não encontrado</h1>
            <p className="mt-3 text-muted-foreground">
              Não encontramos esse animal em nossa lista. Entre em contato — nossa equipe pode
              ter mais informações.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/adocoes"
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {SITE.adoptions.detailLabels.backToList}
              </Link>
              <a
                href="/#contato"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                Falar com a gente
              </a>
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const careKeys = Object.keys(SITE.adoptions.careLabels) as Array<
    keyof typeof SITE.adoptions.careLabels
  >;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4">

          <Link
            to="/adocoes"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {SITE.adoptions.detailLabels.backToList}
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Foto */}
            <div className="lg:sticky lg:top-28">
              <img
                src={animal.image}
                alt={`${animal.name}, ${animal.species === "dog" ? "cachorro" : "gato"} disponível para adoção`}
                className="w-full object-cover rounded-3xl shadow-elegant min-h-[500px]"
              />
            </div>

            {/* Detalhes */}
            <div>

              {/* Tags de espécie e personalidade */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  <i
                    className={`fi ${animal.species === "dog" ? "fi-sr-dog" : "fi-sr-cat"}`}
                    aria-hidden="true"
                  ></i>
                  {animal.species === "dog" ? "Cachorro" : "Gato"}
                </span>
                {animal.personality.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Nome */}
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight leading-tight">
                {animal.name}
              </h1>

              {/* Informações estruturadas */}
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {SITE.adoptions.detailLabels.age}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{animal.age}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {SITE.adoptions.detailLabels.gender}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{animal.gender}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {SITE.adoptions.detailLabels.size}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{animal.size}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {SITE.adoptions.detailLabels.sinceWhen}
                  </dt>
                  <dd className="mt-1 font-semibold text-foreground">{animal.sinceWhen}</dd>
                </div>
              </dl>

              {/* Cuidados */}
              <div className="mt-8 rounded-3xl glass p-6">
                <h3 className="font-bold mb-4">{SITE.adoptions.detailLabels.care}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {careKeys.map((key) => {
                    const active = animal.care[key];
                    return (
                      <div
                        key={key}
                        className={`flex items-center gap-2.5 ${active ? "" : "opacity-40"}`}
                      >
                        <i
                          className={`${careIconMap[key]} text-base ${active ? "text-primary" : "text-muted-foreground"}`}
                          aria-hidden="true"
                        ></i>
                        <span className="text-sm font-medium">
                          {SITE.adoptions.careLabels[key]}
                        </span>
                        {active && (
                          <i
                            className="fi fi-sr-check text-primary text-xs ml-auto"
                            aria-hidden="true"
                          ></i>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <a
                href="/#contato"
                className="mt-8 group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all"
              >
                {SITE.adoptions.detailLabels.adoptThisAnimal}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* História — largura completa */}
          <section className="mt-16 lg:mt-24 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight mb-6">
              {SITE.adoptions.detailLabels.story} de {animal.name}
            </h2>
            <div className="space-y-5">
              {animal.story.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-foreground/80 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
