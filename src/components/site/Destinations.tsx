import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import rio from "@/assets/dest-rio.jpg";
import sp from "@/assets/dest-sp.jpg";
import parana from "@/assets/dest-parana.jpg";
import chile from "@/assets/dest-chile.jpg";
import orlando from "@/assets/dest-orlando.jpg";
import paraguai from "@/assets/dest-paraguai.jpg";

const destinations = [
  { name: "Rio de Janeiro", country: "Brasil", hotels: 2, img: rio, slug: "rio-de-janeiro", gradient: "linear-gradient(to top, rgba(22,77,146,0.85) 0%, rgba(22,77,146,0.45) 22%, transparent 32%)" },
  { name: "São Paulo", country: "Brasil", hotels: 7, img: sp, slug: "sao-paulo", gradient: "linear-gradient(to top, rgba(75,184,191,0.85) 0%, rgba(75,184,191,0.45) 22%, transparent 32%)" },
  { name: "Paraná", country: "Brasil", hotels: 8, img: parana, slug: "parana", gradient: "linear-gradient(to top, rgba(8,209,151,0.85) 0%, rgba(8,209,151,0.45) 22%, transparent 32%)" },
  { name: "Chile", country: "Chile", hotels: 3, img: chile, slug: "chile", gradient: "linear-gradient(to top, rgba(255,207,62,0.85) 0%, rgba(255,207,62,0.45) 22%, transparent 32%)" },
  { name: "Orlando", country: "Estados Unidos", hotels: 1, img: orlando, slug: "orlando", gradient: "linear-gradient(to top, rgba(245,144,32,0.85) 0%, rgba(245,144,32,0.45) 22%, transparent 32%)" },
  { name: "Paraguai", country: "Paraguai", hotels: 5, img: paraguai, slug: "paraguai", gradient: "linear-gradient(to top, rgba(22,77,146,0.85) 0%, rgba(75,184,191,0.45) 22%, transparent 32%)" },
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-12 md:py-16">
      <div className="container-page">
        <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl text-foreground tracking-tight font-bold">
              Destinos em alta
            </h2>
            <p className="text-muted-foreground mt-1">
              Os lugares mais procurados pelos nossos hóspedes
            </p>
          </div>
          <Link
            to="/hoteis"
            className="text-accent font-semibold hover:underline inline-flex items-center gap-1 text-sm"
          >
            Ver todos os destinos
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile: horizontal scroll · Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scrollbar-hide pb-2">
          {destinations.map((d) => (
            <Link
              key={d.name}
              to={`/hoteis?dest=${encodeURIComponent(d.name + ", " + d.country)}`}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all aspect-[3/4] md:aspect-[4/3] shrink-0 w-[260px] md:w-auto"
            >
              <img
                src={d.img}
                alt={`Hotéis em ${d.name}, ${d.country}`}
                width={800}
                height={1000}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
              <div className="absolute inset-0" style={{ backgroundImage: d.gradient }} />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <h3 className="text-xl md:text-2xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{d.name}</h3>
                <p className="text-sm text-white/95 mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]">
                  {d.country} · {d.hotels} hotéis
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
