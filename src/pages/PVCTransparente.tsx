import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";

const features = [
  { icon: "ri-contrast-drop-line", label: "Transparência Total" },
  { icon: "ri-water-flash-line", label: "Resistente à Água" },
  { icon: "ri-shield-check-line", label: "Alta Durabilidade" },
  { icon: "ri-sparkling-line", label: "Efeito Moderno" },
];

const benefits = [
  {
    title: "Design Diferenciado",
    description: "Cartões transparentes que se destacam e impressionam",
  },
  {
    title: "Material Resistente",
    description: "PVC de alta qualidade que não dobra nem deforma",
  },
  {
    title: "Impressão Precisa",
    description: "Cores vibrantes e detalhes nítidos em material transparente",
  },
  {
    title: "Longa Durabilidade",
    description: "Resistente ao desgaste, água e uso constante",
  },
];

function PVCTransparente() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cartão PVC Transparente",
          description:
            "Cartões de visita em PVC transparente em Curitiba. Material resistente à água, durável e com design moderno e diferenciado.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
          },
        })}
      </script>

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
        style={{
          backgroundImage: `url("${fundosProdutosImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div><div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Cartão PVC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Transparente</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Cartões de visita em PVC transparente com design moderno e
            diferenciado. Material resistente à água e durável para impressionar
            seus clientes.
          </p>
          <CTAButton type="pvcTransparente" size="lg" />
        </div>
      </section>

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

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Cartões em PVC Transparente
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Os cartões em PVC transparente são a escolha ideal para quem
                busca um visual moderno e diferenciado. A transparência do
                material cria um efeito único que destaca sua marca de forma
                inovadora.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Fabricados em PVC de alta qualidade, esses cartões são
                extremamente resistentes à água, dobras e desgaste. Perfeitos
                para profissionais que precisam de cartões duráveis para o dia a
                dia.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Na Gráfica Curitiba, utilizamos impressão digital de última
                geração para garantir cores vibrantes e detalhes precisos em
                cada cartão transparente.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]">
              <img
                src="/assets/produtos/pvc_transparente.jpeg"
                alt="Cartão de visita em PVC transparente"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Vantagens do PVC Transparente
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                    {benefit.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Cartão PVC Transparente`)}`}
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

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de Cartão PVC
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e destaque sua marca com cartões de visita em PVC
            transparente de alta qualidade.
          </p>
          <CTAButton type="pvcTransparente" size="lg" />
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

export default PVCTransparente;
