import { Globe2, Menu, User } from "lucide-react";
import nobileLogo from "@/assets/nobile-logo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container-page flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2" aria-label="Nobile Hotels & Resorts - Início">
          <img
            src={nobileLogo}
            alt="Nobile Hotels & Resorts"
            className="h-9 md:h-10 w-auto brightness-0 invert"
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <a href="#hospedagens" className="px-3 py-2 rounded hover:bg-primary-hover transition-colors">Hospedagens</a>
          <a href="#destinos" className="px-3 py-2 rounded hover:bg-primary-hover transition-colors">Destinos</a>
          <a href="#ofertas" className="px-3 py-2 rounded hover:bg-primary-hover transition-colors">Ofertas</a>
          <a href="#fidelidade" className="px-3 py-2 rounded hover:bg-primary-hover transition-colors">Nobile Plus</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-sm rounded hover:bg-primary-hover transition-colors">
            <Globe2 className="h-4 w-4" />
            BRL
          </button>
          <button className="hidden sm:inline-flex px-3 py-2 text-sm font-semibold rounded bg-background text-primary hover:bg-secondary transition-colors">
            Cadastre-se
          </button>
          <button className="hidden sm:inline-flex px-3 py-2 text-sm font-semibold rounded bg-background text-primary hover:bg-secondary transition-colors">
            Entrar
          </button>
          <button className="sm:hidden p-2 rounded hover:bg-primary-hover" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
          <button className="sm:hidden p-2 rounded hover:bg-primary-hover" aria-label="Conta">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
