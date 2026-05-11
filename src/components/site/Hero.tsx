import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import type { DateRange } from "react-day-picker";
import heroImg from "@/assets/hero-hotel.jpg";
import DestinationCombobox from "./search/DestinationCombobox";
import DateRangePicker from "./search/DateRangePicker";
import GuestsPopover, { type Guests } from "./search/GuestsPopover";

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState<Guests>({ adults: 2, children: 0, rooms: 1 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("dest", destination);
    if (dates?.from) params.set("from", dates.from.toISOString().slice(0, 10));
    if (dates?.to) params.set("to", dates.to.toISOString().slice(0, 10));
    params.set("adults", String(guests.adults));
    params.set("children", String(guests.children));
    params.set("rooms", String(guests.rooms));
    navigate(`/hoteis?${params.toString()}`);
  };

  const formClass =
    "rounded-2xl p-2 grid grid-cols-1 md:grid-cols-[1.4fr_1.6fr_1fr_auto] gap-1 transition-all " +
    "bg-[#283375] " +
    "[&_button[type=button]]:bg-white [&_button[type=button]]:hover:bg-white " +
    "[&_button[type=button]_.text-foreground]:text-gray-500 " +
    "[&_button[type=button]_.text-muted-foreground]:text-gray-500 " +
    "[&_button[type=button]_svg]:text-[#283375] " +
    "data-[scrolled=false]:shadow-search " +
    "data-[scrolled=true]:shadow-[0_8px_24px_-6px_hsl(217_30%_45%_/_0.25)] " +
    "pl-[18px] pr-[18px] pt-[18px] pb-[18px]";

  const formInner = (
    <form onSubmit={handleSearch} data-scrolled={scrolled} className={formClass}>
      <DestinationCombobox value={destination} onChange={setDestination} />
      <DateRangePicker value={dates} onChange={setDates} />
      <GuestsPopover value={guests} onChange={setGuests} />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f9b134] text-slate-900 font-semibold hover:bg-accent-hover transition-colors"
      >
        <Search className="h-5 w-5" />
        Buscar
      </button>
    </form>
  );

  return (
    <>
      {scrolled && (
        <div className="fixed top-[10px] left-0 right-0 z-50 animate-fade-in">
          <div className="max-w-[calc(80rem+40px)] mx-auto px-4 sm:px-6 lg:px-8">
            {formInner}
          </div>
        </div>
      )}

      <section className="relative bg-primary">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Hotel beira-mar da rede Nobile Hotels & Resorts ao pôr do sol"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container-page relative pt-12 pb-32 md:pt-24 md:pb-40 text-primary-foreground">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-highlight text-highlight-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              63 hotéis · Brasil & Internacional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-bold">
              Encontre sua próxima estadia
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Reserve em hotéis exclusivos da rede Nobile Hotels & Resorts — presente no Brasil, América Latina, Estados Unidos e Portugal.
            </p>
          </div>
        </div>
      </section>

      {/* Inline search bar (initial position, below hero, aligned with page container) */}
      {!scrolled && (
        <div className="container-page relative -mt-16 md:-mt-20 mb-[30px] z-10">
          {formInner}
        </div>
      )}
    </>
  );
};

export default Hero;
