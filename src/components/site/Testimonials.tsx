import { SITE } from "@/lib/site";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.testimonials.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {SITE.testimonials.subtext}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {SITE.testimonials.items.map((t, i) => (
            <figure
              key={t.name}
              className={`relative rounded-3xl glass p-8 hover:shadow-elegant transition-all ${
                i % 3 === 0 ? "md:translate-y-4" : ""
              }`}
            >
              <Quote className="absolute top-4 right-6 h-8 w-8 text-primary/20" />
              <blockquote className="text-lg text-foreground leading-relaxed mt-10">
                "{t.quote}"
              </blockquote>
                <div className="mt-10">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
