import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-pets.jpg";
import { ArrowRight, Heart } from "lucide-react";
import logo from '@/assets/logo.png';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Cão e gato resgatados em um campo florido"
          className="h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            <Heart className="h-3.5 w-3.5 fill-current" />
            ONG de proteção animal • há 15 anos
          </span>
          <h1 className="animate-fade-in-up delay-150 mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            {SITE.hero.headline.split(".").map((part, i, arr) =>
              part.trim() ? (
                <span key={i} className={i === 1 ? "text-gradient" : ""}>
                  {part.trim()}
                  {i < arr.length - 1 ? "." : ""}{" "}
                </span>
              ) : null,
            )}
          </h1>
          <p className="animate-fade-in-up delay-300 mt-6 text-lg text-muted-foreground max-w-xl">
            {SITE.hero.subtext}
          </p>
          <div className="animate-fade-in-up delay-500 mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.ctaHref}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              {SITE.cta}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl glass-strong px-7 py-4 text-base font-semibold text-foreground hover:text-primary transition-colors"
            >
              Conhecer ações
            </a>
          </div>

          <div className="animate-fade-in-up delay-500 mt-12 grid grid-cols-2 gap-4 max-w-md">
            {SITE.proof.stats.slice(0, 2).map((s) => (
              <div key={s.label} className="rounded-2xl glass p-4">
                <div className="text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={logo} 
          alt="Logo Abrigo Amigo Bicho" 
          className="w-full max-w-md rounded-2xl object-cover shadow-lg aspect-square"
        />
      </div>
    </section>
  );
}
