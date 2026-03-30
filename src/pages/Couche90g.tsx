import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import folderImg from "../assets/produtos/folder.jpeg";
import { CTAButton } from "../components";

// Features Data
const features = [
  { icon: "ri-palette-line", label: "Impressão Colorida" },
  { icon: "ri-layout-grid-line", label: "Formato 20x28 cm" },
  { icon: "ri-rocket-line", label: "Produção Rápida" },
  { icon: "ri-price-tag-3-line", label: "Preço Competitivo" },
];

// Format Options Data
const formatOptions = [
  {
    title: "Couché 115g",
    description: "Papel leve e econômico, ideal para grandes tiragens",
  },
  {
    title: "Couché 150g",
    description: "Boa espessura, equilíbrio entre qualidade e custo",
  },
  {
    title: "Couché 170g",
    description: "Papel mais encorpado, transmite qualidade premium",
  },
  {
    title: "Couché 250g",
    description: "Alta gramatura, ideal para folders sofisticados",
  },
];

function Folder20x28() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Folder 20x28 cm",
          description:
            "Impressão de folders 20x28 cm personalizados. Alta qualidade, cores vibrantes e entrega rápida. Orçamento via WhatsApp (41) 3024-0080.",
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Couché <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">90g</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Impressão de Couche 150g cm personalizados. O maior formato,
            perfeito para apresentações detalhadas e materiais institucionais.
          </p>
          <CTAButton type="folder" size="lg" id="btn-whatsapp-orcamento" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] mb-2 sm:mb-3">
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
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Couche 170g Fosco cm Personalizado
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                O Couche 170g Fosco cm é o formato ideal para quem precisa de
                mais espaço para apresentar informações. Perfeito para materiais
                institucionais, catálogos, cardápios e apresentações de
                produtos.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Com ampla área de impressão, permite layouts elaborados com
                fotos em alta resolução, textos descritivos e elementos gráficos
                que valorizam sua marca e comunicação.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Na Gráfica Curitiba, trabalhamos com diversas gramaturas de
                papel couché para atender às necessidades do seu projeto.
                Entrega rápida e preços especiais para grandes quantidades.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${folderImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Opções de Papel
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {formatOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {option.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                    {option.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Folder em ${option.title}`)}`}
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
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Pronto para Divulgar Seu Negócio?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para seus
            Couche 170g Fosco
          </p>
          <CTAButton type="folder" size="lg" id="btn-whatsapp-orcamento" />

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

export default Folder20x28;
