import { Link } from "react-router-dom";
import { useWhatsApp } from "../hooks/useWhatsApp";

// Features Data
const features = [
  { icon: "ri-hd-line", label: "Alta Resolução" },
  { icon: "ri-sun-line", label: "Material Resistente" },
  { icon: "ri-ruler-line", label: "Tamanhos Personalizados" },
  { icon: "ri-paint-brush-line", label: "Cores Vibrantes" },
];

// Product Options Data
const productOptions = [
  {
    title: "Banner em Lona",
    description: "Resistente e durável, ideal para uso externo e fachadas",
  },
  {
    title: "Banner Roll-Up",
    description: "Portátil e retrátil, perfeito para eventos e feiras",
  },
  {
    title: "Banner X-Banner",
    description: "Leve e prático, fácil montagem para divulgação",
  },
  {
    title: "Banner Gigante",
    description: "Grandes formatos para máximo impacto visual",
  },
];

function Banners() {
  const { getUrl } = useWhatsApp();

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Banners",
          description:
            "Impressão de banners em alta resolução em Curitiba. Material resistente, cores vibrantes e tamanhos personalizados para eventos e fachadas. Roll-up, X-banner e lona. Orçamento via WhatsApp (41) 3024-0080.",
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
          backgroundImage:
            'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Banners em Curitiba
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Impressão de banners em alta resolução para eventos, fachadas e
            divulgação. Material resistente e cores vibrantes que destacam sua
            marca.
          </p>
          <a
            href={getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-[#FFF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#FF6B35] rounded-full mb-2 sm:mb-3">
                  <i
                    className={`${feature.icon} text-xl sm:text-2xl text-white`}
                  ></i>
                </div>
                <p className="text-[12px] sm:text-[15px] font-medium text-[#1A1A1A]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
                Banners Profissionais para Seu Negócio
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                A Gráfica Curitiba é especializada em impressão de banners de
                alta qualidade. Utilizamos tecnologia de impressão digital em
                alta resolução para garantir cores vibrantes e imagens nítidas
                que destacam sua mensagem.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Nossos banners são produzidos em lona resistente, ideal para uso
                interno e externo. Oferecemos diversos tamanhos e formatos,
                desde pequenos banners para eventos até grandes painéis para
                fachadas comerciais.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Perfeito para lojas, eventos, feiras, congressos, inaugurações e
                campanhas promocionais em Curitiba. Trabalhamos com acabamento
                profissional incluindo ilhoses, bastão e suporte quando
                necessário.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-10 text-center">
              Tipos de Banners
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {productOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white border border-[#E5E5E5] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                    {option.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Pronto para Destacar Sua Marca?
          </h2>
          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para seus
            banners em Curitiba.
          </p>
          <a
            href={getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
            id="btn-whatsapp-orcamento"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
          <div className="mt-6 sm:mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#FF6B35] font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 cursor-pointer"
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

export default Banners;
