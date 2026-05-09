import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { ProofStrip } from "@/components/site/ProofStrip";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ResultsGallery } from "@/components/site/ResultsGallery";
import { Differentials } from "@/components/site/Differentials";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abrigo Amigo Bicho — Resgate, adoção e cuidado animal" },
      {
        name: "description",
        content:
          "ONG dedicada ao resgate, reabilitação e adoção responsável. Adote, apadrinhe, doe ou seja voluntário — transforme uma vida hoje.",
      },
      { property: "og:title", content: "Abrigo Amigo Bicho" },
      {
        property: "og:description",
        content: "Vidas salvas, famílias criadas. Faça parte dessa transformação.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <HowItWorks />
        <ResultsGallery />
        <Differentials />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
