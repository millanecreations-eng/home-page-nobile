import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface Props {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

const formatRange = (range: DateRange | undefined) => {
  if (!range?.from) return null;
  if (!range.to) return format(range.from, "d MMM", { locale: ptBR });
  return `${format(range.from, "d MMM", { locale: ptBR })} — ${format(range.to, "d MMM", { locale: ptBR })}`;
};

const DateRangePicker = ({ value, onChange }: Props) => {
  const label = formatRange(value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-muted/60 focus:bg-muted/60 focus:outline-none transition-colors text-left w-full bg-slate-50"
        >
          <CalendarDays className="h-5 w-5 text-muted-foreground shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-foreground">Datas</div>
            <div
              className={cn(
                "truncate text-sm",
                label ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {label || "Check-in — Check-out"}
            </div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-popover z-50" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          locale={ptBR}
          initialFocus
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          className={cn("p-3 pointer-events-auto")}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
