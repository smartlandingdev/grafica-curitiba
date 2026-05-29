import cartaoVisitaImg from "../assets/produtos/cartao-visita-novo.jpeg";
import { CTAButton } from "../components";

const paperOptions = [
  {
    title: "Papel Supremo 250g",
    description: "Textura premium, perfeito para acabamento sofisticado",
  },
  {
    title: "Papel Reciclado",
    description: "Opção sustentável com excelente qualidade de impressão",
  },
  {
    title: "Laminação Brilhante",
    description: "Proteção extra com acabamento brilhante e moderno",
  },
];

function CartoesDeVisita() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cartões de Visita",
          description:
            "Cartões de visita personalizados em Curitiba com impressão offset e digital. Acabamento premium, diversos tipos de papel e entrega rápida. Solicite orçamento via WhatsApp (41) 3024-0080.",
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

      {/* Título + Descrição + Imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Cartões de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Visita
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Impressão profissional de cartões de visita com acabamento
                premium. Diversos tipos de papel e acabamentos para sua marca
                se destacar.
              </p>
              <CTAButton type="cartoes" size="lg" id="btn-whatsapp-orcamento" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20"
              style={{
                backgroundImage: `url("${cartaoVisitaImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Opções de Papel */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Opções de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Papel
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {paperOptions.map((option) => (
              <div
                key={option.title}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                  {option.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed mb-3 flex-grow">
                  {option.description}
                </p>
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Cartão de Visita em ${option.title}`)}`}
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
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Cartões de visita personalizados pela Gráfica Curitiba com
            impressão offset e digital de alta qualidade. Entrega para todo o
            Brasil e orçamento rápido para empresas em Curitiba.
          </p>
        </div>
      </section>
    </>
  );
}

export default CartoesDeVisita;
