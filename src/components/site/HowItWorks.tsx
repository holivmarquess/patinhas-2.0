import { SITE } from "@/lib/site";

export function HowItWorks() {
  return (
    <section id="como" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Passo a passo
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.how.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{SITE.how.subtext}</p>
        </div>

        <div className="relative mt-16 grid md:grid-cols-3 gap-6">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {SITE.how.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-primary text-primary-foreground text-2xl font-extrabold shadow-elegant">
                {i + 1}
              </div>
              <div className="mt-6 rounded-3xl glass p-7 text-center">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
