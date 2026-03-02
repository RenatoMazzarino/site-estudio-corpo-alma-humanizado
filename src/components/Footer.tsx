import { Clock, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary-light">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <g>
                    <path
                      d="M50 20 C45 25, 40 30, 35 40 L50 45 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M50 20 C55 25, 60 30, 65 40 L50 45 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M35 40 C30 45, 25 50, 25 60 L50 55 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <path
                      d="M65 40 C70 45, 75 50, 75 60 L50 55 Z"
                      fill="none"
                      stroke="#C1A0AF"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="55" r="8" fill="none" stroke="#C1A0AF" strokeWidth="2" />
                    <path
                      d="M30 70 Q35 65, 40 62"
                      fill="none"
                      stroke="#5B6D54"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 70 Q65 65, 60 62"
                      fill="none"
                      stroke="#5B6D54"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <div className="font-heading text-base font-semibold text-foreground leading-tight">
                  Estúdio Corpo & Alma Humanizado
                </div>
              </div>
            </div>
            <p className="font-paragraph text-sm text-text-secondary leading-relaxed">
              Terapia manual premium, com acolhimento real — para desinflamar o corpo, aliviar
              tensões e devolver presença.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="font-paragraph text-sm text-text-secondary">
                  <p>[Rua Silva Pinto, 186 - Centro Historico, Amparo/SP,CEP 13900-319]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="font-paragraph text-sm text-text-secondary">
                  <p>[HORÁRIOS]</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/[WHATSAPP]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  [WHATSAPP]
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Instagram size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://instagram.com/[INSTAGRAM]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  [@CORPOEALMAHUMANIZADO]
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/servicos"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Serviços
              </Link>
              <Link
                to="/jana"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Sobre Jana
              </Link>
              <Link
                to="/plano-personalizado"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Plano Personalizado
              </Link>
              <Link
                to="/depoimentos"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Depoimentos
              </Link>
              <Link
                to="/agendar"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Agendar
              </Link>
            </nav>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <h3 className="font-heading text-lg font-semibold text-foreground">Informações</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/faq"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Perguntas Frequentes
              </Link>
              <Link
                to="/privacidade"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                to="/login"
                className="font-paragraph text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Portal do Cliente
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-text-secondary text-center md:text-left">
              © {new Date().getFullYear()} Estúdio Corpo & Alma Humanizado. Todos os direitos
              reservados.
            </p>
            <p className="font-paragraph text-xs text-text-secondary italic">
              Toque que alivia, cuidado que transforma.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
