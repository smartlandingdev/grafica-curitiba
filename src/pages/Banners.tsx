import { Link } from 'react-router-dom'

// Features Data
const features = [
  { icon: 'ri-image-line', label: 'Alta Resolução' },
  { icon: 'ri-sun-line', label: 'Resistente ao Sol' },
  { icon: 'ri-ruler-line', label: 'Tamanhos Variados' },
  { icon: 'ri-truck-line', label: 'Entrega Rápida' },
]

// Product Options Data
const productOptions = [
  {
    title: 'Banner Lona 440g',
    description: 'Material padrão com excelente custo-benefício e durabilidade',
  },
  {
    title: 'Banner Lona Backlight',
    description: 'Ideal para caixas luminosas e vitrines iluminadas',
  },
  {
    title: 'Banner Roll-Up',
    description: 'Portátil com estrutura retrátil, perfeito para eventos',
  },
  {
    title: 'Faixa em Lona',
    description: 'Para fachadas, promoções e comunicação de grande formato',
  },
]

function Banners() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Banners e Lonas',
          description:
            'Banners personalizados e impressão em lona em Curitiba. Alta resolução, material resistente ao tempo e acabamento profissional. Solicite orçamento via WhatsApp (41) 3024-0080.',
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
            'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Banners e Lonas em Curitiba
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Impressão de banners em alta resolução para eventos, fachadas e pontos de venda.
            Material resistente ao tempo e acabamento profissional.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Banners"
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
                Banners de Grande Impacto Visual
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Na Gráfica Curitiba, produzimos banners e impressões em lona com tecnologia
                de ponta. Impressão digital em alta resolução que garante cores vibrantes
                e definição perfeita em qualquer tamanho.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Nossos materiais são resistentes ao sol, chuva e intempéries, ideais para
                uso interno e externo. Trabalhamos com lona front-light, backlight, vinil
                adesivo e outros materiais para grande formato.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Oferecemos acabamentos como ilhós, bastão, estrutura roll-up e instalação.
                Atendemos desde pequenos banners para eventos até grandes painéis para
                fachadas e outdoors em Curitiba e região.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
              Tipos de Banners
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productOptions.map((option) => (
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
            Pronto para Criar Seu Banner?
          </h2>
          <p className="text-lg text-[#555] mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado para banners e lonas
            em Curitiba.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Banners"
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

export default Banners
