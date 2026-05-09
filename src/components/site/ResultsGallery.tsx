import { SITE } from "@/lib/site";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const images = [
  { src: g1, alt: "Casal feliz com cão adotado" },
  { src: g2, alt: "Gato calico em novo lar" },
  { src: g3, alt: "Voluntária com filhotes resgatados" },
  { src: g4, alt: "Veterinária segurando filhote" },
  { src: g5, alt: "Mulher passeando com cão adotado" },
  { src: g6, alt: "Criança fazendo carinho em cão" },
];

export function ResultsGallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Resultados
          </span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
            {SITE.gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{SITE.gallery.subtext}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-4">
          {images.map((img, i) => {
            const span = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-2 row-span-1 lg:col-span-2",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
            ][i];
            return (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-3xl shadow-glass ${span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
