import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import CartoesDeVisita from './pages/CartoesDeVisita'

// Header Component
function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer">
            <img
              alt="Gráfica Curitiba Logo"
              className="h-14 w-auto"
              src="https://static.readdy.ai/image/70bf5e03c1d0a5779acdfda365627545/14dca3cdf069e880b6fbe9e526d42260.png"
            />
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-[#1A1A1A] leading-tight">Gráfica e Web Sites</span>
              <span className="text-[13px] text-[#666] font-medium">Curitiba</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['servicos', 'diferenciais', 'como-funciona', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[15px] font-medium text-[#333] hover:text-[#FF6B35] transition-colors relative group whitespace-nowrap cursor-pointer capitalize"
              >
                {item.replace('-', ' ')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* WhatsApp Button Desktop */}
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            <span>(41) 3024-0080</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#1A1A1A] cursor-pointer"
          >
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {['servicos', 'diferenciais', 'como-funciona', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-[15px] font-medium text-[#333] hover:text-[#FF6B35] transition-colors text-left cursor-pointer capitalize"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
              <a
                href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium justify-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>(41) 3024-0080</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
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
  )
}

// Sidebar Menu Data
const sidebarCategories = [
  {
    title: 'Cartões de Visita',
    items: [
      { label: 'Cartões de Visita', href: '/cartoes-de-visita' },
      { label: 'Verniz Localizado', href: '/verniz-localizado' },
      { label: 'HotStamping', href: '/hotstamping' },
      { label: 'PVC Transparente', href: '/pvc-transparente' },
      { label: 'Abridor de Garrafa', href: '/abridor-de-garrafa' },
    ],
  },
  {
    title: 'Crachás e Cordões',
    items: [
      { label: 'Crachás Personalizados', href: '/crachas-e-cordoes' },
      { label: 'Cordões Personalizado', href: '/cordoes-personalizado' },
      { label: 'Credenciais Papel e PVC', href: '/credenciais' },
    ],
  },
  {
    title: 'Identificação e Etiquetas',
    items: [
      { label: 'LixoCar', href: '/lixocar' },
      { label: 'Lacre de Alimentos', href: '/lacre-de-alimentos' },
      { label: 'Pulseiras de Festa', href: '/pulseiras-de-festa' },
      { label: 'Etiqueta Troca Óleo', href: '/etiqueta-troca-oleo' },
      { label: 'Imã de Geladeira', href: '/ima-de-geladeira' },
      { label: 'Roller Clip', href: '/roller-clip' },
    ],
  },
  {
    title: 'Banner e Lonas',
    items: [
      { label: 'Banner e Lonas', href: '/banners' },
    ],
  },
  {
    title: 'Pastas e Papelaria',
    items: [
      { label: 'Pastas Personalizadas', href: '/pastas-personalizadas' },
      { label: 'Envelopes', href: '/envelopes' },
      { label: 'Papel Timbrado', href: '/papel-timbrado' },
      { label: 'Blocos Anotações/Recibo', href: '/blocos-anotacoes-recibo' },
      { label: 'Blocos de Anotações', href: '/blocos-de-anotacoes' },
      { label: 'Receituário Especial', href: '/receituario-especial' },
    ],
  },
  {
    title: 'Folders e Panfletos',
    items: [
      { label: 'Folders e Panfletos', href: '/panfletos' },
      { label: 'Folder A4 2 Dobras', href: '/folder-a4-2-dobras' },
    ],
  },
  {
    title: 'Adesivos',
    items: [
      { label: 'Adesivo Resinado', href: '/adesivo-resinado' },
      { label: 'Adesivo Casca de Ovo', href: '/adesivo-casca-de-ovo' },
      { label: 'Adesivos Papel - Vinil', href: '/adesivos-papel-vinil' },
    ],
  },
  {
    title: 'Outros Produtos',
    items: [
      { label: 'Calendários', href: '/calendarios' },
    ],
  },
]

// Sidebar Component
function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openCategories, setOpenCategories] = useState<string[]>([])

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    )
  }

  return (
    <aside
      className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] bg-white border-r border-[#E5E5E5] overflow-y-auto z-30 transition-transform duration-300 w-72 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
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
                    openCategories.includes(category.title) ? 'rotate-180' : ''
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
  )
}

// Footer Component
function Footer() {
  return (
    <footer id="contato" className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                alt="Gráfica Curitiba Logo"
                className="h-12 w-auto"
                src="https://static.readdy.ai/image/70bf5e03c1d0a5779acdfda365627545/14dca3cdf069e880b6fbe9e526d42260.png"
              />
            </div>
            <p className="text-[15px] font-semibold mb-2">Gráfica e Web Sites</p>
            <p className="text-[14px] text-[#B0B0B0] leading-relaxed">
              Impressão gráfica profissional em Curitiba desde 2010. Qualidade, agilidade e atendimento personalizado para sua empresa.
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+554130240080" className="flex items-center gap-3 text-[15px] text-[#D0D0D0] hover:text-white transition-colors cursor-pointer">
                <i className="ri-phone-line text-lg"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a href="https://wa.me/554130240080" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] text-[#25D366] hover:text-[#20BD5A] transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-lg"></i>
                <span>(41) 3024-0080</span>
              </a>
              <a href="mailto:contato@graficacuritiba.com.br" className="flex items-center gap-3 text-[15px] text-[#D0D0D0] hover:text-white transition-colors cursor-pointer">
                <i className="ri-mail-line text-lg"></i>
                <span>contato@graficacuritiba.com.br</span>
              </a>
            </div>
          </div>

          {/* Column 3 - Location */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">Localização</h3>
            <div className="space-y-3 text-[15px] text-[#D0D0D0]">
              <div className="flex items-start gap-3">
                <i className="ri-map-pin-line text-lg mt-0.5 flex-shrink-0"></i>
                <span>Curitiba – PR<br />Região Metropolitana</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="ri-time-line text-lg mt-0.5 flex-shrink-0"></i>
                <span>Seg a Sex: 8h às 18h<br />Sábado: 8h às 12h</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Quick Links */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="#servicos" className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer">
                  Cartões de Visita
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer">
                  Flyers e Folders
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer">
                  Banners e Lonas
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer">
                  Materiais Corporativos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-[#D0D0D0] hover:text-[#00A859] transition-colors cursor-pointer">
                  Adesivos e Etiquetas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A1A1A] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#808080]">
            <p>© 2026 Gráfica Curitiba - Impressão Profissional | Todos os direitos reservados</p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00A859] transition-colors cursor-pointer"
            >
              Website Builder
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Services Data
const services = [
  {
    icon: 'ri-bank-card-line',
    title: 'Cartões de Visita',
    description: 'Cartões de visita personalizados com impressão offset e digital de alta qualidade. Acabamento premium e papel diferenciado. Produção local em Curitiba com entrega rápida para todo o Brasil.',
    image: 'https://readdy.ai/api/search-image?query=elegant%20professional%20business%20cards%20with%20orange%20accents%20on%20wooden%20desk%2C%20high%20quality%20printing%2C%20premium%20paper%20texture%2C%20modern%20design%2C%20professional%20photography%2C%20clean%20background&width=600&height=400&seq=cartoes-visita-service&orientation=landscape',
    href: '/cartoes-de-visita',
  },
  {
    icon: 'ri-file-paper-2-line',
    title: 'Panfletos',
    description: 'Panfletos e folders personalizados para divulgação eficiente do seu negócio. Impressão colorida em alta resolução, diversos formatos e acabamentos. Gráfica em Curitiba atendendo todo o Brasil.',
    image: 'https://readdy.ai/api/search-image?query=colorful%20promotional%20flyers%20and%20brochures%20spread%20on%20table%2C%20vibrant%20orange%20colors%2C%20high%20quality%20print%20materials%2C%20professional%20marketing%20materials%2C%20bright%20lighting%2C%20clean%20composition&width=600&height=400&seq=panfletos-service&orientation=landscape',
    href: '/panfletos',
  },
  {
    icon: 'ri-id-card-line',
    title: 'Crachás e Cordões',
    description: 'Crachás personalizados e cordões para eventos corporativos, convenções e empresas. Material resistente, impressão profissional e durabilidade garantida. Produzido em Curitiba para todo o país.',
    image: 'https://readdy.ai/api/search-image?query=professional%20event%20badges%20and%20lanyards%20with%20orange%20branding%2C%20corporate%20identification%20cards%2C%20high%20quality%20materials%2C%20business%20conference%20accessories%2C%20modern%20design%2C%20clean%20white%20background&width=600&height=400&seq=crachas-cordoes-service&orientation=landscape',
    href: '/crachas-e-cordoes',
  },
  {
    icon: 'ri-image-line',
    title: 'Banners',
    description: 'Banners personalizados para eventos, fachadas e pontos de venda. Impressão digital em altíssima resolução com materiais duráveis e resistentes. Gráfica Curitiba com entrega nacional.',
    image: 'https://readdy.ai/api/search-image?query=large%20format%20promotional%20banner%20display%20with%20orange%20design%2C%20professional%20trade%20show%20banner%2C%20high%20resolution%20printing%2C%20durable%20vinyl%20material%2C%20business%20event%20display%2C%20modern%20storefront%20banner&width=600&height=400&seq=banners-service&orientation=landscape',
    href: '/banners',
  },
]

// Differentials Data
const differentials = [
  {
    icon: 'ri-medal-line',
    title: 'Impressão de Alta Qualidade',
    description: 'Equipamentos modernos e profissionais especializados',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Produção Local em Curitiba',
    description: 'Atendimento personalizado e entrega rápida na região',
  },
  {
    icon: 'ri-whatsapp-line',
    title: 'Atendimento Rápido via WhatsApp',
    description: 'Resposta imediata e orçamento em minutos',
  },
  {
    icon: 'ri-building-line',
    title: 'Experiência com Empresas',
    description: 'Soluções corporativas para todos os segmentos',
  },
  {
    icon: 'ri-truck-line',
    title: 'Entrega Ágil na Região',
    description: 'Logística eficiente em Curitiba e região metropolitana',
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Orçamento sem Compromisso',
    description: 'Transparência total e sem taxas ocultas',
  },
]

// How It Works Data
const howItWorks = [
  {
    step: 1,
    icon: 'ri-file-search-line',
    title: 'Escolha o Produto',
    description: 'Selecione o material gráfico que precisa',
  },
  {
    step: 2,
    icon: 'ri-upload-cloud-line',
    title: 'Envie a Arte',
    description: 'Envie seu arquivo ou solicite criação',
  },
  {
    step: 3,
    icon: 'ri-checkbox-circle-line',
    title: 'Aprovação Rápida',
    description: 'Revisamos e enviamos prova digital',
  },
  {
    step: 4,
    icon: 'ri-truck-line',
    title: 'Produção e Entrega',
    description: 'Imprimimos e entregamos em Curitiba',
  },
]

// Testimonials Data
const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Diretor Comercial - Imobiliária Prime',
    initial: 'C',
    color: 'bg-[#00A859]',
    text: 'Excelente qualidade de impressão! Os cartões de visita ficaram perfeitos e a entrega foi super rápida. Recomendo muito a Gráfica Curitiba para quem busca profissionalismo.',
  },
  {
    name: 'Juliana Santos',
    role: 'Proprietária - Boutique Elegance',
    initial: 'J',
    color: 'bg-[#FF6B35]',
    text: 'Atendimento impecável via WhatsApp! Tiraram todas as minhas dúvidas rapidamente e o orçamento foi muito justo. Os folders para minha loja ficaram lindos.',
  },
  {
    name: 'Roberto Silva',
    role: 'Gerente de Marketing - Construtora Horizonte',
    initial: 'R',
    color: 'bg-[#2196F3]',
    text: 'Trabalho com a Gráfica Curitiba há mais de 2 anos. Sempre entregam no prazo e com qualidade excepcional. São meus parceiros de confiança para todos os materiais da empresa.',
  },
]

// Home Page Content Component
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage: 'url("https://readdy.ai/api/search-image?query=professional%20printing%20materials%20business%20cards%20flyers%20folders%20banners%20high%20quality%20printed%20products%20on%20clean%20modern%20desk%20with%20soft%20lighting%20professional%20photography%20style%20minimalist%20background%20corporate%20branding%20materials%20arranged%20neatly%20shallow%20depth%20of%20field%20bright%20clean%20aesthetic&width=1920&height=1080&seq=hero-grafica-001&orientation=landscape")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/45"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Gráfica em Curitiba com Impressão Profissional e Entrega Rápida
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cartões, folders, banners e materiais corporativos com qualidade superior. Atendimento via WhatsApp e produção local.
          </p>

          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-12 py-5 rounded-full text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            <span>Solicitar Orçamento Agora</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </a>

          <div className="mt-8 flex items-center justify-center gap-2 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <i className="ri-star-fill text-[#FFB800] text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-lg"></i>
              <i className="ri-star-fill text-[#FFB800] text-lg"></i>
            </div>
            <span className="font-medium">Avaliação 4.9 no Google | +500 clientes atendidos</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[42px] font-bold text-[#1A1A1A] mb-4">
              Serviços de Impressão Gráfica em Curitiba
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              <strong>Gráfica em Curitiba</strong> especializada em materiais promocionais e corporativos de alta qualidade. Produção local com <strong>entrega para todo o Brasil</strong>. Impressão profissional com os melhores acabamentos do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-[0_12px_32px_rgba(255,107,53,0.15)] hover:border-[#FF6B35] transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    alt={`${service.title} - Gráfica Curitiba`}
                    title={`${service.title} impressão digital em Curitiba`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                </div>
                <div className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#FFF4F0] rounded-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-2xl text-[#FF6B35]`}></i>
                  </div>
                  <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-3">{service.title}</h3>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-5">{service.description}</p>
                  <div className="inline-flex items-center gap-1 text-[14px] text-[#FF6B35] font-semibold group-hover:gap-2 transition-all duration-300">
                    Solicitar Orçamento
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[15px] text-[#666] mb-6">
              <strong>Atendimento em Curitiba e Região Metropolitana</strong> • Entregamos para todo o Brasil
            </p>
            <a
              href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-8 py-4 rounded-lg font-semibold text-[15px] hover:bg-[#E5562A] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-4xl lg:text-[38px] font-bold text-[#1A1A1A] mb-6 leading-tight">
                Por Que Escolher a Gráfica Curitiba?
              </h2>
              <p className="text-[17px] text-[#555] leading-relaxed mb-8">
                Somos especialistas em impressão gráfica com atendimento personalizado e produção local. Qualidade garantida para sua empresa.
              </p>
              <a
                href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#00A859] text-[#00A859] px-8 py-3.5 rounded-lg font-medium hover:bg-[#00A859] hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-customer-service-2-line text-xl"></i>
                Falar com Especialista
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {differentials.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 flex items-center justify-center bg-[#FFF4F0] rounded-full flex-shrink-0">
                      <i className={`${item.icon} text-2xl text-[#FF6B35]`}></i>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                      <p className="text-[14px] text-[#666] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[40px] font-bold text-[#1A1A1A] mb-4">
              Como Funciona Nosso Processo
            </h2>
            <p className="text-lg text-[#666]">Simples, rápido e profissional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 border-t-2 border-dashed border-[#00A859]/30"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#FF6B35] text-white text-2xl font-bold rounded-full mb-5 shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-20 h-20 flex items-center justify-center bg-[#FFF4F0] rounded-full mb-5">
                    <i className={`${item.icon} text-4xl text-[#FF6B35]`}></i>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-[15px] text-[#666] max-w-[240px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/554130240080?text=Olá!%20Quero%20iniciar%20meu%20pedido"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B35] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-2xl"></i>
              Iniciar Meu Pedido
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#F1F8F4] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-[#666]">
              Avaliações reais de empresas que confiam em nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  <i className="ri-star-fill text-[#FFB800] text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-xl"></i>
                  <i className="ri-star-fill text-[#FFB800] text-xl"></i>
                </div>
                <p className="text-[16px] text-[#333] leading-relaxed italic mb-6 relative">
                  <span className="text-[#00A859] text-3xl absolute -top-2 -left-1">"</span>
                  <span className="pl-4">{testimonial.text}</span>
                  <span className="text-[#00A859] text-3xl">"</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${testimonial.color} text-white font-bold text-lg flex-shrink-0`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-[#1A1A1A]">{testimonial.name}</div>
                    <div className="text-[13px] text-[#666]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-md">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-google-fill text-2xl text-[#4285F4]"></i>
              </div>
              <div className="text-left">
                <div className="text-[15px] font-bold text-[#1A1A1A]">Avaliação 4.9 de 5.0 no Google</div>
                <a
                  href="https://www.google.com/search?q=gráfica+curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#00A859] hover:underline cursor-pointer"
                >
                  Ver todas as avaliações →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#00A859] to-[#00875A] overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-[44px] font-bold text-white mb-6 leading-tight">
            Pronto para Imprimir com Qualidade Profissional?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Fale agora com nossa equipe e receba seu orçamento personalizado em minutos
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-12 py-5 rounded-full text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            <span>Falar com Especialista Agora</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
          <p className="mt-8 text-sm text-white/70">
            Atendimento de segunda a sexta, 8h às 18h
          </p>
        </div>
      </section>
    </>
  )
}

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Layout Component
function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header scrolled={scrolled} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cartoes-de-visita" element={<CartoesDeVisita />} />
          </Routes>
        </main>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

// App Component with Router
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
