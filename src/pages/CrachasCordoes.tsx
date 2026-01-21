import { Link } from 'react-router-dom'

// Features Data
const features = [
  { icon: 'ri-id-card-line', label: 'Crachás Personalizados' },
  { icon: 'ri-shield-check-line', label: 'Material Resistente' },
  { icon: 'ri-timer-line', label: 'Entrega Rápida' },
  { icon: 'ri-building-line', label: 'Ideal para Empresas' },
]

// Product Options Data
const productOptions = [
  {
    title: 'Crachá PVC',
    description: 'Durável e resistente, impressão digital de alta qualidade',
  },
  {
    title: 'Crachá Papel Cartão',
    description: 'Econômico para eventos e convenções de curta duração',
  },
  {
    title: 'Cordão Personalizado',
    description: 'Diversos materiais e cores com impressão da sua marca',
  },
  {
    title: 'Kit Completo',
    description: 'Crachá + cordão + porta-crachá com sua identidade visual',
  },
]

function CrachasCordoes() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'Crachás e Cordões',
          description:
            'Crachás personalizados e cordões para eventos e empresas em Curitiba. Material resistente, impressão profissional e entrega rápida. Solicite orçamento via WhatsApp (41) 3024-0080.',
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
            'url("https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Crachás e Cordões em Curitiba
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Crachás personalizados e cordões para eventos corporativos, convenções e identificação
            de funcionários. Material resistente e impressão profissional.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Crachás%20e%20Cordões"
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
                Identificação Profissional para Sua Empresa
              </h2>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Na Gráfica Curitiba, produzimos crachás e cordões personalizados de alta qualidade
                para empresas, eventos corporativos, feiras e convenções. Garantimos durabilidade
                e impressão nítida.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed mb-6">
                Oferecemos crachás em PVC rígido para uso permanente ou em papel cartão para
                eventos de curta duração. Todos podem ser personalizados com foto, código de
                barras, QR Code e dados variáveis.
              </p>
              <p className="text-[16px] text-[#555] leading-relaxed">
                Nossos cordões são produzidos em diversos materiais como poliéster, cetim e
                nylon, com impressão sublimática da sua marca. Fornecemos também porta-crachás
                e acessórios para compor seu kit de identificação completo.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-10 text-center">
              Produtos Disponíveis
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
            Pronto para Criar Seus Crachás?
          </h2>
          <p className="text-lg text-[#555] mb-10 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento personalizado para crachás e cordões
            em Curitiba.
          </p>
          <a
            href="https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20Crachás%20e%20Cordões"
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

export default CrachasCordoes
