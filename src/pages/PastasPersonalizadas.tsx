import { CTAButton } from "../components";
import pasta from "../assets/produtos/pasta.jpg";

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

      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Pastas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Personalizadas</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Pastas corporativas com impressão personalizada. Diversos modelos
                com acabamento profissional para sua empresa.
              </p>
              <CTAButton type="pastas" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${pasta}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
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
                  href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
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
                  href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
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
                  href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
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

          <div className="mt-10 text-center">
            <CTAButton type="pastas" size="lg" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — pastas personalizadas em Couchê 250 e 300 com impressão offset colorida. Formato A4 com bolso, verniz total ou verniz localizado. Curitiba e todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default PastasPersonalizadas;
