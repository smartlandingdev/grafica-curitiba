import lacreDeliveryImg from "../assets/produtos/lacre-delivery-novo.png";
import { CTAButton } from "../components";

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

      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Lacres de Segurança para Delivery em Curitiba com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Produção Rápida</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Proteja seus pedidos com lacres invioláveis personalizados — mais segurança, mais confiança e entrega imediata em Curitiba
              </p>
              <CTAButton type="lacre" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${lacreDeliveryImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
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
          <div className="mt-8 text-center">
            <CTAButton type="lacre" size="lg" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — lacres de segurança personalizados para delivery e embalagens de alimentos. Produção rápida em Curitiba com retirada local ou envio imediato.
          </p>
        </div>
      </section>
    </>
  );
}

export default LacreAlimentos;
