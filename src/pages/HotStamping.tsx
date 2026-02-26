import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";

const features = [
  { icon: "ri-vip-crown-line", label: "Acabamento Luxuoso" },
  { icon: "ri-sparkling-2-line", label: "Efeito Metalizado" },
  { icon: "ri-palette-line", label: "Cores Exclusivas" },
  { icon: "ri-medal-line", label: "Alta Qualidade" },
];

const colors = [
  {
    title: "Dourado",
    description: "O clássico que transmite elegância, sofisticação e sucesso",
  },
  {
    title: "Prata",
    description: "Moderno e versátil, ideal para marcas contemporâneas",
  },
  {
    title: "Rose Gold",
    description: "Tendência atual que combina elegância com modernidade",
  },
  {
    title: "Cores Especiais",
    description: "Vermelho, azul, verde metálico e outras opções exclusivas",
  },
];

function HotStamping() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Hot Stamping",
          description:
            "Cartões de visita com hot stamping em Curitiba. Acabamento metalizado dourado, prata e cores especiais. Impressão premium para sua marca.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Hot Stamping em Curitiba
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Acabamento metalizado de luxo para seus cartões de visita. Hot stamping dourado,
            prata e cores especiais que destacam sua marca com elegância.
          </p>
          <CTAButton type="hotStamping" size="lg" />
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-[#FFF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#FF6B35] rounded-full mb-2 sm:mb-3">
                  <i className={`${feature.icon} text-xl sm:text-2xl text-white`}></i>
                </div>
                <p className="text-[12px] sm:text-[15px] font-medium text-[#1A1A1A]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
                O Que é Hot Stamping?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Hot Stamping é uma técnica de impressão a quente que aplica uma película
                metalizada sobre o papel, criando um efeito brilhante e luxuoso. É o
                acabamento preferido por marcas que buscam transmitir sofisticação e exclusividade.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                O processo utiliza calor e pressão para transferir a folha metalizada,
                garantindo aderência perfeita e durabilidade. Ideal para logotipos, nomes
                e detalhes que merecem destaque especial.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Na Gráfica Curitiba, trabalhamos com as melhores películas metalizadas do
                mercado, garantindo resultados impecáveis que impressionam à primeira vista.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]">
              <img
                src="/assets/produtos/hotstamping.jpeg"
                alt="Cartão de visita com hot stamping metalizado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-10 text-center">
              Cores Disponíveis em Hot Stamping
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {colors.map((color) => (
                <div
                  key={color.title}
                  className="bg-white border border-[#E5E5E5] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                    {color.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed mb-3 flex-grow">
                    {color.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Hot Stamping ${color.title}`)}`}
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

      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Solicite Seu Orçamento de Hot Stamping
          </h2>
          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e eleve o padrão dos seus cartões de visita com acabamento
            hot stamping metalizado.
          </p>
          <CTAButton type="hotStamping" size="lg" />
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

export default HotStamping;
