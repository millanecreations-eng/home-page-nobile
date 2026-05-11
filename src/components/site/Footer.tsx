import nobileLogo from "@/assets/nobile-logo.png";

const Footer = () => {
  const cols = [
    { title: "Suporte", links: ["Central de ajuda", "Reservar com segurança", "Cancelar reserva", "Fale conosco"] },
    { title: "Empresa", links: ["Sobre a Nobile", "Carreiras", "Imprensa", "Sustentabilidade"] },
    { title: "Nobile Plus", links: ["Sobre o programa", "Benefícios", "Resgatar pontos", "Regulamento"] },
    { title: "Parceiros", links: ["Cadastre seu hotel", "Programa de afiliados", "Agências de viagem", "Eventos corporativos"] },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold mb-3">{c.title}</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-highlight transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 font-bold">
            <img
              src={nobileLogo}
              alt="Nobile Hotels & Resorts"
              className="h-8 w-auto brightness-0 invert"
              loading="lazy"
            />
          </div>
          <p className="text-primary-foreground/70">© {new Date().getFullYear()} Nobile Hotels & Resorts · 63 hotéis no Brasil e América Latina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
