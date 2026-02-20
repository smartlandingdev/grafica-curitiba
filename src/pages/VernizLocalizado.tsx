import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";
import verniz from "../assets/produtos/verniz-localizado.jpeg";

const features = [
  { icon: "ri-drop-line", label: "Verniz UV Localizado" },
  { icon: "ri-sparkling-line", label: "Efeito Premium" },
  { icon: "ri-palette-line", label: "Destaque Visual" },
  { icon: "ri-shield-check-line", label: "Proteção Extra" },
];

const benefits = [
  {
    title: "Brilho Seletivo",
    description: "Destaque elementos específicos do seu material com verniz brilhante",
  },
  {
    title: "Textura Tátil",
    description: "Efeito de relevo que valoriza logotipos e detalhes importantes",
  },
  {
    title: "Acabamento Sofisticado",
    description: "Transmita profissionalismo e qualidade em cada cartão",
  },
  {
    title: "Alta Durabilidade",
    description: "Proteção UV que mantém a qualidade por mais tempo",
  },
];

function VernizLocalizado() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Verniz Localizado",
          description:
            "Cartões de visita com verniz localizado em Curitiba. Acabamento premium com brilho seletivo e efeito relevo. Destaque sua marca com qualidade profissional.",
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
            Verniz Localizado em Curitiba
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Cartões de visita com acabamento premium. Verniz UV localizado para destacar
            sua marca com brilho seletivo e efeito relevo sofisticado.
          </p>
          <CTAButton type="whatsapp" size="lg" />
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
                O Que é Verniz Localizado?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                O verniz localizado é uma técnica de acabamento que aplica uma camada de verniz UV
                brilhante em áreas específicas do material impresso. Isso cria um contraste visual
                impressionante entre as áreas com verniz e as áreas sem.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Ideal para destacar logotipos, nomes e elementos gráficos importantes, o verniz
                localizado transforma um simples cartão de visita em uma peça de impacto visual
                que transmite profissionalismo e sofisticação.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Na Gráfica Curitiba, utilizamos tecnologia de última geração para aplicação precisa
                do verniz UV, garantindo resultados impecáveis em cada impressão.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url(${verniz})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-10 text-center">
              Benefícios do Verniz Localizado
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white border border-[#E5E5E5] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Solicite Seu Orçamento de Verniz Localizado
          </h2>
          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e transforme seus cartões de visita com acabamento premium
            em verniz localizado.
          </p>
          <CTAButton type="whatsapp" size="lg" />
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

export default VernizLocalizado;
