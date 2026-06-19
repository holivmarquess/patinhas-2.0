import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

type Animal = (typeof SITE.adoptions.animals)[number];

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <Link
      to="/adocoes/$id"
      params={{ id: animal.id }}
      className="group relative rounded-3xl bg-white/40 backdrop-blur-md border border-white/40 overflow-hidden hover:bg-gradient-primary hover:border-transparent hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={animal.image}
          alt={`${animal.name}, ${animal.species === "dog" ? "cachorro" : "gato"} disponível para adoção`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <i
            className={`fi ${animal.species === "dog" ? "fi-sr-dog" : "fi-sr-cat"} text-primary group-hover:text-white transition-colors duration-300 text-sm`}
            aria-hidden="true"
          ></i>
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-white/70 transition-colors duration-300">
            {animal.age} · {animal.gender}
          </span>
        </div>
        <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors duration-300">
          {animal.name}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
          {animal.shortDescription}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {animal.personality.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-foreground group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
