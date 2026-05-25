import { SITE } from "@/lib/site";

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Diferenciais
            </span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
              {SITE.differentials.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              {SITE.differentials.subtext}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {SITE.differentials.items.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl glass p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-2xl">
                  <i className={`${f.icon} text-primary`}></i>
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}