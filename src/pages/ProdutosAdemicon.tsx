import { Link } from "react-router-dom";

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
    title: "Panfletos 10x14",
    subtitle: "Tamanho A6 – 10x14 cm",
    description: "Panfletos personalizados para consultores Ademicon. Formato compacto ideal para distribuição em eventos e atendimentos.",
    image: "/assets/produtos/panfletos.jpeg",
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
    title: "Panfletos 14x20",
    subtitle: "Tamanho A5 – 14x20 cm",
    description: "Panfletos com mais espaço para informações. Ideal para apresentar os serviços da Ademicon de forma detalhada.",
    image: "/assets/produtos/panfletos.jpeg",
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
    image: "/assets/produtos/folder.jpeg",
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
    id: "canetas",
    title: "Canetas Metal Classic",
    subtitle: "Brindes premium para sua equipe",
    description: "Canetas de metal personalizadas com a marca Ademicon. Material premium que transmite profissionalismo e qualidade em cada atendimento.",
    image: "/assets/produtos/caneta-ademicon.jpeg",
    prices: [
      { qty: "100 unidades", price: "R$ 540,00" },
    ],
  },
];

// Features Data
const features = [
  { icon: "ri-verified-badge-line", label: "Artes Prontas" },
  { icon: "ri-user-star-line", label: "Personalização" },
  { icon: "ri-shield-check-line", label: "Padrão Ademicon" },
  { icon: "ri-truck-line", label: "Entrega Rápida" },
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
            href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido de materiais gráficos para Ademicon.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 sm:w-18 sm:h-18 flex items-center justify-center bg-gradient-to-br from-[#D4AF37] to-[#C9A227] rounded-full mb-3 sm:mb-4 shadow-[0_4px_16px_rgba(212,175,55,0.3)]">
                  <i className={`${feature.icon} text-xl sm:text-2xl text-[#0D0D0D]`}></i>
                </div>
                <p className="text-[13px] sm:text-[15px] font-medium text-white">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
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
                className={`bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/50/40 transition-all duration-500 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={`relative h-[250px] sm:h-[350px] lg:h-[400px] ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
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

                  {/* Content */}
                  <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "lg:[direction:ltr]" : ""}`}>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {produto.title}
                    </h3>
                    <p className="text-[#D4AF37] font-medium mb-4">{produto.subtitle}</p>
                    <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
                      {produto.description}
                    </p>

                    {/* Specs if available */}
                    {produto.specs && (
                      <div className="mb-6 space-y-2">
                        {produto.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                            <i className="ri-check-line text-[#D4AF37]"></i>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Prices */}
                    <div className="bg-[#0D0D0D]/50 rounded-xl p-4 sm:p-6 mb-6">
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-4 uppercase tracking-wide">
                        Tabela de Preços
                      </h4>
                      <div className="space-y-3">
                        {produto.prices.map((item) => (
                          <div
                            key={item.qty}
                            className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                              item.best
                                ? "bg-[#D4AF37]/20 border border-[#D4AF37]/30"
                                : "bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]/5"
                            }`}
                          >
                            <span className={`text-sm ${item.best ? "text-[#D4AF37] font-medium" : "text-white/70"}`}>
                              {item.best && <i className="ri-star-fill mr-2"></i>}
                              {item.qty}
                            </span>
                            <div className="text-right">
                              <span className={`font-bold ${item.best ? "text-[#D4AF37]" : "text-white"}`}>
                                {item.price}
                              </span>
                              {item.best && item.label && (
                                <span className="block text-xs text-[#D4AF37]/80">({item.label})</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Olá! Gostaria de fazer pedido de ${produto.title} para Ademicon.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] px-6 py-3 rounded-full text-sm sm:text-base font-bold hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300"
                    >
                      <i className="ri-whatsapp-line text-lg"></i>
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
              href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Gostaria de saber sobre novos produtos para Ademicon.")}`}
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#2A2A2A] via-[#333333] to-[#2A2A2A] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#D4AF37]/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-white mb-4 sm:mb-6 leading-tight">
            Eleve o Profissionalismo da Sua Unidade <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF37]">Ademicon</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Materiais de alta qualidade que transmitem credibilidade e fortalecem a imagem da sua unidade
          </p>
          <a
            href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Sou consultor Ademicon e gostaria de fazer um pedido de materiais gráficos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C9A227] text-[#0D0D0D] px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_24px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_32px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300"
          >
            <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
            <span>Falar com Especialista</span>
          </a>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all duration-300"
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

export default ProdutosAdemicon;
