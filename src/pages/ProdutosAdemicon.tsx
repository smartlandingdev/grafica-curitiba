import folderAdemiconImg from "../assets/produtos/folder-ademicon.png";
import canetaClassicImg from "../assets/produtos/caneta-classic-ademicon.png";
import canetaTouchImg from "../assets/produtos/caneta-touch-ademicon.png";
import panfleto10x14Img from "../assets/produtos/panfleto-10x14-ademicon.png";
import folder14x20Img from "../assets/produtos/folder-14x20-ademicon.png";
import canecaAdemiconImg from "../assets/produtos/caneca-ademicon.png";
import kitCrachaCordaoImg from "../assets/produtos/kit-cracha-cordao-ademicon.png";

// Types
interface PriceItem {
  qty: string;
  price: string;
  best?: boolean;
  label?: string;
}

interface ProdutoAdemicon {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs?: string[];
  prices: PriceItem[];
}

// Produtos Ademicon Data
const produtosAdemicon: ProdutoAdemicon[] = [
  {
    id: "panfleto-a6",
    title: "Panfletos 10x14 Personalizados para Consultores Ademicon",
    subtitle: "Panfletos A6 (10x14 cm) ideais para prospecção, eventos e atendimento ao cliente",
    description: "Panfletos 10x14 cm (formato A6) impressos em Papel Couche 90g já personalizados para consultores Ademicon. Compactos, práticos e com visual profissional, são ideais para distribuição em eventos, visitas comerciais e atendimentos presenciais. Produzidos com alta qualidade de impressão, ajudam a transmitir credibilidade e aumentar suas chances de conversão.",
    image: panfleto10x14Img,
    prices: [
      { qty: "500 unidades", price: "R$ 165" },
      { qty: "1.000 unidades", price: "R$ 175", best: true, label: "melhor custo" },
      { qty: "2.500 unidades", price: "R$ 235" },
      { qty: "5.000 unidades", price: "R$ 425" },
      { qty: "10.000 unidades", price: "R$ 902" },
    ],
  },
  {
    id: "panfleto-a5",
    title: "Folder 14x20cm A5 Personalizado",
    subtitle: "Material profissional para vendas de consórcio Ademicon",
    description: "Folder 14x20cm (A5) com impressão frente e verso em papel Couché de alta qualidade. Design moderno com impacto visual para apresentação de planos de consórcio. Ideal para reuniões, visitas comerciais e captação de clientes.",
    image: folder14x20Img,
    prices: [
      { qty: "500 unidades", price: "R$ 265" },
      { qty: "1.000 unidades", price: "R$ 275", best: true, label: "melhor custo" },
      { qty: "2.500 unidades", price: "R$ 495" },
      { qty: "5.000 unidades", price: "R$ 740" },
      { qty: "10.000 unidades", price: "R$ 1.449" },
    ],
  },
  {
    id: "folder",
    title: "Folder 20x21 com 1 Dobra",
    subtitle: "Material profissional para apresentações",
    description: "Folder profissional em Couchê 90g com impressão 4x4 cores. Tamanho 20x21cm aberto com acabamento de 1 dobra central. Produção em 4 a 5 dias úteis.",
    image: folderAdemiconImg,
    specs: [
      "Material: Couchê 90g",
      "Cor: 4x4",
      "Tamanho: 20x21cm (Aberto)",
      "Acabamento: 1 dobra central",
      "Produção: 4 a 5 dias úteis",
    ],
    prices: [
      { qty: "1.000 unidades", price: "R$ 491,34" },
      { qty: "2.500 unidades", price: "R$ 872,12" },
      { qty: "5.000 unidades", price: "R$ 1.499,80" },
    ],
  },
  {
    id: "canetas-classic",
    title: "Canetas Metal Classic",
    subtitle: "Gravação a Laser",
    description: "Canetas de metal personalizadas com gravação a laser. Material premium que transmite profissionalismo e qualidade em cada atendimento.",
    image: canetaClassicImg,
    prices: [
      { qty: "10 unidades", price: "R$ 80,00" },
      { qty: "20 unidades", price: "R$ 129,99" },
      { qty: "50 unidades", price: "R$ 311,99" },
      { qty: "100 unidades", price: "R$ 519,87", best: true, label: "mais vendido" },
      { qty: "250 unidades", price: "R$ 1.283,75" },
      { qty: "500 unidades", price: "R$ 2.535,00" },
    ],
  },
  {
    id: "canetas-touch",
    title: "Canetas Metal Touch",
    subtitle: "Com ponteira touch screen",
    description: "Canetas de metal com ponteira touch para dispositivos móveis. Funcionalidade moderna com acabamento premium para sua equipe Ademicon.",
    image: canetaTouchImg,
    prices: [
      { qty: "10 unidades", price: "R$ 84,90" },
      { qty: "20 unidades", price: "R$ 155,90" },
      { qty: "50 unidades", price: "R$ 357,90" },
      { qty: "100 unidades", price: "R$ 699,90", best: true, label: "mais vendido" },
      { qty: "250 unidades", price: "R$ 1.754,90" },
      { qty: "500 unidades", price: "R$ 3.477,90" },
      { qty: "1.000 unidades", price: "R$ 6.889,90" },
    ],
  },
  {
    id: "caneca",
    title: "Caneca Personalizada Ademicon",
    subtitle: "Brinde premium para clientes e equipe",
    description: "Caneca de cerâmica personalizada com a marca Ademicon. Perfeita para presentear clientes especiais, parceiros ou fortalecer o espírito de equipe. Acabamento de alta qualidade e durabilidade.",
    image: canecaAdemiconImg,
    prices: [
      { qty: "1 unidade", price: "R$ 35,00" },
    ],
  },
  {
    id: "kit-cracha-cordao",
    title: "Kit Crachá + Cordão Ademicon",
    subtitle: "Personalizado e profissional para sua equipe",
    description: "Garanta mais profissionalismo e padronização com o Kit Crachá + Cordão Ademicon. Crachá com impressão nítida e acabamento resistente + cordão personalizado com mosquete em metal prateado. Ideal para licenciados, consultores, eventos, reuniões e atendimento ao cliente.",
    image: kitCrachaCordaoImg,
    prices: [
      { qty: "1 kit", price: "R$ 45,00" },
      { qty: "10 kits", price: "R$ 400,00", best: true, label: "melhor custo" },
      { qty: "25 kits", price: "R$ 950,00" },
      { qty: "50 kits", price: "R$ 1.800,00" },
    ],
  },
];

function ProdutosAdemicon() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Materiais Gráficos Ademicon",
          description:
            "Materiais gráficos personalizados para consultores Ademicon: crachás, cordões, folders, canetas e brindes. Produtos prontos para uso com a identidade visual Ademicon.",
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
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center pt-24 pb-12 sm:pt-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#2C2C2C]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
            <i className="ri-star-fill text-[#D4AF37]"></i>
            <span className="text-[#D4AF37] text-sm font-medium">Setor Exclusivo Ademicon</span>
          </div>

          <h1 className="text-[26px] sm:text-4xl lg:text-[52px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
            Materiais gráficos personalizados para consultores{" "}
            <span className="text-[#D4AF37]">Ademicon</span>: crachás, cordões, folders, canetas e brindes
          </h1>
          <h2 className="text-sm sm:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
            Produtos prontos para uso, personalizados com o nome, endereço e identidade da sua unidade Ademicon, garantindo mais profissionalismo no atendimento
          </h2>

          <a
            href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/a5a80c14-d204-40a3-8d33-da6c0d9ec056"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-white mb-4">
              Produtos <span className="text-[#D4AF37]">Exclusivos</span> Ademicon
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
              Todos os materiais com artes prontas e personalizáveis com os dados da sua unidade
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {produtosAdemicon.map((produto, index) => (
              <div
                key={produto.id}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#1A1A1A]"></div>
                  </div>

                  {/* Content - 3 columns */}
                  <div className={`lg:col-span-3 p-6 sm:p-8 ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                      {produto.title}
                    </h3>
                    <p className="text-[#D4AF37] font-medium text-sm mb-3">{produto.subtitle}</p>
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
                              <i className="ri-check-line text-[#D4AF37] text-sm"></i>
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Prices */}
                      <div className="bg-[#0D0D0D]/50 rounded-xl p-4">
                        <h4 className="text-xs font-semibold text-[#D4AF37] mb-3 uppercase tracking-wide">
                          Tabela de Preços
                        </h4>
                        <div className={`grid ${produto.prices.length > 4 ? "grid-cols-2 gap-x-3 gap-y-2" : "grid-cols-1 gap-2"}`}>
                          {produto.prices.map((item) => (
                            <div
                              key={item.qty}
                              className={`flex justify-between items-center py-1.5 px-2.5 rounded-md text-xs ${
                                item.best
                                  ? "bg-[#D4AF37]/20 border border-[#D4AF37]/30"
                                  : "bg-[#252525]/50"
                              }`}
                            >
                              <span className={`${item.best ? "text-[#D4AF37] font-medium" : "text-white/70"}`}>
                                {item.best && <i className="ri-star-fill mr-1 text-[10px]"></i>}
                                {item.qty.replace(" unidades", "un").replace(" Unidades", "un")}
                              </span>
                              <span className={`font-bold ${item.best ? "text-[#D4AF37]" : "text-white"}`}>
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/a5a80c14-d204-40a3-8d33-da6c0d9ec056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
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
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] rounded-2xl p-8 sm:p-12 border border-[#D4AF37]/20">
            <i className="ri-gift-line text-4xl sm:text-5xl text-[#D4AF37] mb-4"></i>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Mais Produtos em Breve
            </h3>
            <p className="text-sm sm:text-base text-white/60 mb-6 max-w-xl mx-auto">
              Estamos preparando mais opções de crachás, cordões e kits personalizados para consultores Ademicon.
              Entre em contato para saber mais!
            </p>
            <a
              href="https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/a5a80c14-d204-40a3-8d33-da6c0d9ec056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-full font-medium hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
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

export default ProdutosAdemicon;
