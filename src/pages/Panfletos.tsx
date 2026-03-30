import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import folderImg from "../assets/produtos/folder.jpeg";
import { CTAButton } from "../components/CTAButton";

// Features Data
const features = [
  { icon: "ri-palette-line", label: "Impressão Colorida" },
  { icon: "ri-layout-grid-line", label: "Diversos Formatos" },
  { icon: "ri-rocket-line", label: "Produção Rápida" },
  { icon: "ri-price-tag-3-line", label: "Preço Competitivo" },
];

// Format Options Data com preços
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

// Paper Options Data
const paperOptions = [
  {
    title: "Couché 90g",
    description:
      "Papel leve e econômico, ideal para grandes tiragens e panfletagem",
  },
  {
    title: "Couché 115g",
    description:
      "Boa qualidade com custo acessível, versátil para diversos usos",
  },
  {
    title: "Couché 150g",
    description: "Espessura intermediária, equilíbrio entre qualidade e custo",
  },
  {
    title: "Couché 170g Fosco",
    description: "Papel encorpado com acabamento sofisticado e premium",
  },
];

function Panfletos() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Folders e Panfletos",
          description:
            "Impressão de folders e panfletos personalizados. Diversos formatos (10x14, 14x20, 20x28, A4, A5, A6) e gramaturas (Couché 90g, 115g, 150g, 170g). Alta qualidade e entrega rápida. Orçamento via WhatsApp (41) 3024-0080.",
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

      {/* Hero Section */}
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
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Folders e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Panfletos</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Impressão de folders e panfletos personalizados para divulgação.
            Diversos formatos e gramaturas de papel couché para sua campanha de
            marketing.
          </p>
          <CTAButton type="folder" size="lg" id="btn-whatsapp-orcamento" />
        </div>
      </section>

      {/* Features Section */}
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

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                Folders e Panfletos Personalizados
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Os folders e panfletos são ferramentas essenciais para
                divulgação de produtos, serviços e eventos. Na Gráfica Curitiba,
                produzimos materiais com impressão colorida de alta qualidade
                que garantem o impacto visual necessário para sua campanha.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Trabalhamos com diversos formatos: desde o compacto 10x14 cm
                ideal para panfletagem, passando pelo versátil 14x20 cm, até o
                amplo 20x28 cm perfeito para catálogos e materiais
                institucionais. Também oferecemos os formatos padrão A4, A5 e
                A6.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Ideal para comércios, imobiliárias, restaurantes, academias e
                empresas que buscam divulgar promoções, eventos ou serviços em
                Curitiba e região. Entrega rápida e preços especiais para
                grandes quantidades.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${folderImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          {/* Formatos e Preços Section */}
          <div className="mb-12 sm:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
              Panfletos Couché 90g - Preços
            </h3>
            <p className="text-sm text-white/60 text-center mb-6 sm:mb-10">
              Impressão colorida frente | Produção até 48h | Arte pronta em CMYK
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {formatOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[16px] sm:text-[20px] font-bold text-white mb-2">
                    {option.title}
                  </h4>
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
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de fazer pedido de Panfleto ${option.title} Couché 90g`)}`}
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
          </div>

          {/* Gramaturas Section */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Opções de Papel Couché
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {paperOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {option.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                    {option.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Panfleto em ${option.title}`)}`}
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

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Pronto para Divulgar Seu Negócio?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para seus
            folders e panfletos.
          </p>
          <CTAButton type="folder" size="lg" showIcon={false} />
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

export default Panfletos;
