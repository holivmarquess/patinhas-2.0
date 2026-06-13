import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Menu, X, PawPrint } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";


function NavLink({
  href,
  name,
  className,
  onClick,
}: {
  href: string;
  name: string;
  className: string;
  onClick?: () => void;
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href as "/adocoes"} className={className} onClick={onClick}>
        {name}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {name}
    </a>
  );
}

export function SiteHeader() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${
            scrolled ? "glass-strong shadow-glass" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glass">
              <PawPrint className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">{SITE.brand}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {SITE.nav.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                name={l.name}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">

            <a
              href={SITE.ctaHref}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glass hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              {SITE.cta}
            </a>

            
            <button
              onClick={toggle}
              aria-label="Alternar tema"
              className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:scale-110"
            >
              <FontAwesomeIcon icon={dark ? faSun : faMoon} className="h-5 w-5" />
            </button>

            <button
              aria-label="Abrir menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong p-4 shadow-glass animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {SITE.nav.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  name={l.name}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground/80 hover:bg-accent hover:text-primary"
                  onClick={() => setOpen(false)}
                />
              ))}
              <a
                href={SITE.ctaHref}

              

                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                {SITE.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );

}

