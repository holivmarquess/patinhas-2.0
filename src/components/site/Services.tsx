import { SITE } from "@/lib/site";

export function Servicos() {
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
          {SITE.services.items.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 p-8 hover:bg-gradient-primary hover:border-transparent hover:shadow-elegant hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl text-3xl mb-5 bg-accent group-hover:bg-green500/80 transition-colors duration-300">
                <i className={`${s.icon} text-primary group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-2xl font-bold tracking-tight group-hover:text-teal-600 transition-colors duration-300">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground group-hover:text-zinc-200 transition-colors duration-300">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}