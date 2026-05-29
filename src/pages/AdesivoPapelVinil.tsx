import adesivos from "../assets/produtos/adesivo-papel-vinil.jpeg";
import { CTAButton } from "../components";

const precosPapel3x3 = [
  { qtd: "100 unidades", valor: "R$ 81,50" },
  { qtd: "250 unidades", valor: "R$ 142,50" },
  { qtd: "500 unidades", valor: "R$ 189,50" },
  { qtd: "1.000 unidades", valor: "R$ 299,50" },
];

const precosPapel5x5 = [
  { qtd: "100 unidades", valor: "R$ 109,50" },
  { qtd: "250 unidades", valor: "R$ 189,50" },
  { qtd: "500 unidades", valor: "R$ 214,50" },
  { qtd: "1.000 unidades", valor: "R$ 344,50" },
];

const precosVinil3x3 = [
  { qtd: "100 unidades", valor: "R$ 91,50" },
  { qtd: "250 unidades", valor: "R$ 152,50" },
  { qtd: "500 unidades", valor: "R$ 199,50" },
  { qtd: "1.000 unidades", valor: "R$ 309,50" },
];

const precosVinil5x5 = [
  { qtd: "100 unidades", valor: "R$ 119,50" },
  { qtd: "250 unidades", valor: "R$ 199,50" },
  { qtd: "500 unidades", valor: "R$ 224,50" },
  { qtd: "1.000 unidades", valor: "R$ 354,50" },
];

function AdesivoPapelVinil() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Adesivos Papel e Vinil",
          description:
            "Adesivos em papel e vinil. Impressão digital colorida com recorte preciso. Diversos materiais para cada aplicação.",
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
                Adesivos de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Papel e Vinil
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Produção rápida de adesivos personalizados em Curitiba — alta
                qualidade, resistência e ótimo custo-benefício.
              </p>
              <CTAButton type="adesivoPapelVinil" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${adesivos}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Preços */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 sm:mb-10 text-center">
            Valores dos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Adesivos
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#D4AF37]/30 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <i className="ri-price-tag-3-line"></i> Adesivo Papel – 3x3 cm
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {precosPapel3x3.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#D4AF37] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#D4AF37]/30 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <i className="ri-price-tag-3-line"></i> Adesivo Papel – 5x5 cm
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {precosPapel5x5.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#D4AF37] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#25D366]/30 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#25D366] mb-4 flex items-center gap-2">
                <i className="ri-drop-line"></i> Adesivo Vinil – 3x3 cm
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {precosVinil3x3.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#25D366] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#25D366]/30 rounded-xl p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#25D366] mb-4 flex items-center gap-2">
                <i className="ri-drop-line"></i> Adesivo Vinil – 5x5 cm
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {precosVinil5x5.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#25D366] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-white/70 text-sm sm:text-base mb-6">
            Para outros tamanhos de Adesivos entre em contato com nossa equipe.
          </p>

          <div className="text-center">
            <CTAButton type="adesivoPapelVinil" size="lg" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Adesivos de papel e vinil personalizados pela Gráfica Curitiba, com impressão digital colorida e entrega para todo o Brasil. Ideais para embalagens, rótulos, brindes e divulgação da sua marca em Curitiba e região metropolitana.
          </p>
        </div>
      </section>
    </>
  );
}

export default AdesivoPapelVinil;
