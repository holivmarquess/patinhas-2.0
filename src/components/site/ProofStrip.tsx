import { SITE } from "@/lib/site";

export function ProofStrip() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">{SITE.proof.title}</h2>
          <p className="mt-4 text-muted-foreground">{SITE.proof.description}</p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SITE.proof.stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-3xl glass p-8 text-center hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-gradient">{s.value}</div>
              <div className="mt-3 text-sm font-semibold text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
