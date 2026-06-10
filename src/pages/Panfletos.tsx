import folderImg from "../assets/produtos/folder.jpeg";
import { CTAButton } from "../components/CTAButton";

const formatOptions = [
  {
    title: "10x14 cm (A6)",
    description: "Formato compacto, ideal para distribuição em mãos e panfletagem",
    prices: [
      { qty: "500 un", price: "R$ 165" },
      { qty: "1.000 un", price: "R$ 175", best: true },
      { qty: "2.500 un", price: "R$ 235" },
      { qty: "5.000 un", price: "R$ 425" },
      { qty: "10.000 un", price: "R$ 902" },
    ],
  },
  {
    title: "14x20 cm (A5)",
    description: "Tamanho intermediário, equilíbrio entre espaço e praticidade",
    prices: [
      { qty: "500 un", price: "R$ 265" },
      { qty: "1.000 un", price: "R$ 275", best: true },
      { qty: "2.500 un", price: "R$ 495" },
      { qty: "5.000 un", price: "R$ 740" },
      { qty: "10.000 un", price: "R$ 1.449" },
    ],
  },
  {
    title: "20x28 cm (A4)",
    description: "Formato amplo, perfeito para catálogos e materiais detalhados",
    prices: [
      { qty: "500 un", price: "R$ 515" },
      { qty: "1.000 un", price: "R$ 525", best: true },
      { qty: "2.500 un", price: "R$ 955" },
      { qty: "5.000 un", price: "R$ 1.485" },
      { qty: "10.000 un", price: "R$ 2.885" },
    ],
  },
];

function Panfletos() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Folders e Panfletos",
          description:
            "Impressão de folders e panfletos personalizados. Diversos formatos (10x14, 14x20, 20x28, A4, A5, A6) e gramaturas (Couché 90g, 115g, 150g, 170g). Alta qualidade e entrega rápida. Orçamento via WhatsApp (41) 3024-0080.",
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
                Folders e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Panfletos
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Impressão de folders e panfletos personalizados para
                divulgação. Diversos formatos e gramaturas de papel couché
                para sua campanha de marketing.
              </p>
              <CTAButton type="folder" size="lg" id="btn-whatsapp-orcamento" />
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

      {/* Preços */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            Panfletos Couché 90g —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Preços
            </span>
          </h2>
          <p className="text-sm text-white/60 text-center mb-8 sm:mb-10">
            Impressão colorida frente | Produção até 48h | Arte pronta em CMYK
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {formatOptions.map((option) => (
              <div
                key={option.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-[16px] sm:text-[20px] font-bold text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-4">
                  {option.description}
                </p>
                <div className="space-y-2 mb-4 flex-grow">
                  {option.prices.map((item) => (
                    <div
                      key={item.qty}
                      className={`flex justify-between items-center py-1.5 px-2 rounded ${item.best ? "bg-gradient-to-b from-[#1A1A1A] to-[#252525]" : ""}`}
                    >
                      <span className={`text-xs sm:text-sm ${item.best ? "text-[#D4AF37] font-medium" : "text-white/70"}`}>
                        {item.qty}
                      </span>
                      <span className={`font-bold text-sm ${item.best ? "text-[#D4AF37]" : "text-white"}`}>
                        {item.price}
                        {item.best && <span className="text-xs ml-1">(melhor)</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  <span>Fazer Pedido</span>
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton type="folder" size="lg" showIcon={false} />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Adesivos de papel e vinil personalizados pela Gráfica Curitiba, com
            impressão digital colorida e entrega para todo o Brasil. Ideais para
            embalagens, rótulos, brindes e divulgação da sua marca em Curitiba e
            região metropolitana.
          </p>
        </div>
      </section>
    </>
  );
}

export default Panfletos;
