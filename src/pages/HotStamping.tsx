import hotstampingPrataImg from "../assets/produtos/hotstamping-prata.jpeg";
import hotstampingDouradoImg from "../assets/produtos/hotstamping-dourado.jpeg";
import hotstampingImg from "../assets/produtos/hotstamping-novo.jpeg";
import { CTAButton } from "../components";

const products = [
  {
    title: "Hot Stamping Prata",
    subtitle: "(Hot Stamping Aplicado somente de um lado do Cartão)",
    paper: "Papel Couche 300g com Laminação Soft Touch",
    prices: [
      { qty: "500 Unidades", price: "R$ 472,60", href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/97ab7d77-4533-429c-84dc-6b0e11756e44" },
      { qty: "1.000 Unidades", price: "R$ 562,00", href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/fb43e9ec-2a84-401e-9166-7017a3d0e79a" },
    ],
    prazo: "10 dias úteis",
    color: "Prata",
    image: hotstampingPrataImg,
  },
  {
    title: "Hot Stamping Dourado",
    subtitle: "(Hot Stamping Aplicado somente de um lado do Cartão)",
    paper: "Papel Couche 300g com Laminação Soft Touch",
    prices: [
      { qty: "500 Unidades", price: "R$ 472,60" },
      { qty: "1.000 Unidades", price: "R$ 562,00", href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/ce956f42-c99b-451d-9ef3-98ed2f65c157" },
    ],
    prazo: "10 dias úteis",
    color: "Dourado",
    image: hotstampingDouradoImg,
  },
];

function HotStamping() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cartão de Visita Soft Touch com Hot Stamping",
          description:
            "Cartão de Visita Soft Touch com Hot Stamping Dourado ou Prata em Curitiba. Acabamento premium aveludado com brilho metálico sofisticado. Ideal para empresários, advogados e médicos.",
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
                Cartão de Visita Soft Touch com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Hot Stamping</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Quer causar impacto no primeiro contato? O Cartão de Visita Soft Touch com Hot Stamping Dourado ou Prata é a escolha ideal para quem quer transmitir luxo, autoridade e profissionalismo.
              </p>
              <CTAButton type="hotStamping" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${hotstampingImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
            Escolha a quantidade e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">entre em contato</span>
          </h3>
          <p className="text-sm sm:text-base text-white/60 text-center mb-6 sm:mb-10">
            Transforme seu cartão em uma ferramenta de impacto e fechamento de negócios
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 hover:shadow-[0_8px_32px_rgba(212,175,55,0.2)] transition-all duration-300"
              >
                {product.image && (
                  <div className="h-[180px] sm:h-[220px] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-6 lg:p-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    {product.title}
                  </h4>
                  <p className="text-[12px] sm:text-[13px] text-white/50 mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-[#D4AF37] font-medium mb-4 sm:mb-6">
                    {product.paper}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {product.prices.map((item) => (
                      <div
                        key={item.qty}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#1A1A1A]/50 border border-[#D4AF37]/10 rounded-lg p-3 sm:p-4"
                      >
                        <div className="flex-1">
                          <p className="text-[13px] sm:text-[15px] text-white font-medium">
                            {item.qty}
                          </p>
                          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
                            {item.price}
                          </p>
                        </div>
                        <a
                          href={item.href || `https://wa.me/+554130240080?text=${encodeURIComponent(`Olá! Gostaria de comprar Cartão de Visita com Hot Stamping ${product.color} - ${item.qty} por ${item.price}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-[12px] sm:text-sm font-semibold hover:bg-[#20BD5A] transition-all duration-300 shadow-lg hover:shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
                        >
                          <i className="ri-whatsapp-line text-base sm:text-lg"></i>
                          <span>Comprar esse</span>
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-white/60 text-[12px] sm:text-[13px]">
                    <i className="ri-time-line"></i>
                    <span>Prazo de produção: <strong className="text-white/80">{product.prazo}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — cartões de visita Soft Touch com Hot Stamping dourado ou prata. Acabamento aveludado premium para empresários, advogados e médicos em Curitiba e todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default HotStamping;
