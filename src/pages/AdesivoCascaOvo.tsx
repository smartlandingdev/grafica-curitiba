import adesivo from "../assets/produtos/adesivo-casca-de-ovo.jpeg";
import { CTAButton } from "../components";

const pricingOptions = [
  {
    title: "1 x 1 cm",
    icon: "ri-price-tag-3-line",
    prices: [
      { qty: "250 unidades", price: "R$ 65,00" },
      { qty: "500 unidades", price: "R$ 85,00" },
      { qty: "1.000 unidades", price: "R$ 99,00", best: true },
    ],
  },
  {
    title: "2,5 x 1 cm",
    icon: "ri-price-tag-3-line",
    prices: [
      { qty: "250 unidades", price: "R$ 75,00" },
      { qty: "500 unidades", price: "R$ 95,00" },
      { qty: "1.000 unidades", price: "R$ 110,00", best: true },
    ],
  },
];

function AdesivoCascaOvo() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Adesivo Casca de Ovo",
          description:
            "Adesivo casca de ovo. Selo de segurança anti-violação que fragmenta ao tentar remover. Ideal para garantia e controle patrimonial.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
          },
        })}
      </script>

      {/* Título + Descrição + Imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Adesivo{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Casca de Ovo
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Selo de segurança anti-violação que fragmenta ao tentar remover.
                Ideal para garantia, controle patrimonial e autenticidade.
              </p>
              <CTAButton type="adesivoCascaOvo" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20"
              style={{
                backgroundImage: `url("${adesivo}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-10">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                Tabela de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
                  Preços
                </span>
              </h2>
              <p className="text-sm text-white/50">Prazo de Produção: 3 Dias Úteis</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-8">
              {pricingOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] px-5 py-3 flex items-center justify-center gap-2">
                    <i className={`${option.icon} text-xl text-[#0A0A0A]`}></i>
                    <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A]">
                      {option.title}
                    </h3>
                  </div>
                  <div className="p-4 sm:p-5 space-y-3">
                    {option.prices.map((item) => (
                      <a
                        key={item.qty}
                        href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative rounded-lg p-4 flex items-center justify-between transition-all duration-300 cursor-pointer ${
                          item.best
                            ? "bg-gradient-to-r from-[#BF953F] via-[#D4AF37] to-[#AA771C] text-[#0A0A0A] shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:brightness-110"
                            : "bg-[#2A2A2A] hover:bg-[#333333]"
                        }`}
                      >
                        {item.best && (
                          <span className="absolute -top-2 right-3 bg-[#0A0A0A] text-[#D4AF37] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#D4AF37]/50">
                            MAIS VENDIDO
                          </span>
                        )}
                        <span className={`text-sm font-medium ${item.best ? "text-[#0A0A0A]" : "text-white/80"}`}>
                          {item.qty}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-base font-bold ${item.best ? "text-[#0A0A0A]" : "text-[#D4AF37]"}`}>
                            {item.price}
                          </span>
                          <i className={`ri-whatsapp-line text-lg ${item.best ? "text-[#0A0A0A]" : "text-[#25D366]"}`}></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#D4AF37]/20 pt-6 text-center">
              <p className="text-sm text-white/60">
                <i className="ri-truck-line mr-1 text-[#D4AF37]"></i>
                <span className="text-white/80 font-medium">Entrega em Curitiba:</span> R$ 19,00 &nbsp;|&nbsp;
                <span className="text-white/80 font-medium">Região Metropolitana:</span> R$ 35,00
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Adesivos casca de ovo personalizados pela Gráfica Curitiba, com impressão de alta qualidade e entrega para todo o Brasil. Ideal para selos de segurança, garantia e controle patrimonial.
          </p>
        </div>
      </section>
    </>
  );
}

export default AdesivoCascaOvo;
