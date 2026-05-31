import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CartoesDeVisita from "./pages/CartoesDeVisita";
import Panfletos from "./pages/Panfletos";
import CrachasCordoes from "./pages/CrachasCordoes";
import Banners from "./pages/Banners";
import TripeParaBanner from "./pages/TripeParaBanner";
import { useWhatsApp } from "./hooks/useWhatsApp";
import PulseirasEventos from "./pages/PulseirasEventos";
import CarteirinhaCiptea from "./pages/CarteirinhaCiptea";
import Tapete from "./pages/Tapete";
import VernizLocalizado from "./pages/VernizLocalizado";
import HotStamping from "./pages/HotStamping";
import PVCTransparente from "./pages/PVCTransparente";
import CordoesPersonalizado from "./pages/CordoesPersonalizado";
import Credenciais from "./pages/Credenciais";
import LixoCar from "./pages/LixoCar";
import LacreAlimentos from "./pages/LacreAlimentos";
import PulseirasFesta from "./pages/PulseirasFesta";
import ImaGeladeira from "./pages/ImaGeladeira";
import RollerClip from "./pages/RollerClip";
import PastasPersonalizadas from "./pages/PastasPersonalizadas";
import Envelopes from "./pages/Envelopes";
import PapelTimbrado from "./pages/PapelTimbrado";
import BlocosAnotacoesRecibo from "./pages/BlocosAnotacoesRecibo";
import BlocosAnotacoes from "./pages/BlocosAnotacoes";
import ReceituarioEspecial from "./pages/ReceituarioEspecial";
import FolderA4Dobras from "./pages/FolderA4Dobras";
import AdesivoResinado from "./pages/AdesivoResinado";
import AdesivoCascaOvo from "./pages/AdesivoCascaOvo";
import AdesivoPapelVinil from "./pages/AdesivoPapelVinil";
import ProdutosAdemicon from "./pages/ProdutosAdemicon";
import ProdutosIgreen from "./pages/ProdutosIgreen";
import cartao from "./assets/produtos/cartao-promo.jpeg";
import folder from "./assets/produtos/panfletos-promo.jpeg";
import cordao from "./assets/produtos/cordao-promo.jpeg";
import imagemPromocao from "./assets/capa-nova.jpeg";

// Header Component
function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  // const { getUrl } = useWhatsApp();

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#000000] shadow-[0_4px_20px_rgba(212,175,55,0.15)]" : "bg-[#000000]/95 backdrop-blur-sm"
      }`}
    >
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 cursor-pointer ml-0"
          >
            <img
              alt="Gráfica Curitiba Logo"
              className="h-12 sm:h-16 w-auto"
              src="logo-luxo.png"
            />
            <div className="flex flex-col">
              <span className="text-[14px] sm:text-[18px] font-bold text-white leading-tight">
                Impressão Gráfica <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Premium</span>
              </span>
              <span className="text-[11px] sm:text-[13px] text-white/60 font-medium">
                Entregamos em todo Brasil
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {["servicos", "diferenciais", "como-funciona", "contato"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-[14px] xl:text-[15px] font-medium text-white/80 hover:text-[#D4AF37] transition-colors relative group whitespace-nowrap cursor-pointer capitalize"
                >
                  {item.replace("-", " ")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] group-hover:w-full transition-all duration-300"></span>
                </button>
              ),
            )}
          </nav>

          {/* WhatsApp Button Desktop 
          <a
            href={getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#25D366] text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-medium text-[14px] xl:text-base shadow-lg hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg xl:text-xl"></i>
            <span>(41) 3024-0080</span>
          </a>*/}

          {/* Mobile Menu Button - Hidden on mobile, using sidebar toggle instead */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hidden w-10 h-10 items-center justify-center text-[#1A1A1A] cursor-pointer"
          >
            <i
              className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu - Hidden, using sidebar instead */}
        {menuOpen && (
          <div className="hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              {["servicos", "diferenciais", "como-funciona", "contato"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-[15px] font-medium text-[#333] hover:text-[#D4AF37] transition-colors text-left cursor-pointer capitalize py-2"
                  >
                    {item.replace("-", " ")}
                  </button>
                ),
              )}
              {/*  <a
                href={getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium justify-center whitespace-nowrap cursor-pointer mt-2"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>(41) 3024-0080</span>
              </a>
              */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// WhatsApp Float Component

{
  /* 
function WhatsAppFloat() {
  const { getUrl } = useWhatsApp();

  return (
    <a
      href={getUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 md:w-14 md:h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 z-50 animate-pulse-glow cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <i className="ri-whatsapp-line text-white text-3xl md:text-2xl"></i>
    </a>
  );
}
  */
}

// Sidebar Menu Data
const sidebarCategories = [
  {
    title: "Parceiros Exclusivos",
    items: [
      { label: "Produtos Ademicon", href: "/produtos-ademicon" },
      { label: "Produtos Igreen", href: "/produtos-igreen" },
    ],
  },
  {
    title: "Cartões de Visita",
    items: [
      { label: "Cartões de Visita", href: "/cartoes-de-visita" },
      { label: "Verniz Localizado", href: "/verniz-localizado" },
      { label: "HotStamping", href: "/hotstamping" },
      { label: "PVC Transparente", href: "/pvc-transparente" },
    ],
  },
  {
    title: "Folders e Panfletos",
    items: [
      { label: "Folders e Panfletos", href: "/panfletos" },
      { label: "Folder A4 2 Dobras", href: "/folder-a4-2-dobras" },
    ],
  },
  {
    title: "Crachás e Cordões",
    items: [
      { label: "Crachás Personalizados", href: "/crachas-e-cordoes" },
      { label: "Cordões Personalizado", href: "/cordoes-personalizado" },
      { label: "Credenciais Papel e PVC", href: "/credenciais" },
      { label: "Roller Clip", href: "/roller-clip" },
      {
        label: "Carteirinha CIPTEA",
        href: "/cartoes-e-crachas/carteirinha-ciptea",
      },
    ],
  },
  {
    title: "Banner e Lonas",
    items: [
      { label: "Banner e Lonas", href: "/banners" },
      { label: "Tripé para Banner", href: "/tripe-para-banner" },
    ],
  },
  {
    title: "Pulseiras para Eventos",
    items: [
      {
        label: "Pulseiras para Eventos e Identificação",
        href: "/pulseiras-para-eventos-e-identificacao",
      },
    ],
  },
  {
    title: "Identificação e Etiquetas",
    items: [
      { label: "LixoCar", href: "/lixocar" },
      { label: "Lacre de Alimentos", href: "/lacre-de-alimentos" },
      { label: "Pulseiras de Festa", href: "/pulseiras-de-festa" },
      { label: "Imã de Geladeira", href: "/ima-de-geladeira" },
    ],
  },
  {
    title: "Pastas e Papelaria",
    items: [
      { label: "Pastas Personalizadas", href: "/pastas-personalizadas" },
      { label: "Envelopes", href: "/envelopes" },
      { label: "Papel Timbrado", href: "/papel-timbrado" },
      { label: "Blocos Anotações/Recibo", href: "/blocos-anotacoes-recibo" },
      { label: "Blocos de Anotações", href: "/blocos-de-anotacoes" },
      { label: "Receituário Especial", href: "/receituario-especial" },
    ],
  },
  {
    title: "Adesivos",
    items: [
      { label: "Adesivo Resinado", href: "/adesivo-resinado" },
      { label: "Adesivo Casca de Ovo", href: "/adesivo-casca-de-ovo" },
      { label: "Adesivos Papel - Vinil", href: "/adesivos-papel-vinil" },
    ],
  },
  {
    title: "Tapetes",
    items: [
      { label: "Tapetes Personalizados", href: "/tapetes-personalizados" },
    ],
  },
];

// Sidebar Component
function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  //const { getUrl } = useWhatsApp();

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] bg-gradient-to-b from-[#1A1A1A] to-[#252525] border-r border-[#D4AF37]/20 overflow-y-auto z-30 transition-transform duration-300 w-[calc(100vw-3rem)] sm:w-72 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-6">
          {/* Close button — mobile only */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <span className="text-[13px] font-semibold text-white/50 uppercase tracking-wider">Menu</span>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Fechar menu"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Home Link */}
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2 sm:gap-4 px-4 py-3 rounded-lg mb-2 transition-all cursor-pointer bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] shadow-[0_4px_15px_rgba(212,175,55,0.3)]"
          >
            <i className="ri-home-line text-lg"></i>
            <span className="font-bold text-[15px]">Início</span>
          </Link>

          {/* Categories */}
          <div className="mt-6 space-y-2">
            {sidebarCategories.map((category) => (
              <div key={category.title}>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-white font-semibold text-[14px] hover:bg-[#D4AF37]/10 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{category.title}</span>
                  <i
                    className={`ri-arrow-down-s-line text-lg text-[#D4AF37] transition-transform ${
                      openCategories.includes(category.title)
                        ? "rotate-180"
                        : ""
                    }`}
                  ></i>
                </button>
                {openCategories.includes(category.title) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-2 rounded-lg text-[14px] transition-all cursor-pointer text-white/60 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Button 
          <a
            href={getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 mt-6 bg-[#25D366] text-white rounded-lg font-medium text-[15px] hover:bg-[#20BD5A] transition-all cursor-pointer"
            id="btn-whatsapp-orcamento"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            <span>Solicitar Orçamento</span>

            
          </a>
          */}
        </div>
      </aside>
    </>
  );
}

// Footer Component
function Footer() {
  const { simpleUrl } = useWhatsApp();

  return (
    <footer id="contato" className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img
                alt="Gráfica Curitiba Logo"
                className="h-12 sm:h-14 w-auto"
                src="logo-luxo.png"
              />
            </div>
            <p className="text-[14px] sm:text-[15px] font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Impressão Gráfica Premium
            </p>
            <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed">
              Impressão gráfica profissional em Curitiba desde 2004. Qualidade premium e
              atendimento personalizado.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Contato
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+554130240080"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-base sm:text-lg text-[#D4AF37]"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a
                href={simpleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-[#25D366] hover:text-[#20BD5A] transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-base sm:text-lg"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a
                href="mailto:curitibagrafica@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer break-all"
              >
                <i className="ri-mail-line text-base sm:text-lg flex-shrink-0 text-[#D4AF37]"></i>
                <span className="text-[11px] sm:text-[15px]">
                  curitibagrafica@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Column 3 - Location */}
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Endereço
            </h3>
            <div className="space-y-2 sm:space-y-3 text-[13px] sm:text-[15px] text-white/70">
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-map-pin-line text-base sm:text-lg mt-0.5 flex-shrink-0 text-[#D4AF37]"></i>
                <span>
                  Gráfica Curitiba Limitada
                  <br />
                  Av. Alcir Martins Bastos, 62
                  <br />
                  Fazendinha - Curitiba - PR
                  <br />
                  CEP 81.330-400
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-truck-line text-base sm:text-lg mt-0.5 flex-shrink-0 text-[#D4AF37]"></i>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] font-medium">
                  Atendemos todo o Brasil
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-building-line text-base sm:text-lg mt-0.5 flex-shrink-0 text-[#D4AF37]"></i>
                <span>CNPJ 42.916.243/0001-14</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-time-line text-base sm:text-lg mt-0.5 flex-shrink-0 text-[#D4AF37]"></i>
                <span>Seg a Sex: 8:30h às 18h</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Redes Sociais
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="https://www.instagram.com/graficacuritibaonline/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-base sm:text-lg text-[#D4AF37]"></i>
                <span>@graficacuritibaonline</span>
              </a>
              <a
                href="https://www.youtube.com/@graficacuritibaonline"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <i className="ri-youtube-line text-base sm:text-lg text-[#D4AF37]"></i>
                <span>@graficacuritibaonline</span>
              </a>
              <a
                href="https://www.facebook.com/GraficaCuritiba2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-circle-line text-base sm:text-lg text-[#D4AF37]"></i>
                <span>GraficaCuritiba2</span>
              </a>
              <a
                href="https://graficacuritiba2026.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-white/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
              >
                <i className="ri-article-line text-base sm:text-lg text-[#D4AF37]"></i>
                <span>Blog Gráfica Curitiba</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-[#0A0A0A] py-4 sm:py-6 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-[11px] sm:text-[13px] text-white/50 text-center">
            <p>
              © 2026 Gráfica Curitiba - Impressão <span className="text-[#D4AF37]">Premium</span> | Todos os
              direitos reservados
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.smartlanding.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F4E4A6] transition-all cursor-pointer"
              >
                SmartLanding
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Services Data
const services = [
  {
    icon: "ri-bank-card-line",
    title: "Cartões de Visita",
    description:
      "Cartões de visita personalizados com impressão offset e digital de alta qualidade. Acabamento premium e papel diferenciado. Produção local em Curitiba com entrega rápida para todo o Brasil.",
    image: "/assets/produtos/cartaovisita2.jpeg",
    href: "/cartoes-de-visita",
  },
  {
    icon: "ri-file-paper-2-line",
    title: "Panfletos",
    description:
      "Panfletos e folders personalizados para divulgação eficiente do seu negócio. Impressão colorida em alta resolução, diversos formatos e acabamentos. Gráfica em Curitiba atendendo todo o Brasil.",
    image: "/assets/produtos/panfletos.jpeg",
    href: "/panfletos",
  },
  {
    icon: "ri-id-card-line",
    title: "Crachás e Cordões",
    description:
      "Crachás personalizados e cordões para eventos corporativos, convenções e empresas. Material resistente, impressão profissional e durabilidade garantida. Produzido em Curitiba para todo o país.",
    image: "/assets/produtos/cracha.jpeg",
    href: "/crachas-e-cordoes",
  },
  {
    icon: "ri-image-line",
    title: "Banners",
    description:
      "Banners personalizados para eventos, fachadas e pontos de venda. Impressão digital em altíssima resolução com materiais duráveis e resistentes. Gráfica Curitiba com entrega nacional.",
    image: "/assets/produtos/banner.jpeg",
    href: "/banners",
  },
];

// Differentials Data
const differentials = [
  {
    icon: "ri-medal-line",
    title: "Impressão de Alta Qualidade",
    description: "Equipamentos modernos e profissionais especializados",
  },
  {
    icon: "ri-map-pin-line",
    title: "Produção Local em Curitiba",
    description: "Atendimento personalizado e entrega rápida na região",
  },
  {
    icon: "ri-whatsapp-line",
    title: "Atendimento Rápido via WhatsApp",
    description: "Resposta imediata e orçamento em minutos",
  },
  {
    icon: "ri-building-line",
    title: "Experiência com Empresas",
    description: "Soluções corporativas para todos os segmentos",
  },
  {
    icon: "ri-truck-line",
    title: "Entrega Ágil na Região",
    description: "Logística eficiente em Curitiba e região metropolitana",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Orçamento sem Compromisso",
    description: "Transparência total e sem taxas ocultas",
  },
];

// How It Works Data
const howItWorks = [
  {
    step: 1,
    icon: "ri-file-search-line",
    title: "Escolha o Produto",
    description: "Selecione o material gráfico que precisa",
  },
  {
    step: 2,
    icon: "ri-upload-cloud-line",
    title: "Envie a Arte",
    description: "Envie seu arquivo ou solicite criação",
  },
  {
    step: 3,
    icon: "ri-checkbox-circle-line",
    title: "Aprovação Rápida",
    description: "Revisamos e enviamos prova digital",
  },
  {
    step: 4,
    icon: "ri-truck-line",
    title: "Produção e Entrega",
    description: "Imprimimos e entregamos em Curitiba",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Comercial - Imobiliária Prime",
    initial: "C",
    color: "bg-[#D4AF37]",
    text: "Excelente qualidade de impressão! Os cartões de visita ficaram perfeitos e a entrega foi super rápida. Recomendo muito a Gráfica Curitiba para quem busca profissionalismo.",
  },
  {
    name: "Juliana Santos",
    role: "Proprietária - Boutique Elegance",
    initial: "J",
    color: "bg-[#D4AF37]",
    text: "Atendimento impecável via WhatsApp! Tiraram todas as minhas dúvidas rapidamente e o orçamento foi muito justo. Os folders para minha loja ficaram lindos.",
  },
  {
    name: "Roberto Silva",
    role: "Gerente de Marketing - Construtora Horizonte",
    initial: "R",
    color: "bg-[#2196F3]",
    text: "Trabalho com a Gráfica Curitiba há mais de 2 anos. Sempre entregam no prazo e com qualidade excepcional. São meus parceiros de confiança para todos os materiais da empresa.",
  },
];

// Home Page Content Component
function HomePage() {
  const { getUrl } = useWhatsApp();

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-[#2C2C2C] via-[#1F1F1F] to-[#252525] pt-24 pb-14 sm:pt-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Golden glow effects */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          {/* Subtle golden lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
          {/* Corner accents */}
          <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-[#D4AF37]/20 rounded-tl-3xl"></div>
          <div className="absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 border-[#D4AF37]/20 rounded-tr-3xl"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-[#D4AF37]/20 rounded-bl-3xl"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37]/20 rounded-br-3xl"></div>
        </div>

        <div className="relative z-10 text-center mt-10 mb-2">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37]/20 via-[#F4D03F]/20 to-[#D4AF37]/20 border border-[#D4AF37]/50 rounded-full px-5 py-2.5 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <i className="ri-vip-crown-2-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] via-[#D4AF37] to-[#B8860B] text-xl drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.5px #D4AF37'}}></i>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] via-[#D4AF37] to-[#F4E4A6] text-sm font-bold tracking-widest uppercase drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">Qualidade Premium</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight px-4 max-w-4xl mx-auto">
            Gráfica em Curitiba com Impressão{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] via-[#FBF5B7] to-[#AA771C] drop-shadow-[0_0_30px_rgba(212,175,55,0.8)]">Premium</span> e Entrega Rápida em
            todo Brasil
          </h1>

          <p className="mt-4 text-white/60 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Materiais gráficos de alta qualidade com acabamento sofisticado para elevar a imagem da sua empresa
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4D03F]/15 to-[#D4AF37]/10 border border-[#D4AF37]/40 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <div className="flex items-center gap-0.5">
                <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] font-bold ml-2">4.9</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <i className="ri-verified-badge-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
              <span>+500 clientes satisfeitos</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <i className="ri-truck-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.6)]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
              <span>Entrega todo Brasil</span>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Showcase */}
          {/* Desktop: imagem combinada com áreas clicáveis sobrepostas */}
          <div className="hidden sm:block relative rounded-2xl overflow-hidden shadow-md">
            <img
              src={imagemPromocao}
              alt="Gráfica Curitiba - Materiais Gráficos Premium"
              className="w-full object-contain"
            />
            {/* Overlay: metade esquerda → Cartão de Visita */}
            <Link
              to="/cartoes-de-visita"
              className="absolute inset-y-0 left-0 w-1/2"
              aria-label="Ver Cartão de Visita"
            />
            {/* Overlay: quarto superior direito → Panfletos */}
            <Link
              to="/panfletos"
              className="absolute top-0 right-0 w-1/2 h-1/2"
              aria-label="Ver Panfletos"
            />
            {/* Overlay: quarto inferior direito → Cordão */}
            <Link
              to="/cordoes-personalizado"
              className="absolute bottom-0 right-0 w-1/2 h-1/2"
              aria-label="Ver Cordão para Crachá"
            />
          </div>

          {/* Mobile: 3 imagens empilhadas */}
          <div className="flex flex-col gap-4 sm:hidden">
            <Link
              to="/cartoes-de-visita"
              className="rounded-2xl overflow-hidden shadow-md block"
            >
              <img
                src={cartao}
                alt="Oferta Cartão de Visita"
                className="w-full object-contain"
              />
            </Link>
            <Link
              to="/panfletos"
              className="rounded-2xl overflow-hidden shadow-md block"
            >
              <img
                src={folder}
                alt="Oferta Panfletos"
                className="w-full object-contain"
              />
            </Link>
            <Link
              to="/cordoes-personalizado"
              className="rounded-2xl overflow-hidden shadow-md block"
            >
              <img
                src={cordao}
                alt="Oferta Cordão para Crachá"
                className="w-full object-contain"
              />
            </Link>
          </div>

          {/* Tagline + Rating (moved below product grid) */}
        </div>
      </section>

      {/* Não trabalhamos com Section */}
      <section className="relative py-8 sm:py-10 bg-gradient-to-b from-[#1A1A1A] to-[#1F1F1F] overflow-hidden border-y border-[#D4AF37]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-20 bg-red-900/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-5">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center bg-red-900/30 border border-red-500/40 rounded-full">
                <i className="ri-close-circle-line text-xl text-red-400"></i>
              </div>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-white whitespace-nowrap">
                Não trabalhamos com:
              </h2>
            </div>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-red-500/30 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {[
              { icon: "ri-file-copy-line", label: "Xerox / Cópias" },
              { icon: "ri-stack-line", label: "Plastificação" },
              { icon: "ri-image-line", label: "Revelação de Fotos" },
              { icon: "ri-cake-line", label: "Topo de Bolo" },
              { icon: "ri-book-open-line", label: "Revistas" },
              { icon: "ri-book-2-line", label: "Encadernação" },
              { icon: "ri-gift-line", label: "Brindes / Canetas" },
              { icon: "ri-newspaper-line", label: "Jornais" },
              { icon: "ri-shirt-line", label: "Camisetas / Uniformes" },
              { icon: "ri-cup-line", label: "Canecas / Objetos" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-red-950/20 border border-red-500/20 rounded-lg px-3 py-2.5 text-[13px] sm:text-[14px] text-red-300/80"
              >
                <i className={`${item.icon} text-red-400/70 flex-shrink-0`}></i>
                <span className="line-through decoration-red-500/50">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px] sm:text-[13px] text-white/40 text-center sm:text-left">
            Somos uma gráfica industrial especializada em impressão offset e digital. Para os itens acima, recomendamos buscar uma copiadora ou papelaria da sua região.
          </p>
        </div>
      </section>

      {/* Differentials Section */}
      <section
        id="diferenciais"
        className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#2C2C2C] via-[#232323] to-[#1F1F1F] overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
          <div className="absolute top-1/2 left-5 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          {/* Corner accents */}
          <div className="absolute top-10 right-10 w-16 h-16 border-r-2 border-t-2 border-[#D4AF37]/20 rounded-tr-2xl"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-l-2 border-b-2 border-[#D4AF37]/20 rounded-bl-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-bold text-white mb-4 sm:mb-6 leading-tight">
                Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">Gráfica Curitiba</span>?
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-white/70 leading-relaxed mb-6 sm:mb-8">
                Somos especialistas em impressão gráfica com atendimento
                personalizado e produção local. Qualidade premium garantida para sua
                empresa.
              </p>
              <a
                href={getUrl("especialista")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#D4AF37] text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base hover:bg-gradient-to-r hover:from-[#BF953F] hover:via-[#D4AF37] hover:to-[#AA771C] hover:text-[#0A0A0A] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-customer-service-2-line text-lg sm:text-xl text-[#D4AF37]"></i>
                Falar com Especialista
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {differentials.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-full flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                      <i
                        className={`${item.icon} text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37]`}
                        style={{WebkitTextStroke: '0.3px #D4AF37'}}
                      ></i>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[14px] sm:text-[16px] font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="como-funciona"
        className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#1F1F1F] via-[#252525] to-[#2C2C2C] overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
          <div className="absolute top-1/3 right-10 w-52 h-52 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-20 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white mb-2 sm:mb-4">
              Como Funciona Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">Processo</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/70">
              Simples, rápido e profissional
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 border-t-2 border-dashed border-[#D4AF37]/40"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] text-lg sm:text-xl lg:text-2xl font-bold rounded-full mb-3 sm:mb-5 shadow-[0_4px_20px_rgba(212,175,55,0.5)]">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-full mb-3 sm:mb-5 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37]`}
                      style={{WebkitTextStroke: '0.3px #D4AF37'}}
                    ></i>
                  </div>
                  <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-white mb-1 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-white/60 max-w-[200px] sm:max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href={getUrl("iniciar-pedido")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
              <span>Iniciar Meu Pedido</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#2C2C2C] via-[#232323] to-[#1F1F1F] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
          <div className="absolute top-20 left-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-56 h-56 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-bold text-white mb-2 sm:mb-4">
              O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Clientes</span> Dizem
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/70">
              Avaliações reais de empresas que confiam em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg sm:text-xl" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                  <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg sm:text-xl" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                  <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg sm:text-xl" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                  <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg sm:text-xl" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                  <i className="ri-star-fill text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-lg sm:text-xl" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
                </div>
                <p className="text-[14px] sm:text-[16px] text-white/80 leading-relaxed italic mb-4 sm:mb-6 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-2xl sm:text-3xl absolute -top-1 sm:-top-2 -left-1">
                    "
                  </span>
                  <span className="pl-3 sm:pl-4">{testimonial.text}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37] text-2xl sm:text-3xl">"</span>
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] font-bold text-base sm:text-lg flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14px] sm:text-[15px] font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-[11px] sm:text-[13px] text-white/60 truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/30 px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="ri-google-fill text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37]" style={{WebkitTextStroke: '0.3px #D4AF37'}}></i>
              </div>
              <div className="text-left">
                <div className="text-[13px] sm:text-[15px] font-bold text-white">
                  Avaliação <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">4.9</span> de 5.0 no Google
                </div>
                <a
                  href="https://www.google.com/search?q=gráfica+curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] sm:text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] hover:underline cursor-pointer"
                >
                  Ver todas as avaliações →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 border-2 border-[#0D0D0D]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 border-2 border-[#0D0D0D]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 border-2 border-[#0D0D0D]/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0D0D0D] mb-4 sm:mb-6 leading-tight">
            Pronto para Imprimir com Qualidade Premium?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#0D0D0D]/80 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            Fale agora com nossa equipe e receba seu orçamento personalizado em
            minutos
          </p>
          <a
            href={getUrl("especialista")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#0D0D0D] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span className="whitespace-nowrap text-sm sm:text-base">Falar com Especialista</span>
            <i className="ri-arrow-right-line text-lg sm:text-xl hidden sm:inline"></i>
          </a>
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#0D0D0D]/70">
            Atendimento de segunda a sexta, 8h às 18h
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#2C2C2C] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
          <div className="absolute top-20 right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white mb-3 sm:mb-4 px-2">
              Serviços de Impressão <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">Premium</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
              Gráfica em Curitiba especializada em materiais
              promocionais e corporativos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">alta qualidade</span>. Produção local com
              entrega para todo o Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:shadow-[0_12px_32px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-40 sm:h-56 lg:h-64 overflow-hidden relative">
                  <img
                    alt={`${service.title} - Gráfica Curitiba`}
                    title={`${service.title} impressão digital em Curitiba`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60"></div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-lg mb-3 sm:mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
                    <i
                      className={`${service.icon} text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-b from-[#F4E4A6] to-[#D4AF37]`}
                      style={{WebkitTextStroke: '0.3px #D4AF37'}}
                    ></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-bold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-white/60 leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] font-semibold group-hover:gap-2 transition-all duration-300">
                    Solicitar Orçamento
                    <i className="ri-arrow-right-line text-[#D4AF37]"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-[13px] sm:text-[15px] text-white/60 mb-4 sm:mb-6 px-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Atendimento em Curitiba e Região Metropolitana</span> •
              Entregamos para todo o Brasil
            </p>

            <a
              href={getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.5)] transition-all duration-300 cursor-pointer"
              id="btn-whatsapp-orcamento"
            >
              <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Sidebar Toggle Button Component
function SidebarToggle({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  if (isOpen) return null;
  return (
    <button
      onClick={onClick}
      className="fixed top-24 left-4 w-14 h-14 lg:hidden flex items-center justify-center bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] transition-all duration-300 z-40 cursor-pointer"
      aria-label="Abrir menu de produtos"
    >
      <i className="ri-menu-2-line text-2xl"></i>
    </button>
  );
}

// Layout Component
function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header scrolled={scrolled} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartoes-de-visita" element={<CartoesDeVisita />} />
            <Route path="/panfletos" element={<Panfletos />} />
            <Route path="/crachas-e-cordoes" element={<CrachasCordoes />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/tripe-para-banner" element={<TripeParaBanner />} />
            {/* Páginas de produtos */}
            <Route path="/verniz-localizado" element={<VernizLocalizado />} />
            <Route path="/hotstamping" element={<HotStamping />} />
            <Route path="/pvc-transparente" element={<PVCTransparente />} />
            <Route
              path="/cordoes-personalizado"
              element={<CordoesPersonalizado />}
            />
            <Route path="/credenciais" element={<Credenciais />} />
            <Route path="/lixocar" element={<LixoCar />} />
            <Route path="/lacre-de-alimentos" element={<LacreAlimentos />} />
            <Route path="/pulseiras-de-festa" element={<PulseirasFesta />} />
            <Route path="/ima-de-geladeira" element={<ImaGeladeira />} />
            <Route path="/roller-clip" element={<RollerClip />} />
            <Route
              path="/pastas-personalizadas"
              element={<PastasPersonalizadas />}
            />
            <Route path="/envelopes" element={<Envelopes />} />
            <Route path="/papel-timbrado" element={<PapelTimbrado />} />
            <Route
              path="/blocos-anotacoes-recibo"
              element={<BlocosAnotacoesRecibo />}
            />
            <Route path="/tapetes-personalizados" element={<Tapete />} />
            <Route path="/blocos-de-anotacoes" element={<BlocosAnotacoes />} />
            <Route
              path="/receituario-especial"
              element={<ReceituarioEspecial />}
            />
            <Route path="/folder-a4-2-dobras" element={<FolderA4Dobras />} />
            <Route path="/adesivo-resinado" element={<AdesivoResinado />} />
            <Route path="/adesivo-casca-de-ovo" element={<AdesivoCascaOvo />} />
            <Route
              path="/adesivos-papel-vinil"
              element={<AdesivoPapelVinil />}
            />
            <Route
              path="/pulseiras-para-eventos-e-identificacao"
              element={<PulseirasEventos />}
            />
            <Route
              path="/cartoes-e-crachas/carteirinha-ciptea"
              element={<CarteirinhaCiptea />}
            />
            <Route
              path="/produtos-ademicon"
              element={<ProdutosAdemicon />}
            />
            <Route
              path="/produtos-igreen"
              element={<ProdutosIgreen />}
            />

            {/*<Route path="/calendarios" element={<PaginaEmBreve />} />*/}
          </Routes>
        </main>
      </div>
      <Footer />
      {/*   <WhatsAppFloat />*/}
      <SidebarToggle onClick={() => setSidebarOpen(true)} isOpen={sidebarOpen} />
    </div>
  );
}

// App Component with Router
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
