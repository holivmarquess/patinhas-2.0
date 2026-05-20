import { SITE } from "@/lib/site";

export function OurStory() {
  return (
    <section id="historia" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4">

        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {SITE.story.label}
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.story.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{SITE.story.subtext}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-3 space-y-5">
            {SITE.story.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}

            <blockquote className="mt-8 rounded-3xl bg-gradient-primary text-primary-foreground p-8 shadow-elegant">
              <p className="text-lg font-semibold leading-relaxed italic">
                "{SITE.story.closingQuote}"
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-primary-foreground/30" />
                <span className="text-sm font-medium text-primary-foreground/80">
                  {SITE.story.founder}, fundadora
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="rounded-3xl glass p-8 shadow-glass">
              <h3 className="text-lg font-bold mb-8 text-foreground">Nossa Trajetória</h3>

              <ol className="relative space-y-8 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                {SITE.story.milestones.map((m, i) => (
                  <li key={i} className="pl-8 relative">
                    <div className="absolute left-0 top-1 h-[18px] w-[18px] rounded-full bg-gradient-primary ring-4 ring-background" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {m.year}
                    </span>
                    <h4 className="mt-1 font-bold text-foreground">{m.label}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}