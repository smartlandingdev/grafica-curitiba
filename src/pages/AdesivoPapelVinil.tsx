import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";
import adesivos from "../assets/produtos/adesivo-papel-vinil.jpeg";

const features = [
  { icon: "ri-price-tag-3-line", label: "Diversos Materiais" },
  { icon: "ri-printer-line", label: "Impressão Digital" },
  { icon: "ri-scissors-cut-line", label: "Recorte Preciso" },
  { icon: "ri-palette-line", label: "Full Color" },
];

const types = [
  {
    title: "Adesivo Papel",
    description: "Econômico para uso interno e temporário",
  },
  {
    title: "Adesivo Vinil",
    description: "Resistente para uso externo e longa duração",
  },
  {
    title: "Adesivo Transparente",
    description: "Efeito clean para vidros e superfícies",
  },
  {
    title: "Adesivo Recortado",
    description: "Corte no contorno do design para efeito especial",
  },
];

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
            Adesivos de Papel e Vinil em Curitiba com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Impressão Profissional</span>
          </h1>
          <h2 className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 font-medium">
            Produção rápida de adesivos personalizados em Curitiba — alta qualidade, resistência e ótimo custo-benefício
          </h2>
          <CTAButton type="adesivoPapelVinil" size="lg" />
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

      {/* SEÇÃO DE PREÇOS */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-8 sm:mb-10 text-center">
            Valores dos Adesivos
          </h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {/* Adesivo Papel 3x3 */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#D4AF37]/30 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <i className="ri-price-tag-3-line"></i> Adesivo Papel – 3x3 cm
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {precosPapel3x3.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#D4AF37] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Adesivo Papel 5x5 */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#D4AF37]/30 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <i className="ri-price-tag-3-line"></i> Adesivo Papel – 5x5 cm
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {precosPapel5x5.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#D4AF37] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Adesivo Vinil 3x3 */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#25D366]/30 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-[#25D366] mb-4 flex items-center gap-2">
                <i className="ri-drop-line"></i> Adesivo Vinil – 3x3 cm
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {precosVinil3x3.map((item) => (
                  <div key={item.qtd} className="bg-[#1A1A1A] rounded-lg p-3 text-center">
                    <p className="text-[#25D366] font-bold text-base sm:text-lg">{item.valor}</p>
                    <p className="text-white/60 text-xs sm:text-sm">{item.qtd}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Adesivo Vinil 5x5 */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#25D366]/30 rounded-xl p-5 sm:p-6">
              <h4 className="text-lg sm:text-xl font-bold text-[#25D366] mb-4 flex items-center gap-2">
                <i className="ri-drop-line"></i> Adesivo Vinil – 5x5 cm
              </h4>
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

      {/* SEÇÃO DE DESCRIÇÃO E FOTO */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] via-[#1F1F1F] to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Qualidade e Versatilidade
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Produzimos adesivos de papel e vinil em Curitiba, ideais para embalagens, rótulos, brindes e divulgação da sua marca. Trabalhamos com materiais de alta qualidade, incluindo vinil resistente à água e papel adesivo com excelente acabamento.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Oferecemos produção rápida, impressão profissional e opção de retirada local ou envio para toda Curitiba e região metropolitana.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${adesivos}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Tipos de Adesivos
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

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de Adesivos
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e personalize adesivos em papel ou vinil para sua
            empresa.
          </p>
          <CTAButton type="adesivoPapelVinil" size="lg" />
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

export default AdesivoPapelVinil;
