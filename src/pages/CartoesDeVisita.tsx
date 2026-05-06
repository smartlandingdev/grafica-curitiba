import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import cartaoVisitaImg from "../assets/produtos/cartao-visita-novo.jpeg";
import { CTAButton } from "../components";

// Features Data
const features = [
  { icon: "ri-printer-line", label: "Impressão Offset e Digital" },
  { icon: "ri-palette-line", label: "Acabamento Premium" },
  { icon: "ri-timer-line", label: "Entrega Rápida" },
  { icon: "ri-shield-check-line", label: "Qualidade Garantida" },
];

// Outras opções de papel
const paperOptions = [
  {
    title: "Papel Supremo 250g",
    description: "Textura premium, perfeito para acabamento sofisticado",
  },
  {
    title: "Papel Reciclado",
    description: "Opção sustentável com excelente qualidade de impressão",
  },
  {
    title: "Laminação Brilhante",
    description: "Proteção extra com acabamento brilhante e moderno",
  },
];

function CartoesDeVisita() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cartões de Visita",
          description:
            "Cartões de visita personalizados em Curitiba com impressão offset e digital. Acabamento premium, diversos tipos de papel e entrega rápida. Solicite orçamento via WhatsApp (41) 3024-0080.",
          brand: {
            "@type": "Organization",
            name: "Gráfica Curitiba",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            seller: {
              "@type": "Organization",
              name: "Gráfica Curitiba",
            },
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Gráfica Curitiba",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Curitiba",
              addressRegion: "PR",
              addressCountry: "BR",
            },
            telephone: "+55-41-3024-0080",
          },
        })}
      </script>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
        style={{
          backgroundImage: `url("${fundosProdutosImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
        {/* Decorative golden lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Cartões de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Visita</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Impressão profissional de cartões de visita com acabamento premium.
            Diversos tipos de papel e acabamentos para sua marca se destacar.
          </p>
          <CTAButton type="cartoes" size="lg" id="btn-whatsapp-orcamento" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-10 sm:py-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 lg:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] rounded-full mb-2 sm:mb-3 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                  <i
                    className={`${feature.icon} text-xl sm:text-2xl text-[#0A0A0A]`}
                  ></i>
                </div>
                <p className="text-[12px] sm:text-[15px] font-medium text-white">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Cartões de Visita <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Profissionais</span> para Sua Empresa
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Na Gráfica Curitiba, oferecemos impressão de cartões de visita
                com a mais alta qualidade. Utilizamos tecnologia de impressão
                offset e digital para garantir cores vibrantes e acabamento
                impecável.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Nossos cartões de visita são produzidos em diversos tipos de
                papel, desde o tradicional couché até opções premium como
                supremo e reciclado.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Atendemos empresas de todos os portes em Curitiba e região
                metropolitana, com entrega rápida e preços competitivos.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20"
              style={{
                backgroundImage: `url("${cartaoVisitaImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          {/* Outras Opções */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Outras Opções de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Papel</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {paperOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {option.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed mb-3 flex-grow">
                    {option.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Cartão de Visita em ${option.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-[#25D366] text-white px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium hover:bg-[#20BD5A] transition-all duration-300"
                  >
                    <i className="ri-whatsapp-line text-sm"></i>
                    <span>Solicitar Orçamento</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#2A2A2A] via-[#333333] to-[#2A2A2A] overflow-hidden">
        {/* Decorative gold elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute top-10 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Pronto para Criar Seus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37]">Cartões de Visita</span>?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para seus
            cartões de visita em Curitiba.
          </p>
          <CTAButton type="cartoes" size="lg" id="btn-whatsapp-orcamento" />

          <div className="mt-6 sm:mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Voltar para página inicial</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartoesDeVisita;
