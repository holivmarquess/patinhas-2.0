import { SITE } from "@/lib/site";

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Serviços
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.services.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{SITE.services.subtext}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE.services.items.map((s, i) => (
            <article
              key={s.title}
              className={`group relative rounded-3xl glass p-8 hover:shadow-elegant hover:-translate-y-1 transition-all ${
                i === 0 ? "lg:col-span-2 lg:row-span-1 bg-gradient-primary text-primary-foreground border-transparent" : ""
              }`}
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl text-3xl mb-5 ${
                  i === 0 ? "bg-white/20" : "bg-accent"
                }`}
              >
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className={`mt-3 ${i === 0 ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
