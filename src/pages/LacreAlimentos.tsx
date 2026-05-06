import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import lacreDeliveryImg from "../assets/produtos/lacre-delivery-novo.png";
import { CTAButton } from "../components";

const features = [
  { icon: "ri-restaurant-line", label: "Food Service" },
  { icon: "ri-shield-check-line", label: "Segurança Alimentar" },
  { icon: "ri-paint-brush-line", label: "Personalizado" },
  { icon: "ri-stack-line", label: "Grandes Quantidades" },
];

const types = [
  {
    title: "Lacre Adesivo",
    description: "Adesivo de segurança que rompe ao abrir a embalagem",
  },
  {
    title: "Lacre Delivery",
    description: "Ideal para sacolas e embalagens de entrega",
  },
  {
    title: "Lacre Personalizado",
    description: "Com logo, cores e informações da sua marca",
  },
  {
    title: "Lacre Numerado",
    description: "Com numeração sequencial para controle e rastreamento",
  },
];

function LacreAlimentos() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Lacre de Alimentos",
          description:
            "Lacres personalizados para alimentos em Curitiba. Segurança para delivery e embalagens. Impressão com sua marca em alta qualidade.",
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
            Lacres de Segurança para Delivery em Curitiba com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Produção Rápida</span>
          </h1>
          <h2 className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 font-medium">
            Proteja seus pedidos com lacres invioláveis personalizados — mais segurança, mais confiança e entrega imediata em Curitiba
          </h2>
          <CTAButton type="lacre" size="lg" />
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
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Segurança e Confiança no Delivery
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Produzimos lacres de segurança para delivery em Curitiba, ideais para marmitas, sacolas e embalagens. Nossos adesivos invioláveis personalizados garantem que o pedido chegue intacto ao cliente, aumentando a confiança no seu delivery.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Trabalhamos com produção rápida, impressão de alta qualidade e opção de retirada local ou envio imediato para toda Curitiba e região metropolitana.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${lacreDeliveryImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Tipos de Lacres
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {types.map((type) => (
                <div
                  key={type.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {type.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                    {type.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para ${type.title}`)}`}
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

      <section className="py-12 sm:py-20 bg-[#2A2A2A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-8 sm:mb-12 text-center">
            Preços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-xl p-4 sm:p-6 text-center shadow-lg active:scale-105 sm:hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Rolo com 1000 Unidades
              </h3>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-4">
                R$ 120,00
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de comprar Lacre de Alimentos - Rolo com 1000 Unidades por R$ 120,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20BD5A] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>Comprar pelo WhatsApp</span>
              </a>
            </div>
            <div className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-xl p-4 sm:p-6 text-center shadow-lg active:scale-105 sm:hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Rolo com 2000 Unidades
              </h3>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-4">
                R$ 210,00
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de comprar Lacre de Alimentos - Rolo com 2000 Unidades por R$ 210,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20BD5A] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>Comprar pelo WhatsApp</span>
              </a>
            </div>
            <div className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-xl p-4 sm:p-6 text-center shadow-lg active:scale-105 sm:hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Rolo com 3000 Unidades
              </h3>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-4">
                R$ 285,00
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de comprar Lacre de Alimentos - Rolo com 3000 Unidades por R$ 285,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20BD5A] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                <span>Comprar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de Lacres
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e personalize os lacres do seu delivery com
            qualidade profissional.
          </p>
          <CTAButton type="lacre" size="lg" />
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

export default LacreAlimentos;
