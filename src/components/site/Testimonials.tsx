import { useState } from "react";
import { SITE } from "@/lib/site";
import { Quote } from "lucide-react";

// Retorna [trechoVisivel, restoOculto]
function splitAtFirstPeriod(text: string): [string, string] {
  const idx = text.indexOf(".");
  if (idx === -1 || idx === text.length - 1) return [text, ""];
  return [text.slice(0, idx + 1), text.slice(idx + 1)];
}

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (i: number) => setExpanded((prev) => new Set([...prev, i]));

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
          {SITE.testimonials.items.map((t, i) => {
            const [visivel, resto] = splitAtFirstPeriod(t.quote);
            return (
              <figure
                key={t.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  i % 3 === 0 ? "md:translate-y-4" : ""
                } ${
                  expanded.has(i)
                    ? "bg-white/70 backdrop-blur-md border border-white/60 shadow-elegant"
                    : "glass hover:shadow-elegant"
                }`}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />

                <blockquote className="text-lg text-foreground leading-relaxed">
                  "{visivel}"
                  {resto && !expanded.has(i) && (
                    <span
                      onClick={() => toggle(i)}
                      className="ml-1 text-primary font-semibold cursor-pointer hover:text-primary/70 transition-colors text-base"
                    >
                      ler mais
                    </span>
                  )}
                  {expanded.has(i) && resto}
                  {expanded.has(i) && `"`}
                  {!resto && `"`}
                </blockquote>

                <div className="mt-10">
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
