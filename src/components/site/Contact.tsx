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

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-gradient-primary text-primary-foreground p-8 lg:p-10 shadow-elegant">
            <h3 className="text-2xl font-bold">Fale Conosco</h3>
            <p className="mt-2 text-primary-foreground/85 text-sm">
              Prefere falar diretamente com nossa equipe? Use os contatos abaixo.
            </p>

            <ul className="mt-8 space-y-5">
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

            <a
              href={`mailto:${SITE.contact.email}`}
              className="bg-white text-primary px-6 py-3.5 rounded-2xl text-sm font-semibold hover:-translate-y-0.5 transition-transform mt-10 inline-flex items-center gap-2"
            >
              Enviar Mensagem por E-mail
              <i className="fi fi-sr-arrow-right text-sm"></i>
            </a>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {SITE.contact.forms.sectionLabel}
            </span>
            <h3 className="mt-2 text-2xl lg:text-3xl font-extrabold tracking-tight">
              {SITE.contact.forms.sectionTitle}
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              {SITE.contact.forms.sectionSubtext}
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {SITE.contact.forms.items.map((form) => (
                <a
                  key={form.id}
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir formulário: ${form.title}`}
                  className="group relative rounded-3xl glass p-6 lg:p-7 hover:!bg-gradient-primary hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="flex items-center gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent group-hover:bg-white/20 transition-colors duration-300">
                      <i className={`${form.icon} text-2xl text-primary group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-bold tracking-tight group-hover:text-primary-foreground transition-colors duration-300">
                        {form.title}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/85 transition-colors duration-300 mt-1">
                        {form.description}
                      </p>
                    </div>
                    <i className="fi fi-sr-arrow-right text-xl text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1 shrink-0"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
