import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Heart, ChevronRight, Waves, Landmark, Mountain, Sparkles, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import h1 from "@/assets/hotel-petrolina.jpg";
import h2 from "@/assets/hotel-salvador-mondial.jpg";
import h3 from "@/assets/hotel-itapema.jpg";
import h4 from "@/assets/hotel-santiago.jpg";

export const featuredHotels: Array<{
  slug: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  label: string;
  price: number;
  oldPrice: number;
  img: string;
  tag: string;
  stars: number;
  perks: string[];
  attraction: string;
  attractionIcon: LucideIcon;
}> = [
  {
    slug: "nobile-suites-del-rio-petrolina",
    name: "Nobile Suítes Del Rio Petrolina",
    location: "Petrolina, Pernambuco",
    rating: 9.1,
    reviews: 842,
    label: "Excepcional",
    price: 459,
    oldPrice: 579,
    img: h1,
    tag: "Beira-rio",
    stars: 4,
    perks: ["Café da manhã grátis", "Cancelamento grátis"],
    attraction: "Vista deslumbrante para o Rio São Francisco",
    attractionIcon: Waves,
  },
  {
    slug: "astron-suites-mondial-salvador",
    name: "Astron Suítes Mondial Salvador By Nobile",
    location: "Salvador, Bahia",
    rating: 8.9,
    reviews: 1204,
    label: "Fabuloso",
    price: 432,
    oldPrice: 540,
    img: h2,
    tag: "Centro histórico",
    stars: 4,
    perks: ["Próx. ao Pelourinho", "Cancelamento grátis"],
    attraction: "A poucos passos do Pelourinho histórico",
    attractionIcon: Landmark,
  },
  {
    slug: "nobile-grand-itapema",
    name: "Nobile Grand Itapema",
    location: "Itapema, Santa Catarina",
    rating: 9.4,
    reviews: 1980,
    label: "Excepcional",
    price: 720,
    oldPrice: 920,
    img: h3,
    tag: "Pé na areia",
    stars: 5,
    perks: ["Vista para o mar", "Piscina infinita"],
    attraction: "Piscina infinita com vista para o mar",
    attractionIcon: Sparkles,
  },
  {
    slug: "nobile-inn-santiago",
    name: "Nobile Inn Santiago",
    location: "Santiago, Chile",
    rating: 9.0,
    reviews: 1310,
    label: "Excepcional",
    price: 549,
    oldPrice: 690,
    img: h4,
    tag: "Vista Andes",
    stars: 4,
    perks: ["Wi-Fi grátis", "Café da manhã incluso"],
    attraction: "Vista panorâmica para a Cordilheira dos Andes",
    attractionIcon: Mountain,
  },
];

export const HotelCard = ({ h }: { h: (typeof featuredHotels)[number] }) => {
  const [fav, setFav] = useState(false);
  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={h.img}
          alt={h.name}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold rounded-full bg-highlight text-highlight-foreground shadow-sm">
          {h.tag}
        </span>
        <button
          type="button"
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? "Remover dos favoritos" : "Favoritar"}
          aria-pressed={fav}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/95 hover:bg-background text-foreground hover:scale-110 transition-all shadow-sm"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              fav && "fill-destructive text-destructive"
            )}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-highlight mb-1">
          {Array.from({ length: h.stars }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current" />
          ))}
        </div>
        <h3 className="font-bold text-foreground line-clamp-1 leading-tight">{h.name}</h3>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
          <MapPin className="h-3 w-3 shrink-0" />
          <span className="truncate">{h.location}</span>
        </p>

        <ul className="mt-3 space-y-0.5">
          {h.perks.map((p) => (
            <li key={p} className="text-xs text-success font-medium">
              ✓ {p}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 flex justify-end">
          <Link
            to={`/hoteis?dest=${encodeURIComponent(h.location)}`}
            className="px-4 py-2 rounded-full bg-[#e88c2f] text-white text-sm font-bold hover:bg-[#d97e22] transition-colors inline-flex items-center gap-1 shrink-0"
          >
            RESERVE AGORA!
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const HotelsList = () => {
  return (
    <section id="hospedagens" className="py-12 md:py-16 bg-secondary/40">
      <div className="container-page">
        <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl text-foreground tracking-tight font-bold">
              Hotéis em destaque
            </h2>
            <p className="text-muted-foreground mt-1">
              Selecionados com base em avaliações dos hóspedes
            </p>
          </div>
          <Link
            to="/hoteis"
            className="text-accent font-semibold hover:underline inline-flex items-center gap-1 text-sm"
          >
            Ver todos os 63 hotéis
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredHotels.map((h) => (
            <HotelCard key={h.slug} h={h} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsList;
