import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{SITE.contact.subtext}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-10 shadow-elegant">
            <h3 className="text-2xl font-bold">Fale Conosco</h3>
            <p className="mt-2 text-primary-foreground/85 text-sm">
              Agende uma visita ou tire suas dúvidas. Estamos aqui para ajudar.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <i className="fi fi-sr-marker text-lg shrink-0 mt-0.5"></i>
                <span className="text-sm">{SITE.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <i className="fi fi-sr-phone-call text-lg shrink-0 mt-0.5"></i>
                <a href={`tel:${SITE.contact.phone}`} className="text-sm hover:underline">
                  {SITE.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <i className="fi fi-sr-envelope text-lg shrink-0 mt-0.5"></i>
                <a href={`mailto:${SITE.contact.email}`} className="text-sm hover:underline">
                  {SITE.contact.email}
                </a>
              </li>
            </ul>


            <a href={`mailto:${SITE.contact.email}`} className="...">
              {SITE.cta}
             <i className="fi fi-sr-arrow-right text-sm"></i>
            </a>

          </div>

          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl glass shadow-glass min-h-[420px]">
            <iframe
              title="Mapa do abrigo"
              src={SITE.contact.mapEmbed}
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
