import marcadorImg from "../assets/produtos/marcador-pagina.png";

const WHATSAPP_URL = "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1";

const WPP_MSG = encodeURIComponent("Gostaria de comprar Marcadores de página");

const prices = [
  { qty: "100 unidades", price: "R$ 130,00" },
  { qty: "250 unidades", price: "R$ 150,00" },
  { qty: "500 unidades", price: "R$ 170,00" },
  { qty: "1.000 unidades", price: "R$ 198,00" },
];

function MarcadorPagina() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Marcador de Página Personalizado",
          description:
            "Marcador de Página em Papel Couchê 250g com UV total frente. Impressão offset profissional em Curitiba. Entrega para todo o Brasil.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "130.00",
            highPrice: "198.00",
            availability: "https://schema.org/InStock",
          },
        })}
      </script>

      {/* Hero */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Marcador de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Página
                </span>{" "}
                Personalizado
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-4">
                Impressão offset profissional em <strong className="text-[#D4AF37]">Papel Couchê 250g</strong> com{" "}
                <strong className="text-[#D4AF37]">UV total frente</strong>. Cores vibrantes, alta durabilidade e acabamento impecável para valorizar sua marca ou projeto.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: "ri-printer-line", label: "Impressão Offset" },
                  { icon: "ri-palette-line", label: "Cores Vivas" },
                  { icon: "ri-medal-line", label: "Alta Qualidade" },
                  { icon: "ri-truck-line", label: "Entrega Brasil" },
                ].map((f) => (
                  <span
                    key={f.label}
                    className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[12px] sm:text-[13px] font-medium px-3 py-1.5 rounded-full"
                  >
                    <i className={`${f.icon} text-sm`}></i>
                    {f.label}
                  </span>
                ))}
              </div>
              <a
                href={`${WHATSAPP_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:bg-[#20BD5A] transition-all duration-300 shadow-lg hover:shadow-[0_4px_24px_rgba(37,211,102,0.4)]"
              >
                <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
                Gostaria de comprar Marcadores de página
              </a>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl h-[280px] sm:h-[380px] lg:h-[440px]"
              style={{
                backgroundImage: `url("${marcadorImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Tabela de preços */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 text-center">
            Tabela de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Preços
            </span>
          </h2>
          <p className="text-sm text-white/50 text-center mb-3">
            Papel Couchê 250g — UV total frente
          </p>
          <p className="text-[12px] text-white/40 text-center mb-8 sm:mb-10">
            Clique em qualquer opção para falar conosco no WhatsApp
          </p>

          <div className="space-y-3 sm:space-y-4">
            {prices.map((item) => (
              <a
                key={item.qty}
                href={`${WHATSAPP_URL}?text=${WPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl px-5 py-4 sm:px-6 sm:py-5 hover:border-[#D4AF37]/60 hover:shadow-[0_4px_24px_rgba(212,175,55,0.15)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <i className="ri-bookmark-line text-[#D4AF37] text-base sm:text-lg"></i>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[14px] sm:text-[16px]">
                      {item.qty}
                    </p>
                    <p className="text-white/40 text-[11px] sm:text-[12px]">
                      Couchê 250g · UV total frente
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-5">
                  <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
                    {item.price}
                  </p>
                  <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] text-white text-[12px] font-semibold px-3 py-1.5 rounded-lg group-hover:bg-[#20BD5A] transition-colors duration-300">
                    <i className="ri-whatsapp-line text-sm"></i>
                    Comprar
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA bottom */}
          <div className="mt-10 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold hover:bg-[#20BD5A] transition-all duration-300 shadow-lg hover:shadow-[0_4px_24px_rgba(37,211,102,0.4)]"
            >
              <i className="ri-whatsapp-line text-xl"></i>
              Gostaria de comprar Marcadores de página
            </a>
          </div>
        </div>
      </section>

      {/* SEO footer */}
      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — Marcadores de Página personalizados em Papel Couchê 250g com UV total frente. Impressão offset profissional com cores vivas e alta durabilidade. Entrega para todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default MarcadorPagina;
