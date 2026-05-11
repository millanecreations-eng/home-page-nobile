import { useState } from "react";
import {
  Building2,
  Waves,
  Briefcase,
  Sparkles,
  CalendarHeart,
  Flag,
  Globe2,
  Hotel,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "todos", label: "Todos", icon: Hotel },
  { id: "praia", label: "Praia", icon: Waves },
  { id: "urbano", label: "Urbano", icon: Building2 },
  { id: "resort", label: "Resort", icon: Sparkles },
  { id: "negocios", label: "Negócios", icon: Briefcase },
  { id: "eventos", label: "Eventos", icon: CalendarHeart },
  { id: "brasil", label: "Brasil", icon: Flag },
  { id: "internacional", label: "Internacional", icon: Globe2 },
];

const Categories = () => {
  const [active, setActive] = useState("todos");

  return (
    <section className="border-b bg-background sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container-page">
        <div className="flex gap-1 md:gap-2 overflow-x-auto py-4 scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 justify-start lg:justify-center">
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "flex flex-col items-center gap-1.5 px-4 py-2 rounded-lg shrink-0 min-w-[78px] transition-all border-b-2 group",
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <Icon
                  className={cn(
                    "h-6 w-6 transition-transform",
                    isActive ? "scale-105" : "group-hover:scale-105 opacity-80"
                  )}
                />
                <span className="text-xs font-semibold whitespace-nowrap">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
