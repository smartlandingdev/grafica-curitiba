import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";
import pasta from "../assets/produtos/pasta.jpg";

const features = [
  { icon: "ri-folder-line", label: "Pasta com Bolsa" },
  { icon: "ri-printer-line", label: "Impressão Offset" },
  { icon: "ri-palette-line", label: "Full Color" },
  { icon: "ri-building-line", label: "Uso Corporativo" },
];

const types = [
  {
    title: "Pasta com Bolso",
    description: "Ideal para guardar documentos e apresentações",
  },
  {
    title: "Pasta com Aba",
    description: "Fechamento seguro com aba e vinco reforçado",
  },
  {
    title: "Pasta L",
    description: "Modelo simples e econômico para documentos",
  },
  {
    title: "Pasta Executiva",
    description: "Acabamento premium para apresentações importantes",
  },
];

const pastaBolsaCouche250 = [
  { qty: "25 unidades", price: "R$ 435,00" },
  { qty: "50 unidades", price: "R$ 688,50" },
  { qty: "100 unidades", price: "R$ 1.255,00" },
  { qty: "250 unidades", price: "R$ 1.768,00" },
  { qty: "500 unidades", price: "R$ 2.068,00" },
  { qty: "1.000 unidades", price: "R$ 3.092,50" },
];

const pastaBolsaCouche300 = [
  { qty: "25 unidades", price: "R$ 371,00" },
  { qty: "50 unidades", price: "R$ 620,00" },
  { qty: "100 unidades", price: "R$ 955,00" },
  { qty: "250 unidades", price: "R$ 1.820,00" },
  { qty: "500 unidades", price: "R$ 2.808,00" },
  { qty: "1.000 unidades", price: "R$ 3.930,00" },
];

const bolsaVernizLocalizado = [
  { qty: "250 unidades", price: "R$ 2.410,00" },
  { qty: "500 unidades", price: "R$ 3.465,00" },
  { qty: "1.000 unidades", price: "R$ 4.730,00" },
];

function PastasPersonalizadas() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pastas Personalizadas",
          description:
            "Pastas personalizadas em Curitiba. Impressão offset colorida em diversos modelos. Ideal para empresas e apresentações corporativas.",
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
            Pastas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Personalizadas</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Pastas corporativas com impressão personalizada. Diversos modelos
            com acabamento profissional para sua empresa.
          </p>
          <CTAButton type="pastas" size="lg" />
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
                Organize e Apresente com Profissionalismo
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                As pastas personalizadas são essenciais para organizar
                documentos e transmitir profissionalismo em reuniões e
                apresentações. Com a identidade visual da sua empresa, cada
                pasta se torna uma ferramenta de marketing.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Fabricamos pastas em diversos modelos: com bolso interno, abas,
                formato L e executivas. Todas com impressão offset colorida em
                papel de alta gramatura para garantir resistência e
                durabilidade.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Ideal para apresentações comerciais, propostas, contratos,
                materiais de treinamento e qualquer documento que mereça uma
                apresentação diferenciada.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${pasta}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Modelos de Pastas
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

      {/* Seção Pasta com Bolsa - Destaque */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] via-[#1F1F1F] to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Mais Vendido
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4">
              Pasta com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                Bolsa
              </span>{" "}
              – Formato A4
            </h2>
            <p className="text-[14px] sm:text-[16px] text-white/60 max-w-2xl mx-auto">
              Prazo de produção: <strong className="text-white/80">6 dias úteis</strong>. Impressão colorida, acabamento profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 - Couchê 250 */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300">
              <div className="px-5 pt-6 pb-4 border-b border-[#D4AF37]/10">
                <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-1">
                  Papel Couchê 250
                </h3>
                <p className="text-[12px] text-white/50">30x42 cm · Impressão colorida (frente)</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                {pastaBolsaCouche250.map((item) => (
                  <div
                    key={item.qty}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[12px] sm:text-[13px] text-white/70">{item.qty}</span>
                    <span className="text-[14px] font-semibold text-[#D4AF37]">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-6 pt-2">
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de solicitar orçamento para Pasta com Bolsa – Couchê 250")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-base"></i>
                  Solicitar Orçamento
                </a>
              </div>
            </div>

            {/* Card 2 - Couchê 300 com Verniz */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/40 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(212,175,55,0.12)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)] transition-all duration-300">
              <div className="px-5 pt-6 pb-4 border-b border-[#D4AF37]/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-white">
                    Papel Couchê 300 + Verniz Total
                  </h3>
                  <span className="ml-2 flex-shrink-0 bg-gradient-to-r from-[#BF953F] to-[#AA771C] text-[#0A0A0A] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Premium
                  </span>
                </div>
                <p className="text-[12px] text-white/50">30x42 cm · Verniz total · Impressão colorida (frente)</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                {pastaBolsaCouche300.map((item) => (
                  <div
                    key={item.qty}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[12px] sm:text-[13px] text-white/70">{item.qty}</span>
                    <span className="text-[14px] font-semibold text-[#D4AF37]">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-6 pt-2">
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de solicitar orçamento para Pasta com Bolsa – Couchê 300 com Verniz Total")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-base"></i>
                  Solicitar Orçamento
                </a>
              </div>
            </div>

            {/* Card 3 - Bolsa Verniz Localizado */}
            <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-300">
              <div className="px-5 pt-6 pb-4 border-b border-[#D4AF37]/10">
                <h3 className="text-[15px] sm:text-[17px] font-bold text-white mb-1">
                  Bolsa Personalizada
                </h3>
                <p className="text-[12px] text-white/50">Verniz Localizado · 4x0 Cores</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                {bolsaVernizLocalizado.map((item) => (
                  <div
                    key={item.qty}
                    className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[12px] sm:text-[13px] text-white/70">{item.qty}</span>
                    <span className="text-[14px] font-semibold text-[#D4AF37]">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-6 pt-2">
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de solicitar orçamento para Bolsa Personalizada com Verniz Localizado")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-base"></i>
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de Pastas
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e personalize as pastas da sua empresa com
            qualidade gráfica profissional.
          </p>
          <CTAButton type="pastas" size="lg" />
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

export default PastasPersonalizadas;
