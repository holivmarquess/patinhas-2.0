import { SITE } from "@/lib/site";
import { PawPrint, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const iconMap: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-gradient-soft pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 font-bold text-lg">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <PawPrint className="h-5 w-5" />
              </span>
              {SITE.brand}
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">{SITE.tagline}</p>
            <a
              href={SITE.ctaHref}
              className="mt-6 inline-flex items-center rounded-2xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glass"
            >
              {SITE.cta}
            </a>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {SITE.nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-2.5">
              {SITE.footer.utility.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-sm text-muted-foreground hover:text-primary">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-bold mt-8 mb-4">Siga-nos</h4>
            <div className="flex gap-2">
              {SITE.footer.social.map((s) => {
                const Icon = iconMap[s.name] ?? Facebook;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-gradient-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {SITE.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
