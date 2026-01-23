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
import PaginaEmBreve from "./pages/PaginaEmBreve";

// Header Component
function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-4 cursor-pointer"
          >
            <img
              alt="Gráfica Curitiba Logo"
              className="h-10 sm:h-14 w-auto"
              src="logo.png"
            />
            <div className="flex flex-col">
              <span className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] leading-tight">
                Impressão Gráfica Offset e Digital
              </span>
              <span className="text-[11px] sm:text-[13px] text-[#666] font-medium">
                Curitiba
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
                  className="text-[14px] xl:text-[15px] font-medium text-[#333] hover:text-[#FF6B35] transition-colors relative group whitespace-nowrap cursor-pointer capitalize"
                >
                  {item.replace("-", " ")}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
                </button>
              ),
            )}
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#25D366] text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-medium text-[14px] xl:text-base shadow-lg hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg xl:text-xl"></i>
            <span>(41) 3024-0080</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1A1A1A] cursor-pointer"
          >
            <i
              className={`${menuOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              {["servicos", "diferenciais", "como-funciona", "contato"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-[15px] font-medium text-[#333] hover:text-[#FF6B35] transition-colors text-left cursor-pointer capitalize py-2"
                  >
                    {item.replace("-", " ")}
                  </button>
                ),
              )}
              <a
                href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium justify-center whitespace-nowrap cursor-pointer mt-2"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>(41) 3024-0080</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// WhatsApp Float Component
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 md:w-14 md:h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 z-50 animate-pulse-glow cursor-pointer"
      aria-label="Contato via WhatsApp"
    >
      <i className="ri-whatsapp-line text-white text-3xl md:text-2xl"></i>
    </a>
  );
}

// Sidebar Menu Data
const sidebarCategories = [
  {
    title: "Cartões de Visita",
    items: [
      { label: "Cartões de Visita", href: "/cartoes-de-visita" },
      { label: "Verniz Localizado", href: "/verniz-localizado" },
      { label: "HotStamping", href: "/hotstamping" },
      { label: "PVC Transparente", href: "/pvc-transparente" },
      { label: "Abridor de Garrafa", href: "/abridor-de-garrafa" },
    ],
  },
  {
    title: "Crachás e Cordões",
    items: [
      { label: "Crachás Personalizados", href: "/crachas-e-cordoes" },
      { label: "Cordões Personalizado", href: "/cordoes-personalizado" },
      { label: "Credenciais Papel e PVC", href: "/credenciais" },
    ],
  },
  {
    title: "Identificação e Etiquetas",
    items: [
      { label: "LixoCar", href: "/lixocar" },
      { label: "Lacre de Alimentos", href: "/lacre-de-alimentos" },
      { label: "Pulseiras de Festa", href: "/pulseiras-de-festa" },
      { label: "Etiqueta Troca Óleo", href: "/etiqueta-troca-oleo" },
      { label: "Imã de Geladeira", href: "/ima-de-geladeira" },
      { label: "Roller Clip", href: "/roller-clip" },
    ],
  },
  {
    title: "Banner e Lonas",
    items: [{ label: "Banner e Lonas", href: "/banners" }],
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
    title: "Folders e Panfletos",
    items: [
      { label: "Folders e Panfletos", href: "/panfletos" },
      { label: "Folder A4 2 Dobras", href: "/folder-a4-2-dobras" },
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
    title: "Outros Produtos",
    items: [{ label: "Calendários", href: "/calendarios" }],
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
        className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] bg-white border-r border-[#E5E5E5] overflow-y-auto z-30 transition-transform duration-300 w-[280px] sm:w-72 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6">
          {/* Home Link */}
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all cursor-pointer bg-[#FF6B35] text-white"
          >
            <i className="ri-home-line text-lg"></i>
            <span className="font-medium text-[15px]">Início</span>
          </Link>

          {/* Categories */}
          <div className="mt-6 space-y-2">
            {sidebarCategories.map((category) => (
              <div key={category.title}>
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-[#1A1A1A] font-semibold text-[14px] hover:bg-[#F5F5F5] rounded-lg transition-colors cursor-pointer"
                >
                  <span>{category.title}</span>
                  <i
                    className={`ri-arrow-down-s-line text-lg transition-transform ${
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
                        className="block px-4 py-2 rounded-lg text-[14px] transition-all cursor-pointer text-[#666] hover:bg-[#F9F9F9] hover:text-[#FF6B35]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 mt-6 bg-[#25D366] text-white rounded-lg font-medium text-[15px] hover:bg-[#20BD5A] transition-all cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </aside>
    </>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="contato" className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img
                alt="Gráfica Curitiba Logo"
                className="h-10 sm:h-12 w-auto"
                src="logo.png"
              />
            </div>
            <p className="text-[14px] sm:text-[15px] font-semibold mb-2">
              Gráfica e Web Sites
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#B0B0B0] leading-relaxed">
              Impressão gráfica profissional em Curitiba desde 2010. Qualidade e
              atendimento personalizado.
            </p>
            <p className="text-[14px] sm:text-[15px]  mb-2">
              CNPJ: 42.916.243/0001-14
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4">
              Contato
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:+554130240080"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-[#D0D0D0] hover:text-white transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-base sm:text-lg"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a
                href="https://wa.me/554130240080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-[13px] sm:text-[15px] text-[#25D366] hover:text-[#20BD5A] transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line text-base sm:text-lg"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a
                href="mailto:curitbagrafica@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-[#D0D0D0] hover:text-white transition-colors cursor-pointer break-all"
              >
                <i className="ri-mail-line text-base sm:text-lg flex-shrink-0"></i>
                <span className="text-[13px] sm:text-[14px]">
                  curitbagrafica@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Column 3 - Location */}
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4">
              Localização
            </h3>
            <div className="space-y-2 sm:space-y-3 text-[13px] sm:text-[15px] text-[#D0D0D0]">
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-map-pin-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <span>
                  Fazendinha - Curitiba - PR
                  <br />
                  Av. Alcir Martins Bastos - 62
                  <br />
                  CEP: 81.330-400
                </span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <i className="ri-time-line text-base sm:text-lg mt-0.5 flex-shrink-0"></i>
                <span>
                  Seg a Sex: 8h às 18h
                  <br />
                  Sábado: 8h às 12h
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Quick Links */}
          <div className="">
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4">
              Serviços
            </h3>
            <ul className="space-y-2 text-[13px] sm:text-[15px]">
              <li>
                <a
                  href="#servicos"
                  className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer"
                >
                  Cartões de Visita
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer"
                >
                  Flyers e Folders
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer"
                >
                  Banners e Lonas
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer"
                >
                  Materiais Corporativos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer"
                >
                  Adesivos e Etiquetas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className="">
            <h3 className="text-[14px] sm:text-[16px] font-bold mb-3 sm:mb-4">
              Redes Sociais
            </h3>

            <ul className="space-y-3 text-[13px] sm:text-[15px]">
              <li>
                <a
                  href="https://www.instagram.com/graficacuritibaonline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#D0D0D0] hover:text-[#E1306C] transition-colors"
                >
                  <i className="ri-instagram-line text-lg"></i>
                  <span>Instagram</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@graficacuritibaonline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#D0D0D0] hover:text-[#FF0000] transition-colors"
                >
                  <i className="ri-youtube-line text-lg"></i>
                  <span>YouTube</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/GraficaCuritiba2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#D0D0D0] hover:text-[#1877F2] transition-colors"
                >
                  <i className="ri-facebook-line text-lg"></i>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A1A1A] py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-2 text-[11px] sm:text-[13px] text-[#808080] text-center">
            <p>
              © 2026 Gráfica Curitiba - Impressão Profissional | Todos os
              direitos reservados
            </p>
            <p>
              Desenvolvido por{" "}
              <a
                href="https://www.smartlanding.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B35] hover:text-[#00A859] transition-colors cursor-pointer"
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
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    href: "/cartoes-de-visita",
  },
  {
    icon: "ri-file-paper-2-line",
    title: "Panfletos",
    description:
      "Panfletos e folders personalizados para divulgação eficiente do seu negócio. Impressão colorida em alta resolução, diversos formatos e acabamentos. Gráfica em Curitiba atendendo todo o Brasil.",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&h=400&fit=crop",
    href: "/panfletos",
  },
  {
    icon: "ri-id-card-line",
    title: "Crachás e Cordões",
    description:
      "Crachás personalizados e cordões para eventos corporativos, convenções e empresas. Material resistente, impressão profissional e durabilidade garantida. Produzido em Curitiba para todo o país.",
    image:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=600&h=400&fit=crop",
    href: "/crachas-e-cordoes",
  },
  {
    icon: "ri-image-line",
    title: "Banners",
    description:
      "Banners personalizados para eventos, fachadas e pontos de venda. Impressão digital em altíssima resolução com materiais duráveis e resistentes. Gráfica Curitiba com entrega nacional.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
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
    color: "bg-[#00A859]",
    text: "Excelente qualidade de impressão! Os cartões de visita ficaram perfeitos e a entrega foi super rápida. Recomendo muito a Gráfica Curitiba para quem busca profissionalismo.",
  },
  {
    name: "Juliana Santos",
    role: "Proprietária - Boutique Elegance",
    initial: "J",
    color: "bg-[#FF6B35]",
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
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=1920&h=1080&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Gráfica em Curitiba com Impressão Profissional e Entrega Rápida
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Cartões, folders, banners e materiais corporativos com qualidade
            superior. Atendimento via WhatsApp e produção local.
          </p>

          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
            <i className="ri-arrow-right-line text-lg sm:text-xl hidden sm:inline"></i>
          </a>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white/80 text-xs sm:text-sm">
            <div className="flex items-center gap-0.5 sm:gap-1">
              <i className="ri-star-fill text-[#FFB800] text-base sm:text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-base sm:text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-base sm:text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-base sm:text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-base sm:text-lg"></i>
            </div>
            <span className="font-medium">
              Avaliação 4.9 no Google | +500 clientes
            </span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#1A1A1A] mb-3 sm:mb-4 px-2">
              Serviços de Impressão Gráfica em Curitiba
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed px-2">
              <strong>Gráfica em Curitiba</strong> especializada em materiais
              promocionais e corporativos de alta qualidade. Produção local com{" "}
              <strong>entrega para todo o Brasil</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-[0_12px_32px_rgba(255,107,53,0.15)] hover:border-[#FF6B35] transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    alt={`${service.title} - Gráfica Curitiba`}
                    title={`${service.title} impressão digital em Curitiba`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#FFF4F0] rounded-lg mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <i
                      className={`${service.icon} text-xl sm:text-2xl text-[#FF6B35]`}
                    ></i>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#555] leading-relaxed mb-4 sm:mb-5 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] text-[#FF6B35] font-semibold group-hover:gap-2 transition-all duration-300">
                    Solicitar Orçamento
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-[13px] sm:text-[15px] text-[#666] mb-4 sm:mb-6 px-2">
              <strong>Atendimento em Curitiba e Região Metropolitana</strong> •
              Entregamos para todo o Brasil
            </p>
            <a
              href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[14px] sm:text-[15px] hover:bg-[#E5562A] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section
        id="diferenciais"
        className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FA]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6 leading-tight">
                Por Que Escolher a Gráfica Curitiba?
              </h2>
              <p className="text-sm sm:text-base lg:text-[17px] text-[#555] leading-relaxed mb-6 sm:mb-8">
                Somos especialistas em impressão gráfica com atendimento
                personalizado e produção local. Qualidade garantida para sua
                empresa.
              </p>
              <a
                href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#00A859] text-[#00A859] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base hover:bg-[#00A859] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <i className="ri-customer-service-2-line text-lg sm:text-xl"></i>
                Falar com Especialista
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {differentials.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#FFF4F0] rounded-full flex-shrink-0">
                      <i
                        className={`${item.icon} text-xl sm:text-2xl text-[#FF6B35]`}
                      ></i>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A1A1A] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[12px] sm:text-[14px] text-[#666] leading-relaxed">
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
        className="py-12 sm:py-16 lg:py-24 bg-[#FAFAFA]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-[#1A1A1A] mb-2 sm:mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666]">
              Simples, rápido e profissional
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 border-t-2 border-dashed border-[#00A859]/30"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#FF6B35] text-white text-lg sm:text-xl lg:text-2xl font-bold rounded-full mb-3 sm:mb-5 shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-[#FFF4F0] rounded-full mb-3 sm:mb-5">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl text-[#FF6B35]`}
                    ></i>
                  </div>
                  <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-[#1A1A1A] mb-1 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-[#666] max-w-[200px] sm:max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a
              href="https://wa.me/554130240080?text=Olá!%20Quero%20iniciar%20meu%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
              <span>Iniciar Meu Pedido</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F1F8F4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-bold text-[#1A1A1A] mb-2 sm:mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666]">
              Avaliações reais de empresas que confiam em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  <i className="ri-star-fill text-[#FFB800] text-lg sm:text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-lg sm:text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-lg sm:text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-lg sm:text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-lg sm:text-xl"></i>
                </div>
                <p className="text-[14px] sm:text-[16px] text-[#333] leading-relaxed italic mb-4 sm:mb-6 relative">
                  <span className="text-[#00A859] text-2xl sm:text-3xl absolute -top-1 sm:-top-2 -left-1">
                    "
                  </span>
                  <span className="pl-3 sm:pl-4">{testimonial.text}</span>
                  <span className="text-[#00A859] text-2xl sm:text-3xl">"</span>
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${testimonial.color} text-white font-bold text-base sm:text-lg flex-shrink-0`}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[14px] sm:text-[15px] font-bold text-[#1A1A1A]">
                      {testimonial.name}
                    </div>
                    <div className="text-[11px] sm:text-[13px] text-[#666] truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                <i className="ri-google-fill text-xl sm:text-2xl text-[#4285F4]"></i>
              </div>
              <div className="text-left">
                <div className="text-[13px] sm:text-[15px] font-bold text-[#1A1A1A]">
                  Avaliação 4.9 de 5.0 no Google
                </div>
                <a
                  href="https://www.google.com/search?q=gráfica+curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] sm:text-[13px] text-[#00A859] hover:underline cursor-pointer"
                >
                  Ver todas as avaliações →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#00A859] to-[#00875A] overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="absolute top-10 left-10 w-24 sm:w-32 h-24 sm:h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 sm:w-40 h-32 sm:h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-20 sm:w-24 h-20 sm:h-24 border-4 border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-4 sm:mb-6 leading-tight">
            Pronto para Imprimir com Qualidade Profissional?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
            Fale agora com nossa equipe e receba seu orçamento personalizado em
            minutos
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span className="whitespace-nowrap">Falar com Especialista</span>
            <i className="ri-arrow-right-line text-lg sm:text-xl hidden sm:inline"></i>
          </a>
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/70">
            Atendimento de segunda a sexta, 8h às 18h
          </p>
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
function SidebarToggle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 w-14 h-14 lg:hidden flex items-center justify-center bg-[#FF6B35] text-white rounded-full shadow-lg hover:bg-[#E5562A] transition-all duration-300 z-40 cursor-pointer"
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
            {/* Páginas em desenvolvimento */}
            <Route path="/verniz-localizado" element={<PaginaEmBreve />} />
            <Route path="/hotstamping" element={<PaginaEmBreve />} />
            <Route path="/pvc-transparente" element={<PaginaEmBreve />} />
            <Route path="/abridor-de-garrafa" element={<PaginaEmBreve />} />
            <Route path="/cordoes-personalizado" element={<PaginaEmBreve />} />
            <Route path="/credenciais" element={<PaginaEmBreve />} />
            <Route path="/lixocar" element={<PaginaEmBreve />} />
            <Route path="/lacre-de-alimentos" element={<PaginaEmBreve />} />
            <Route path="/pulseiras-de-festa" element={<PaginaEmBreve />} />
            <Route path="/etiqueta-troca-oleo" element={<PaginaEmBreve />} />
            <Route path="/ima-de-geladeira" element={<PaginaEmBreve />} />
            <Route path="/roller-clip" element={<PaginaEmBreve />} />
            <Route path="/pastas-personalizadas" element={<PaginaEmBreve />} />
            <Route path="/envelopes" element={<PaginaEmBreve />} />
            <Route path="/papel-timbrado" element={<PaginaEmBreve />} />
            <Route
              path="/blocos-anotacoes-recibo"
              element={<PaginaEmBreve />}
            />
            <Route path="/blocos-de-anotacoes" element={<PaginaEmBreve />} />
            <Route path="/receituario-especial" element={<PaginaEmBreve />} />
            <Route path="/folder-a4-2-dobras" element={<PaginaEmBreve />} />
            <Route path="/adesivo-resinado" element={<PaginaEmBreve />} />
            <Route path="/adesivo-casca-de-ovo" element={<PaginaEmBreve />} />
            <Route path="/adesivos-papel-vinil" element={<PaginaEmBreve />} />
            <Route path="/calendarios" element={<PaginaEmBreve />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <WhatsAppFloat />
      <SidebarToggle onClick={() => setSidebarOpen(true)} />
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
