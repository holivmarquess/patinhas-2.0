import { SITE } from "@/lib/site";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";

const images = [
  { src: g2, alt: "Feirinha de adoção" },
  { src: g1, alt: "Cães encontrando um novo lar" },
  { src: g6, alt: " Alessandra Pinheiro com Teca" },
  { src: g4, alt: "Voluntários do abrigo em uma feirinha de afoção" },
  { src: g5, alt: "Feirinha em frente a Agroútil" },
  { src: g3, alt: " Equipe do Abrigo Amigo Bicho" },
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
              "col-span-1 row-span-2",
              "col-span-1 row-span-2",
              "col-span-1 row-span-2 lg:col-span-1",
              "col-span-1 row-span-2",
              "col-span-2 row-span-2",
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
