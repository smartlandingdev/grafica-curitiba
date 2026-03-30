import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";
import verniz from "../assets/produtos/verniz-localizado-novo.jpeg";

const features = [
  { icon: "ri-drop-line", label: "Verniz UV Localizado" },
  { icon: "ri-sparkling-line", label: "Efeito Premium" },
  { icon: "ri-palette-line", label: "Destaque Visual" },
  { icon: "ri-shield-check-line", label: "Proteção Extra" },
];

// Preços Couché 300g + Laminação Fosca + Verniz Localizado
const pricingCategories = [
  {
    title: "Cantos Retos",
    icon: "ri-square-line",
    image: "/assets/produtos/verniz localizado quadrado.png",
    prices: [
      { qty: "250 unidades", price: "R$ 180,00" },
      { qty: "500 unidades", price: "R$ 185,00" },
      { qty: "1.000 unidades", price: "R$ 199,00", best: true },
    ],
  },
  {
    title: "Com 4 ou 2 Cantos Arredondados",
    icon: "ri-checkbox-blank-circle-line",
    image: "/assets/produtos/vernix localizado redondo.png",
    prices: [
      { qty: "500 unidades", price: "R$ 225,00" },
      { qty: "1.000 unidades", price: "R$ 245,00", best: true },
    ],
  },
];

const benefits = [
  {
    title: "Brilho Seletivo",
    description:
      "Destaque elementos específicos do seu material com verniz brilhante",
  },
  {
    title: "Textura Tátil",
    description:
      "Efeito de relevo que valoriza logotipos e detalhes importantes",
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
            "Cartões de visita com verniz localizado. Acabamento premium com brilho seletivo e efeito relevo. Destaque sua marca com qualidade profissional.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
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
            Verniz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Localizado</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Cartões de visita com acabamento premium. Verniz UV localizado para
            destacar sua marca com brilho seletivo e efeito relevo sofisticado.
          </p>
          <CTAButton type="verniz" size="lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-10 sm:py-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
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
                O Que é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Verniz Localizado</span>?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                O verniz localizado é uma técnica de acabamento que aplica uma
                camada de verniz UV brilhante em áreas específicas do material
                impresso. Isso cria um contraste visual impressionante entre as
                áreas com verniz e as áreas sem.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Ideal para destacar logotipos, nomes e elementos gráficos
                importantes, o verniz localizado transforma um simples cartão de
                visita em uma peça de impacto visual que transmite
                profissionalismo e sofisticação.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Na Gráfica Curitiba, utilizamos tecnologia de última geração
                para aplicação precisa do verniz UV, garantindo resultados
                impecáveis em cada impressão.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20"
              style={{
                backgroundImage: `url(${verniz})`,
                backgroundSize: "cover",
                backgroundPosition: "55% center",
              }}
            ></div>
          </div>

          {/* Preços */}
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-10 mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Cartões de Visita em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Couchê 300g</span>
              </h3>
              <p className="text-base sm:text-lg text-white/70 mb-2">
                Laminação Fosca + Verniz Localizado
              </p>
              <p className="text-sm text-white/50 mb-4">
                Impressão Colorida Frente e Verso
              </p>
              <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] font-medium italic">
                Aquele brilho que destaca a logo ou alguns detalhes do cartão
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
              {pricingCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300"
                >
                  {/* Imagem do produto */}
                  <div className="h-48 sm:h-56 overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={category.image}
                      alt={`Cartão de visita com verniz localizado - ${category.title}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] px-5 py-3 flex items-center justify-center gap-2">
                    <i className={`${category.icon} text-xl text-[#0A0A0A]`}></i>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A0A0A]">
                      {category.title}
                    </h4>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="space-y-3">
                      {category.prices.map((item) => (
                        <div
                          key={item.qty}
                          className={`relative rounded-lg p-4 text-center transition-all duration-300 ${
                            item.best
                              ? "bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                              : "bg-[#2A2A2A] hover:bg-[#333333]"
                          }`}
                        >
                          {item.best && (
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-[#D4AF37] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap border border-[#D4AF37]/50">
                              MAIS VENDIDO
                            </span>
                          )}
                          <div className="flex items-center justify-between">
                            <p className={`text-sm ${item.best ? "text-[#0A0A0A]/80 mt-1" : "text-white/60"}`}>
                              {item.qty}
                            </p>
                            <p className={`text-xl sm:text-2xl font-bold ${item.best ? "text-[#0A0A0A]" : "text-white"}`}>
                              {item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de fazer pedido de Cartão de Visita com Verniz Localizado - ${category.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300"
                    >
                      <i className="ri-whatsapp-line text-lg"></i>
                      <span>Fazer Pedido pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 text-sm text-white/60">
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-lg font-medium border border-[#D4AF37]/30">
                <i className="ri-error-warning-line text-lg"></i>
                <span>Não fracionamos impressão</span>
              </div>
              <p className="text-xs text-center text-white/40">
                Os valores são relacionados a impressão de 1 única arte Frente e Verso
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Benefícios do <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Verniz Localizado</span>
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed mb-3 flex-grow">
                    {benefit.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Verniz Localizado com ${benefit.title}`)}`}
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
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute top-10 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37]">Verniz Localizado</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e transforme seus cartões de visita com
            acabamento premium em verniz localizado.
          </p>
          <CTAButton type="verniz" size="lg" />
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

export default VernizLocalizado;
