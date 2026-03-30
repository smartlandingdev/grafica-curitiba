import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import hotstampingPrataImg from "../assets/produtos/hotstamping-prata.jpeg";
import hotstampingDouradoImg from "../assets/produtos/hotstamping-dourado.jpeg";
import { CTAButton } from "../components";

const features = [
  { icon: "ri-vip-crown-line", label: "Acabamento Premium" },
  { icon: "ri-sparkling-2-line", label: "Impressão de Alta Qualidade" },
  { icon: "ri-timer-line", label: "Produção Rápida" },
  { icon: "ri-truck-line", label: "Envio Ágil" },
];

const products = [
  {
    title: "Hot Stamping Prata",
    subtitle: "(Hot Stamping Aplicado somente de um lado do Cartão)",
    paper: "Papel Couche 300g com Laminação Soft Touch",
    prices: [
      { qty: "500 Unidades", price: "R$ 472,60" },
      { qty: "1.000 Unidades", price: "R$ 562,00" },
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
      { qty: "1.000 Unidades", price: "R$ 562,00" },
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

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
        style={{
          backgroundImage: `url("${fundosProdutosImg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[22px] sm:text-3xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Cartão de Visita Soft Touch com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Hot Stamping</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Quer causar impacto no primeiro contato? O Cartão de Visita Soft Touch com Hot Stamping Dourado ou Prata é a escolha ideal para quem quer transmitir luxo, autoridade e profissionalismo.
          </p>
          <CTAButton type="hotStamping" size="lg" />
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
                Feito para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">Impressionar</span>
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                O acabamento Soft Touch entrega um toque aveludado premium, enquanto o Hot Stamping aplica um brilho metálico sofisticado (dourado ou prata), destacando seu logotipo e elevando o valor da sua marca instantaneamente.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Essa combinação cria um cartão que não passa despercebido — é feito para impressionar, encantar e ser lembrado.
              </p>

              <div className="space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-[#D4AF37] text-lg"></i>
                  <span className="text-[14px] sm:text-[16px] text-white/80">Destaque sua marca com acabamento premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-[#D4AF37] text-lg"></i>
                  <span className="text-[14px] sm:text-[16px] text-white/80">Ideal para empresários, advogados, médicos e alto padrão</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-[#D4AF37] text-lg"></i>
                  <span className="text-[14px] sm:text-[16px] text-white/80">Impressão de alta qualidade com acabamento impecável</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-check-line text-[#D4AF37] text-lg"></i>
                  <span className="text-[14px] sm:text-[16px] text-white/80">Produção rápida em Curitiba com envio ágil</span>
                </div>
              </div>

              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Na Gráfica Curitiba Online, utilizamos materiais de alto padrão e tecnologia de ponta para entregar cartões de visita que realmente vendem sua imagem.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20">
              <img
                src="/assets/produtos/hotstamping.jpeg"
                alt="Cartão de visita com hot stamping metalizado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mt-12 sm:mt-16">
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
                  <div className="p-6 sm:p-8">
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
                        className="flex items-center justify-between bg-[#1A1A1A]/50 border border-[#D4AF37]/10 rounded-lg p-3 sm:p-4"
                      >
                        <div>
                          <p className="text-[13px] sm:text-[15px] text-white font-medium">
                            {item.qty}
                          </p>
                          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
                            {item.price}
                          </p>
                        </div>
                        <a
                          href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Olá! Gostaria de comprar Cartão de Visita com Hot Stamping ${product.color} - ${item.qty} por ${item.price}`)}`}
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
        </div>
      </section>

      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-[#2A2A2A] via-[#333333] to-[#2A2A2A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute top-10 left-10 w-24 h-24 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Eleve Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37]">Imagem Profissional</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Transforme seu cartão de visita em uma ferramenta de impacto. Entre em contato com nossa equipe e solicite o seu.
          </p>
          <CTAButton type="hotStamping" size="lg" />
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

export default HotStamping;
