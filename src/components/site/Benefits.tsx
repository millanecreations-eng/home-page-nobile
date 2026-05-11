import { ShieldCheck, BadgePercent, Headphones, Sparkles } from "lucide-react";

const benefits = [
  { icon: BadgePercent, title: "Melhor preço garantido", text: "Encontrou mais barato? Cobrimos a diferença." },
  { icon: ShieldCheck, title: "Cancelamento grátis", text: "Flexibilidade em milhares de tarifas." },
  { icon: Headphones, title: "Atendimento 24h", text: "Suporte em português, espanhol e inglês." },
  { icon: Sparkles, title: "Nobile Plus", text: "Acumule pontos no programa de fidelidade e ganhe noites grátis." },
];

const Benefits = () => {
  return (
    <section id="fidelidade" className="py-14 md:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-lg border bg-card shadow-card hover:shadow-card-hover transition-shadow">
              <div className="h-11 w-11 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
