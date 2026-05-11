import { useState } from "react";
import { Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const POPULAR = [
  { value: "rio-de-janeiro", label: "Rio de Janeiro", country: "Brasil", hotels: 8 },
  { value: "sao-paulo", label: "São Paulo", country: "Brasil", hotels: 6 },
  { value: "salvador", label: "Salvador", country: "Brasil", hotels: 5 },
  { value: "praia-do-forte", label: "Praia do Forte", country: "Brasil", hotels: 3 },
  { value: "buenos-aires", label: "Buenos Aires", country: "Argentina", hotels: 3 },
  { value: "cartagena", label: "Cartagena", country: "Colômbia", hotels: 2 },
  { value: "cusco", label: "Cusco", country: "Peru", hotels: 2 },
  { value: "santiago", label: "Santiago", country: "Chile", hotels: 2 },
  { value: "cidade-do-mexico", label: "Cidade do México", country: "México", hotels: 1 },
];

interface Props {
  value: string;
  onChange: (label: string) => void;
}

const DestinationCombobox = ({ value, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted/60 focus:bg-muted/60 focus:outline-none transition-colors text-left w-full bg-slate-50"
        >
          <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-foreground">Destino</div>
            <div
              className={cn(
                "truncate text-sm",
                value ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {value || "Para onde você vai?"}
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0 bg-popover z-50"
        align="start"
      >
        <Command>
          <CommandInput placeholder="Buscar cidade ou hotel..." />
          <CommandList>
            <CommandEmpty>Nenhum destino encontrado.</CommandEmpty>
            <CommandGroup heading="Destinos populares">
              {POPULAR.map((d) => (
                <CommandItem
                  key={d.value}
                  value={`${d.label} ${d.country}`}
                  onSelect={() => {
                    onChange(`${d.label}, ${d.country}`);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 py-2.5 cursor-pointer"
                >
                  <div className="h-9 w-9 rounded-md bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{d.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {d.country} · {d.hotels} hotéis
                    </div>
                  </div>
                  {value.startsWith(d.label) && (
                    <Check className="h-4 w-4 text-accent" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Sugestões">
              <CommandItem
                onSelect={() => {
                  onChange("Brasil — Todos os hotéis");
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                Ver todos os 46 hotéis no Brasil
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  onChange("América Latina — Todos os hotéis");
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                Ver os 10 hotéis na América Latina
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DestinationCombobox;
