import pulseiras from "../assets/produtos/pulseiras.jpg";

const colors = [
  { name: "Branca", bg: "#FFFFFF", text: "#1A1A1A" },
  { name: "Cinza", bg: "#9CA3AF", text: "#1A1A1A" },
  { name: "Pink", bg: "#EC4899", text: "#FFFFFF" },
  { name: "Vermelha", bg: "#EF4444", text: "#FFFFFF" },
  { name: "Roxo", bg: "#7C3AED", text: "#FFFFFF" },
  { name: "Verde", bg: "#22C55E", text: "#FFFFFF" },
  { name: "Azul", bg: "#3B82F6", text: "#FFFFFF" },
  { name: "Amarelo", bg: "#EAB308", text: "#1A1A1A" },
  { name: "Laranja", bg: "#F97316", text: "#FFFFFF" },
];

const pricing = [
  { qty: "50 unidades", price: "R$ 45,00" },
  { qty: "100 unidades", price: "R$ 60,00" },
  { qty: "200 unidades", price: "R$ 120,00" },
  { qty: "300 unidades", price: "R$ 175,00" },
  { qty: "500 unidades", price: "R$ 275,00" },
  { qty: "1.000 unidades", price: "R$ 445,00" },
];

function PulseirasEventos() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pulseiras para Eventos e Identificação",
          description:
            "Pulseiras personalizadas para eventos, festas, hospitais, empresas e controle de acesso em Curitiba. Material resistente, impressão profissional e produção rápida. Tyvek e vinil. Orçamento (41) 3024-0080.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            seller: { "@type": "Organization", name: "Gráfica Curitiba" },
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Gráfica Curitiba",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Curitiba",
              addressRegion: "PR",
              addressCountry: "BR",
            },
            telephone: "+55-41-3024-0080",
          },
        })}
      </script>

      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Pulseiras de Festa{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Personalizadas
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Ideais para controle de entrada em eventos, festas, bares e baladas.
                Resistentes, com impressão personalizada em preto.
              </p>
              <a
                href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Falar no WhatsApp
              </a>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${pulseiras}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-[14px] sm:text-[16px] text-white/80 leading-relaxed mb-2">
              Trabalhamos com <strong className="text-white">pulseiras de festa personalizadas</strong>, ideais para controle de entrada em eventos, festas, bares e baladas. Resistentes e já vão <strong className="text-white">com impressão em PRETO personalizada</strong> (nome do evento, data ou marca).
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#D4AF37] font-semibold mt-3">
              ⏱ Produção rápida: em até 48 horas.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-[15px] sm:text-[17px] font-bold text-white mb-4">
              Cores disponíveis
            </h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <span
                  key={c.name}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold border border-white/10"
                  style={{ backgroundColor: c.bg, color: c.text }}
                >
                  {c.name}
                </span>
              ))}
            </div>
            <p className="text-[12px] sm:text-[13px] text-white/50 mt-3">
              📦 Pedido mínimo: 50 unidades da mesma cor.
            </p>
          </div>

          <div>
            <h2 className="text-[15px] sm:text-[17px] font-bold text-white mb-4">
              Valores por quantidade
            </h2>
            <div className="space-y-2">
              {pricing.map((item) => (
                <div
                  key={item.qty}
                  className="flex items-center justify-between gap-2 sm:gap-4 bg-gradient-to-r from-[#2A2A2A] to-[#1E1E1E] border border-[#D4AF37]/15 rounded-xl px-4 sm:px-6 py-3 hover:border-[#D4AF37]/40 transition-all duration-200"
                >
                  <span className="text-[14px] sm:text-[15px] text-white/80 font-medium">
                    {item.qty}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-[15px] sm:text-[17px] font-bold text-[#D4AF37]">
                      {item.price}
                    </span>
                    <a
                      href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3 py-1.5 rounded-lg text-[10px] sm:text-[12px] font-semibold transition-all duration-300"
                    >
                      <i className="ri-whatsapp-line text-sm"></i>
                      Comprar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — pulseiras personalizadas para festas e eventos. Tyvek e vinil, impressão em preto, produção em até 48h. Curitiba e envio para todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default PulseirasEventos;
