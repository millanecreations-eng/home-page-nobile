import { Percent, Clock, LogIn, LogOut, CalendarCheck, Gift } from "lucide-react";
import nobilePlusLogo from "@/assets/nobile-plus-logo.png";

const advantages = [
  {
    icon: Percent,
    title: "Descontos exclusivos",
    text: "No mínimo 10% off em diárias de hotéis e resorts da rede.",
  },
  {
    icon: LogIn,
    title: "Early check-in",
    text: "Entre no hotel até 1 hora antes do horário padrão.",
  },
  {
    icon: LogOut,
    title: "Late check-out",
    text: "Aproveite até 2 horas extras na sua saída.",
  },
  {
    icon: CalendarCheck,
    title: "Reserva antecipada",
    text: "Até 20% off reservando entre 60 e 90 dias antes.",
  },
  {
    icon: Clock,
    title: "Diária de 30 horas",
    text: "Mais tempo de hospedagem com check-out estendido até as 18h.",
  },
  {
    icon: Gift,
    title: "Ofertas de fim de semana",
    text: "30% de desconto na 2ª noite, de sexta a domingo.",
  },
];

const NobilePlus = () => {
  return (
    <section id="nobile-plus" className="py-14 md:py-20 bg-secondary/40">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <img
            src={nobilePlusLogo}
            alt="Nobile Plus — programa de vantagens"
            width={180}
            height={68}
            loading="lazy"
            className="h-12 md:h-14 w-auto mx-auto mb-5"
          />
          <h2 className="text-2xl md:text-3xl text-foreground tracking-tight font-bold">
            Vantagens exclusivas para quem viaja com a gente
          </h2>
          <p className="text-muted-foreground mt-3">
            Cadastro gratuito. Acesse descontos, benefícios e ofertas especiais
            em todos os hotéis e resorts da rede Nobile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="group p-6 rounded-xl border bg-card shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">{a.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {a.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-6 py-3 rounded-full bg-[#e88c2f] text-white font-bold hover:brightness-95 transition-all">
            Cadastre-se grátis
          </button>
          <a
            href="#"
            className="text-accent font-semibold hover:underline text-sm"
          >
            Conheça o regulamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default NobilePlus;
