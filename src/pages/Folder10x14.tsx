import folderImg from "../assets/produtos/folder.jpeg";

// Format Options Data
const formatOptions = [
  {
    title: "Couché 115g",
    description: "Papel leve e econômico, ideal para grandes tiragens",
  },
  {
    title: "Couché 150g",
    description: "Boa espessura, equilíbrio entre qualidade e custo",
  },
  {
    title: "Couché 170g",
    description: "Papel mais encorpado, transmite qualidade premium",
  },
  {
    title: "Couché 250g",
    description: "Alta gramatura, ideal para folders sofisticados",
  },
];

function Couche90g() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Folder 10x14 cm",
          description:
            "Impressão de folders 10x14 cm personalizados em Curitiba. Alta qualidade, cores vibrantes e entrega rápida. Orçamento via WhatsApp (41) 3024-0080.",
          brand: {
            "@type": "Organization",
            name: "Gráfica Curitiba",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            seller: {
              "@type": "Organization",
              name: "Gráfica Curitiba",
            },
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
                Folder{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  10x14 cm
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Impressão de folders 10x14 cm personalizados. Formato compacto, prático e ideal para distribuição em mãos e panfletagem.
              </p>
              <a
                href="https://wa.me/+554130240080?text=Gostaria%20de%20solicitar%20or%C3%A7amento%20para%20Folder%2010x14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
                id="btn-whatsapp-orcamento"
              >
                <i className="ri-whatsapp-line text-xl"></i>
                Solicitar Orçamento
              </a>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${folderImg}")`,
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {formatOptions.map((option) => (
              <div
                key={option.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                  {option.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                  {option.description}
                </p>
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Folder 10x14 em ${option.title}`)}`}
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
    </>
  );
}

export default Couche90g;
