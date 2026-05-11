import { BadgePercent } from "lucide-react";
import nobilePlusLogo from "@/assets/nobile-plus-logo-white.png";

const OfferBanner = () => {
  return (
    <section id="ofertas" className="py-14 md:py-20 bg-secondary/40">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-xl bg-gradient-hero text-primary-foreground p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-highlight/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-highlight text-highlight-foreground text-xs font-bold">
                <BadgePercent className="h-3.5 w-3.5" />
                Ofertas exclusivas
              </span>

              <div className="mt-5 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-5">
                <img
                  src={nobilePlusLogo}
                  alt="Nobile Plus — programa de fidelidade"
                  width={320}
                  height={120}
                  loading="lazy"
                  className="h-16 md:h-20 w-auto shrink-0"
                />
                <h2 className="text-2xl md:text-4xl leading-tight font-bold">
                  Até <span className="text-highlight">40% OFF</span> em estadias selecionadas
                </h2>
              </div>

              <p className="mt-4 text-primary-foreground/90 max-w-xl mx-auto md:mx-0">
                Aproveite tarifas e benefícios exclusivos em hotéis selecionados. Reservas até 30/05.
              </p>

              <div className="mt-6 flex justify-center md:justify-start">
                <button className="px-6 py-3 rounded-md bg-highlight text-highlight-foreground font-bold hover:brightness-95 transition-all">
                  Cadastre-se e acesse as ofertas
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-background/10 backdrop-blur">
                <div className="text-3xl font-extrabold text-highlight">46</div>
                <div className="text-xs mt-1 text-primary-foreground/80">Hotéis no Brasil</div>
              </div>
              <div className="p-4 rounded-lg bg-background/10 backdrop-blur">
                <div className="text-3xl font-extrabold text-highlight">17</div>
                <div className="text-xs mt-1 text-primary-foreground/80">Internacional</div>
              </div>
              <div className="p-4 rounded-lg bg-background/10 backdrop-blur">
                <div className="text-3xl font-extrabold text-highlight">24/7</div>
                <div className="text-xs mt-1 text-primary-foreground/80">Atendimento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
