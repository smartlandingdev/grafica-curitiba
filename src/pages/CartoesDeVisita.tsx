import { Link } from 'react-router-dom'

// Features Data
const features = [
  { icon: 'ri-printer-line', label: 'Impressão Offset e Digital' },
  { icon: 'ri-palette-line', label: 'Acabamento Premium' },
  { icon: 'ri-timer-line', label: 'Entrega Rápida' },
  { icon: 'ri-shield-check-line', label: 'Qualidade Garantida' },
]

// Paper Options Data
const paperOptions = [
  {
    title: 'Papel Couché 300g',
    description: 'Acabamento fosco ou brilhante, ideal para impressão colorida',
  },
  {
    title: 'Papel Supremo 250g',
    description: 'Textura premium, perfeito para acabamento sofisticado',
  },
  {
    title: 'Papel Reciclado',
    description: 'Opção sustentável com excelente qualidade de impressão',
  },
  {
    title: 'Laminação',
    description: 'Proteção extra com acabamento fosco ou brilhante',
  },
]

function CartoesDeVisita() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Cartões de Visita',
          description:
            'Cartões de visita personalizados em Curitiba com impressão offset e digital. Acabamento premium, diversos tipos de papel e entrega rápida. Solicite orçamento via WhatsApp (41) 3024-0080.',
          brand: {
            '@type': 'Organization',
            name: 'Gráfica Curitiba',
          },
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'BRL',
            seller: {
              '@type': 'Organization',
              name: 'Gráfica Curitiba',
            },
          },
          provider: {
            '@type': 'LocalBusiness',
            name: 'Gráfica Curitiba',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Curitiba',
              addressRegion: 'PR',
              addressCountry: 'BR',
            },
            telephone: '+55-41-3024-0080',
          },
        })}
      </script>

      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-20"
        style={{
          backgroundImage:
            'url("https://readdy.ai/api/search-image?query=professional%20business%20cards%20stack%20on%20modern%20office%20desk%20high%20quality%20printing%20elegant%20design%20corporate%20identity%20branding%20materials%20close%20up%20photography%20shallow%20depth%20of%20field%20clean%20white%20background%20minimalist%20style%20premium%20paper%20texture&width=1920&height=1080&seq=cartoes-hero-001&orientation=landscape")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Cartões de Visita em Curitiba
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Impressão profissional de cartões de visita com acabamento premium. Diversos tipos de
            papel e acabamentos para sua marca se destacar.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Cartões%20de%20Visita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-12 py-5 rounded-full text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#FFF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[#FF6B35] rounded-full mb-3">
                  <i className={`${feature.icon} text-2xl text-white`}></i>
                </div>
                <p className="text-[15px] font-medium text-[#1A1A1A]">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-6">
                Cartões de Visita Profissionais para Sua Empresa
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Na Gráfica Curitiba, oferecemos impressão de cartões de visita com a mais alta
                qualidade. Utilizamos tecnologia de impressão offset e digital para garantir cores
                vibrantes e acabamento impecável.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Nossos cartões de visita são produzidos em diversos tipos de papel, desde o
                tradicional couché até opções premium como supremo e reciclado. Todos os materiais
                são cuidadosamente selecionados para transmitir profissionalismo e qualidade.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Atendemos empresas de todos os portes em Curitiba e região metropolitana, com
                entrega rápida e preços competitivos. Solicite seu orçamento via WhatsApp e receba
                atendimento personalizado.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
              style={{
                backgroundImage:
                  'url("https://readdy.ai/api/search-image?query=business%20cards%20printing%20process%20professional%20graphic%20design%20studio%20workspace%20designer%20hands%20arranging%20printed%20cards%20quality%20control%20inspection%20modern%20office%20environment%20bright%20lighting%20clean%20aesthetic%20corporate%20branding&width=800&height=600&seq=cartoes-content-001&orientation=landscape")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
              Opções de Papel e Acabamento
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paperOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white border border-[#E5E5E5] rounded-xl p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300"
                >
                  <h4 className="text-[18px] font-bold text-[#1A1A1A] mb-3">{option.title}</h4>
                  <p className="text-[14px] text-[#555] leading-relaxed">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-6">
            Pronto para Criar Seus Cartões de Visita?
          </h2>
          <p className="text-lg text-[#555] mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado para seus cartões de visita
            em Curitiba.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Cartões%20de%20Visita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-12 py-5 rounded-full text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            <span>Solicitar Orçamento no WhatsApp</span>
          </a>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#FF6B35] font-medium hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Voltar para página inicial</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CartoesDeVisita
