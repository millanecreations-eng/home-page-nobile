import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, Star, ArrowUpDown } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { HotelCard, featuredHotels } from "@/components/site/HotelsList";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Expanded mock catalog (reuses featured + adds variations)
const ALL_HOTELS = [
  ...featuredHotels,
  {
    ...featuredHotels[0],
    slug: "nobile-ipanema",
    name: "Nobile Ipanema",
    location: "Ipanema, Rio de Janeiro",
    rating: 8.7,
    reviews: 1102,
    label: "Muito bom",
    price: 612,
    oldPrice: 720,
    tag: "Pé na areia",
  },
  {
    ...featuredHotels[2],
    slug: "nobile-jardins",
    name: "Nobile Jardins",
    location: "Jardins, São Paulo",
    rating: 9.1,
    reviews: 1530,
    label: "Excepcional",
    price: 489,
    oldPrice: 599,
    tag: "Negócios",
  },
  {
    ...featuredHotels[3],
    slug: "nobile-buenos-aires",
    name: "Nobile Buenos Aires",
    location: "Palermo, Buenos Aires",
    rating: 8.5,
    reviews: 740,
    label: "Muito bom",
    price: 380,
    oldPrice: 460,
    tag: "Boutique",
    stars: 4,
  },
  {
    ...featuredHotels[1],
    slug: "nobile-cartagena",
    name: "Nobile Cartagena",
    location: "Centro Histórico, Cartagena",
    rating: 9.3,
    reviews: 612,
    label: "Excepcional",
    price: 715,
    oldPrice: 890,
    tag: "Histórico",
    stars: 5,
  },
];

const AMENITIES = [
  "Wi-Fi grátis",
  "Café da manhã",
  "Piscina",
  "Estacionamento",
  "Pet friendly",
  "Academia",
  "Spa",
  "Ar-condicionado",
];

interface FiltersState {
  priceMax: number;
  stars: number[];
  ratingMin: number;
  amenities: string[];
}

const DEFAULT_FILTERS: FiltersState = {
  priceMax: 1500,
  stars: [],
  ratingMin: 0,
  amenities: [],
};

const FiltersPanel = ({
  filters,
  setFilters,
}: {
  filters: FiltersState;
  setFilters: (f: FiltersState) => void;
}) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-bold text-foreground mb-3">Faixa de preço</h3>
      <Slider
        value={[filters.priceMax]}
        min={200}
        max={2000}
        step={50}
        onValueChange={([v]) => setFilters({ ...filters, priceMax: v })}
      />
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>R$ 200</span>
        <span className="font-semibold text-foreground">Até R$ {filters.priceMax}</span>
      </div>
    </div>

    <div className="border-t pt-6">
      <h3 className="font-bold text-foreground mb-3">Avaliação dos hóspedes</h3>
      <div className="space-y-2">
        {[
          { v: 9, l: "Excepcional 9+" },
          { v: 8, l: "Muito bom 8+" },
          { v: 7, l: "Bom 7+" },
        ].map((opt) => (
          <label key={opt.v} className="flex items-center gap-2 cursor-pointer text-sm">
            <Checkbox
              checked={filters.ratingMin === opt.v}
              onCheckedChange={(c) =>
                setFilters({ ...filters, ratingMin: c ? opt.v : 0 })
              }
            />
            <span className="text-foreground">{opt.l}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="border-t pt-6">
      <h3 className="font-bold text-foreground mb-3">Categoria do hotel</h3>
      <div className="space-y-2">
        {[5, 4, 3].map((s) => (
          <label key={s} className="flex items-center gap-2 cursor-pointer text-sm">
            <Checkbox
              checked={filters.stars.includes(s)}
              onCheckedChange={(c) =>
                setFilters({
                  ...filters,
                  stars: c
                    ? [...filters.stars, s]
                    : filters.stars.filter((x) => x !== s),
                })
              }
            />
            <span className="flex items-center gap-0.5 text-highlight">
              {Array.from({ length: s }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-muted-foreground">{s} estrelas</span>
          </label>
        ))}
      </div>
    </div>

    <div className="border-t pt-6">
      <h3 className="font-bold text-foreground mb-3">Comodidades</h3>
      <div className="space-y-2">
        {AMENITIES.map((a) => (
          <label key={a} className="flex items-center gap-2 cursor-pointer text-sm">
            <Checkbox
              checked={filters.amenities.includes(a)}
              onCheckedChange={(c) =>
                setFilters({
                  ...filters,
                  amenities: c
                    ? [...filters.amenities, a]
                    : filters.amenities.filter((x) => x !== a),
                })
              }
            />
            <span className="text-foreground">{a}</span>
          </label>
        ))}
      </div>
    </div>

    <Button
      variant="outline"
      className="w-full"
      onClick={() => setFilters(DEFAULT_FILTERS)}
    >
      Limpar filtros
    </Button>
  </div>
);

const Hoteis = () => {
  const [params] = useSearchParams();
  const dest = params.get("dest") || "";
  const [filters, setFilters] = useState<FiltersState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState("recommended");

  const filtered = useMemo(() => {
    let list = ALL_HOTELS.filter((h) => {
      if (h.price > filters.priceMax) return false;
      if (filters.ratingMin && h.rating < filters.ratingMin) return false;
      if (filters.stars.length && !filters.stars.includes(h.stars)) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }, [filters, sort]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container-page py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            {dest ? `Hotéis em ${dest}` : "Todos os hotéis Nobile"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {filtered.length} {filtered.length === 1 ? "propriedade encontrada" : "propriedades encontradas"}
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <div className="bg-card border rounded-xl p-5 sticky top-24">
                <h2 className="font-extrabold text-foreground mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                </h2>
                <FiltersPanel filters={filters} setFilters={setFilters} />
              </div>
            </aside>

            {/* Results */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
                {/* Mobile filter button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[320px] overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FiltersPanel filters={filters} setFilters={setFilters} />
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-2 ml-auto">
                  <Label htmlFor="sort" className="text-sm text-muted-foreground inline-flex items-center gap-1">
                    <ArrowUpDown className="h-3.5 w-3.5" />
                    Ordenar por:
                  </Label>
                  <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger id="sort" className="w-[200px] bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      <SelectItem value="recommended">Recomendados</SelectItem>
                      <SelectItem value="price-asc">Menor preço</SelectItem>
                      <SelectItem value="price-desc">Maior preço</SelectItem>
                      <SelectItem value="rating">Melhor avaliação</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-16 bg-secondary/40 rounded-xl">
                  <p className="text-muted-foreground">
                    Nenhum hotel corresponde aos filtros selecionados.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((h) => (
                    <HotelCard key={h.slug} h={h} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Hoteis;
