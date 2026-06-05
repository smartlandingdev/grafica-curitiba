import { CTAButton } from "../components";
import verniz from "../assets/produtos/verniz-localizado-novo.jpeg";

const pricingCategories = [
  {
    title: "Cantos Retos",
    icon: "ri-square-line",
    image: "/assets/produtos/verniz localizado quadrado.png",
    href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/7c23eb78-3712-4871-b72c-d43f748d0412",
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
    href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/c98c27f7-e342-4865-a0a5-0d4e000da3c0",
    prices: [
      { qty: "500 unidades", price: "R$ 225,00" },
      { qty: "1.000 unidades", price: "R$ 245,00", best: true },
    ],
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

      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Verniz <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Localizado</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Cartões de visita com acabamento premium. Verniz UV localizado para
                destacar sua marca com brilho seletivo e efeito relevo sofisticado.
              </p>
              <CTAButton type="verniz" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${verniz}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="h-36 sm:h-48 overflow-hidden bg-[#0A0A0A]">
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
                    href={category.href || `https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de fazer pedido de Cartão de Visita com Verniz Localizado - ${category.title}`)}`}
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
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — cartões de visita com verniz localizado UV, laminação fosca e acabamento premium. Produção rápida em Curitiba com envio para todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default VernizLocalizado;
