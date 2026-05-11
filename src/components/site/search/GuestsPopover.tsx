import { Users, Minus, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface Guests {
  adults: number;
  children: number;
  rooms: number;
}

interface Props {
  value: Guests;
  onChange: (guests: Guests) => void;
}

const Stepper = ({
  label,
  hint,
  value,
  min,
  onDec,
  onInc,
}: {
  label: string;
  hint?: string;
  value: number;
  min: number;
  onDec: () => void;
  onInc: () => void;
}) => (
  <div className="flex items-center justify-between py-3">
    <div>
      <div className="font-medium text-foreground">{label}</div>
      {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
    </div>
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onDec}
        disabled={value <= min}
        aria-label={`Diminuir ${label}`}
        className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-6 text-center font-semibold tabular-nums">{value}</span>
      <button
        type="button"
        onClick={onInc}
        aria-label={`Aumentar ${label}`}
        className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-colors"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const GuestsPopover = ({ value, onChange }: Props) => {
  const summary = `${value.adults} ${value.adults === 1 ? "adulto" : "adultos"} · ${value.children} ${value.children === 1 ? "criança" : "crianças"} · ${value.rooms} ${value.rooms === 1 ? "quarto" : "quartos"}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted/60 focus:bg-muted/60 focus:outline-none transition-colors text-left w-full bg-slate-50"
        >
          <Users className="h-5 w-5 text-muted-foreground shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-foreground">Hóspedes</div>
            <div className="truncate text-sm text-foreground">{summary}</div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-popover z-50" align="end">
        <Stepper
          label="Adultos"
          value={value.adults}
          min={1}
          onDec={() => onChange({ ...value, adults: value.adults - 1 })}
          onInc={() => onChange({ ...value, adults: value.adults + 1 })}
        />
        <div className="border-t" />
        <Stepper
          label="Crianças"
          hint="0 – 17 anos"
          value={value.children}
          min={0}
          onDec={() => onChange({ ...value, children: value.children - 1 })}
          onInc={() => onChange({ ...value, children: value.children + 1 })}
        />
        <div className="border-t" />
        <Stepper
          label="Quartos"
          value={value.rooms}
          min={1}
          onDec={() => onChange({ ...value, rooms: value.rooms - 1 })}
          onInc={() => onChange({ ...value, rooms: value.rooms + 1 })}
        />
      </PopoverContent>
    </Popover>
  );
};

export default GuestsPopover;
