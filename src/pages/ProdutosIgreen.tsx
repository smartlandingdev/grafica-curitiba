import bannerImg from "../assets/produtos/banner.jpeg";
import cartaoImg from "../assets/produtos/cartao-visita-novo.jpeg";
import crachaImg from "../assets/produtos/cracha.jpeg";
import cordaoImg from "../assets/produtos/cordao-personalizado.png";
import folderImg from "../assets/produtos/folder.jpeg";

// Types
interface PriceItem {
  qty: string;
  price: string;
  best?: boolean;
  label?: string;
}

interface ProdutoIgreen {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs?: string[];
  prices: PriceItem[];
}

// Produtos Igreen Data
const produtosIgreen: ProdutoIgreen[] = [
  {
    id: "banner",
    title: "Banner Personalizado Igreen",
    subtitle: "Impressão em lona de alta resolução para divulgação da sua unidade",
    description: "Banners personalizados com a identidade visual Igreen. Impressão em lona 440g com acabamento em ilhós e varas para fácil instalação. Ideais para eventos, stands, recepção de clientes e pontos de venda. Alta resolução e cores vibrantes que destacam a sua unidade.",
    image: bannerImg,
    specs: [
      "Material: Lona 440g",
      "Impressão: Alta resolução",
      "Acabamento: Ilhós + varas",
      "Produção: 2 a 3 dias úteis",
    ],
    prices: [
      { qty: "1 unidade (60x90cm)", price: "R$ 59,90" },
      { qty: "1 unidade (80x120cm)", price: "R$ 79,90" },
      { qty: "1 unidade (1x1,5m)", price: "R$ 109,90", best: true, label: "mais pedido" },
      { qty: "1 unidade (1,2x1,8m)", price: "R$ 139,90" },
    ],
  },
  {
    id: "cartao-visita",
    title: "Cartões de Visita Personalizados Igreen",
    subtitle: "Apresentação profissional com identidade visual Igreen",
    description: "Cartões de visita personalizados com o nome, cargo e contato do consultor Igreen. Impressos em Couché 300g com acabamento fosco ou brilhante. Formato padrão 9x5cm, produção rápida e alta qualidade gráfica para causar uma ótima primeira impressão.",
    image: cartaoImg,
    specs: [
      "Material: Couché 300g",
      "Formato: 9x5cm",
      "Acabamento: Fosco ou Brilhante",
      "Impressão: 4x4 cores",
    ],
    prices: [
      { qty: "100 unidades", price: "R$ 49,90" },
      { qty: "250 unidades", price: "R$ 79,90" },
      { qty: "500 unidades", price: "R$ 109,90", best: true, label: "melhor custo" },
      { qty: "1.000 unidades", price: "R$ 159,90" },
    ],
  },
  {
    id: "cracha",
    title: "Crachás Personalizados Igreen",
    subtitle: "Identificação profissional para consultores e equipe",
    description: "Crachás personalizados com a identidade visual Igreen. Impressos em PVC rígido ou papel com plastificação, com foto, nome e cargo. Garantem padronização e profissionalismo para toda a equipe em atendimentos, eventos e reuniões.",
    image: crachaImg,
    specs: [
      "Material: PVC rígido ou papel laminado",
      "Formato: 9x5,5cm",
      "Impressão: Frente e verso",
      "Inclui: Furo para cordão",
    ],
    prices: [
      { qty: "1 unidade", price: "R$ 25,00" },
      { qty: "10 unidades", price: "R$ 220,00", best: true, label: "melhor custo" },
      { qty: "25 unidades", price: "R$ 525,00" },
      { qty: "50 unidades", price: "R$ 1.000,00" },
    ],
  },
  {
    id: "cordao-cracha",
    title: "Cordões de Crachá Personalizados Igreen",
    subtitle: "Cordão personalizado com a marca Igreen",
    description: "Cordões de crachá personalizados com a marca Igreen. Com mosquete em metal prateado para fixação do crachá. Sublimação em poliéster com cores vivas e duradouras. Complemento perfeito para o kit de identificação profissional da sua equipe.",
    image: cordaoImg,
    specs: [
      "Material: Poliéster sublimado",
      "Comprimento: 90cm",
      "Acabamento: Mosquete metálico",
      "Personalização: Logo e nome Igreen",
    ],
    prices: [
      { qty: "10 unidades", price: "R$ 180,00" },
      { qty: "25 unidades", price: "R$ 425,00", best: true, label: "melhor custo" },
      { qty: "50 unidades", price: "R$ 800,00" },
      { qty: "100 unidades", price: "R$ 1.500,00" },
    ],
  },
  {
    id: "folder",
    title: "Folder Personalizado Igreen",
    subtitle: "Material de apresentação profissional para consultores Igreen",
    description: "Folders personalizados com identidade visual Igreen em formato A5 (14x20cm) ou A4 dobrado. Impressos em Couché 90g ou 115g com impressão 4x4 cores. Ideais para apresentar planos, produtos e serviços Igreen em reuniões, visitas comerciais e eventos.",
    image: folderImg,
    specs: [
      "Material: Couché 90g ou 115g",
      "Formato: A5 (14x20cm) ou A4 dobrado",
      "Impressão: 4x4 cores",
      "Produção: 4 a 5 dias úteis",
    ],
    prices: [
      { qty: "500 unidades", price: "R$ 265,00" },
      { qty: "1.000 unidades", price: "R$ 275,00", best: true, label: "melhor custo" },
      { qty: "2.500 unidades", price: "R$ 495,00" },
      { qty: "5.000 unidades", price: "R$ 740,00" },
    ],
  },
];

function ProdutosIgreen() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Materiais Gráficos Igreen",
          description:
            "Materiais gráficos personalizados para consultores Igreen: banners, cartões de visita, crachás, cordões e folders. Produtos prontos para uso com a identidade visual Igreen.",
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
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center pt-24 pb-12 sm:pt-20 bg-gradient-to-br from-[#0A1A0F] via-[#0D2010] to-[#122B17]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#22C55E]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#22C55E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full px-4 py-2 mb-6">
            <i className="ri-leaf-fill text-[#22C55E]"></i>
            <span className="text-[#22C55E] text-sm font-medium">Setor Exclusivo Igreen</span>
          </div>

          <h1 className="text-[26px] sm:text-4xl lg:text-[52px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
            Materiais gráficos personalizados para consultores{" "}
            <span className="text-[#22C55E]">Igreen</span>: banners, cartões, crachás, cordões e folders
          </h1>
          <h2 className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
            Produtos prontos para uso, personalizados com o nome, endereço e identidade da sua unidade Igreen, garantindo mais profissionalismo no atendimento
          </h2>

          <a
            href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido de materiais gráficos para Igreen.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_24px_rgba(34,197,94,0.4)] hover:shadow-[0_8px_32px_rgba(34,197,94,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 bg-[#0A1A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white mb-4">
              Produtos <span className="text-[#22C55E]">Exclusivos</span> Igreen
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
              Todos os materiais com artes prontas e personalizáveis com os dados da sua unidade
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {produtosIgreen.map((produto, index) => (
              <div
                key={produto.id}
                className="bg-gradient-to-br from-[#0D2010] to-[#122B17] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#22C55E]/20 hover:border-[#22C55E]/40 transition-all duration-500"
              >
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image - 2 columns */}
                  <div className={`relative h-[250px] sm:h-[300px] lg:h-auto lg:min-h-[400px] lg:col-span-2 ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("${produto.image}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0F]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0D2010]"></div>
                  </div>

                  {/* Content - 3 columns */}
                  <div className={`lg:col-span-3 p-6 sm:p-8 ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                      {produto.title}
                    </h3>
                    <p className="text-[#22C55E] font-medium text-sm mb-3">{produto.subtitle}</p>
                    <p className="text-sm text-white/70 mb-4 leading-relaxed line-clamp-3">
                      {produto.description}
                    </p>

                    {/* Layout with specs and prices side by side */}
                    <div className={`grid ${produto.specs ? "md:grid-cols-2" : "grid-cols-1"} gap-4 mb-5`}>
                      {/* Specs if available */}
                      {produto.specs && (
                        <div className="space-y-1.5">
                          <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-2">
                            Especificações
                          </h4>
                          {produto.specs.map((spec, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                              <i className="ri-check-line text-[#22C55E] text-sm"></i>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Prices */}
                      <div className="bg-[#0A1A0F]/50 rounded-xl p-4">
                        <h4 className="text-xs font-semibold text-[#22C55E] mb-3 uppercase tracking-wide">
                          Tabela de Preços
                        </h4>
                        <div className={`grid ${produto.prices.length > 4 ? "grid-cols-2 gap-x-3 gap-y-2" : "grid-cols-1 gap-2"}`}>
                          {produto.prices.map((item) => (
                            <div
                              key={item.qty}
                              className={`flex justify-between items-center py-1.5 px-2.5 rounded-md text-xs ${
                                item.best
                                  ? "bg-[#22C55E]/20 border border-[#22C55E]/30"
                                  : "bg-[#0D2010]/50"
                              }`}
                            >
                              <span className={`${item.best ? "text-[#22C55E] font-medium" : "text-white/70"}`}>
                                {item.best && <i className="ri-star-fill mr-1 text-[10px]"></i>}
                                {item.qty.replace(" unidades", "un").replace(" Unidades", "un")}
                              </span>
                              <span className={`font-bold ${item.best ? "text-[#22C55E]" : "text-white"}`}>
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Olá! Gostaria de fazer pedido de ${produto.title} para Igreen.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-105 transition-all duration-300"
                    >
                      <i className="ri-whatsapp-line text-base"></i>
                      <span>Fazer Pedido</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Coming Soon */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0A1A0F] to-[#0D2010]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0D2010] to-[#122B17] rounded-2xl p-8 sm:p-12 border border-[#22C55E]/20">
            <i className="ri-gift-line text-4xl sm:text-5xl text-[#22C55E] mb-4"></i>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Mais Produtos em Breve
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-6 max-w-xl mx-auto">
              Estamos preparando mais opções de materiais personalizados para consultores Igreen.
              Entre em contato para saber mais!
            </p>
            <a
              href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de saber sobre novos produtos para Igreen.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#22C55E] text-[#22C55E] px-6 py-3 rounded-full font-medium hover:bg-[#22C55E] hover:text-white transition-all duration-300"
            >
              <i className="ri-notification-line"></i>
              <span>Quero ser Avisado</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

export default ProdutosIgreen;
