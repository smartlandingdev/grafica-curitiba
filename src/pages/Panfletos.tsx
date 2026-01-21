import { Link } from 'react-router-dom'

// Features Data
const features = [
  { icon: 'ri-palette-line', label: 'Impressão Colorida' },
  { icon: 'ri-stack-line', label: 'Diversos Formatos' },
  { icon: 'ri-timer-line', label: 'Entrega Rápida' },
  { icon: 'ri-money-dollar-circle-line', label: 'Preço Competitivo' },
]

// Format Options Data
const formatOptions = [
  {
    title: 'Panfleto A5 (15x21cm)',
    description: 'Tamanho ideal para distribuição em mãos e panfletagem',
  },
  {
    title: 'Panfleto A6 (10x15cm)',
    description: 'Compacto e econômico, perfeito para grande tiragem',
  },
  {
    title: 'Folder 2 Dobras',
    description: 'Mais espaço para informações com design profissional',
  },
  {
    title: 'Folder 3 Dobras',
    description: 'Ideal para cardápios, apresentações e catálogos',
  },
]

function Panfletos() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Panfletos e Folders',
          description:
            'Panfletos e folders personalizados em Curitiba com impressão colorida de alta qualidade. Diversos formatos, acabamentos e tiragens. Solicite orçamento via WhatsApp (41) 3024-0080.',
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
            'url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Panfletos e Folders em Curitiba
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Impressão de panfletos e folders com cores vibrantes e acabamento profissional.
            Ideal para divulgação, promoções e eventos.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Panfletos"
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
                Panfletos de Alta Qualidade para Sua Divulgação
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Na Gráfica Curitiba, produzimos panfletos e folders com impressão offset e digital
                de alta qualidade. Cores vibrantes, papel de qualidade e acabamento profissional
                para destacar sua marca.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Oferecemos diversos formatos e tiragens para atender às necessidades do seu
                negócio. Desde pequenas quantidades para testes até grandes volumes para
                campanhas de marketing em larga escala.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Nosso time de especialistas auxilia na escolha do melhor formato, papel e
                acabamento para sua campanha. Entrega rápida em Curitiba e região metropolitana,
                com envio para todo o Brasil.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
              Formatos Disponíveis
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formatOptions.map((option) => (
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
            Pronto para Imprimir Seus Panfletos?
          </h2>
          <p className="text-lg text-[#555] mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado para panfletos e folders
            em Curitiba.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Panfletos"
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

export default Panfletos
