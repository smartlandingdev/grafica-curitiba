import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import cordaoPromoImg from "../assets/produtos/cordao-promo.jpeg";
import { CTAButton } from "../components";

// Preços dos cordões
const pricingCategories = [
  {
    title: "Argola e Jacaré",
    icon: "ri-links-line",
    image: "/assets/cordao.png",
    prices: [
      { qty: "10 unid", price: "R$ 79,00" },
      { qty: "20 unid", price: "R$ 156,00" },
      { qty: "30 unid", price: "R$ 234,00" },
      { qty: "40 unid", price: "R$ 312,00" },
      { qty: "50 unid", price: "R$ 345,00", best: true },
      { qty: "100 unid", price: "R$ 699,00" },
    ],
  },
  {
    title: "Com 1 Mosquete",
    icon: "ri-attachment-line",
    image: "/assets/cordao3.png",
    prices: [
      { qty: "10 unid", price: "R$ 99,00" },
      { qty: "20 unid", price: "R$ 198,00" },
      { qty: "30 unid", price: "R$ 297,00" },
      { qty: "40 unid", price: "R$ 396,00" },
      { qty: "50 unid", price: "R$ 445,00", best: true },
      { qty: "100 unid", price: "R$ 899,00" },
    ],
  },
  {
    title: "Com 2 Mosquetes",
    icon: "ri-attachment-2",
    image: "/assets/cordao3.png",
    prices: [
      { qty: "10 unid", price: "R$ 119,00" },
      { qty: "20 unid", price: "R$ 238,00" },
      { qty: "30 unid", price: "R$ 297,00" },
      { qty: "40 unid", price: "R$ 476,00" },
      { qty: "50 unid", price: "R$ 595,00", best: true },
      { qty: "100 unid", price: "R$ 1.190,00" },
    ],
  },
  {
    title: "1 Mosquete + Trava de Segurança",
    icon: "ri-lock-line",
    image: "/assets/cordao2.png",
    prices: [
      { qty: "10 unid", price: "R$ 119,00" },
      { qty: "20 unid", price: "R$ 238,00" },
      { qty: "30 unid", price: "R$ 297,00" },
      { qty: "40 unid", price: "R$ 476,00" },
      { qty: "50 unid", price: "R$ 595,00", best: true },
      { qty: "100 unid", price: "R$ 1.190,00" },
    ],
  },
];

const features = [
  { icon: "ri-t-shirt-line", label: "Diversos Materiais" },
  { icon: "ri-paint-brush-line", label: "Impressão Sublimática" },
  { icon: "ri-ruler-line", label: "Medida de 20mmx900mm " },
  { icon: "ri-building-line", label: "Ideal para Empresas" },
];

const types = [
  {
    title: "Cordão Sublimado",
    description: "Impressão colorida de alta definição em tecido de poliéster",
  },
  {
    title: "Cordão Liso",
    description: "Cores sólidas com alta durabilidade e resistência",
  },
  {
    title: "Cordão com Presilha",
    description: "Sistema de engate rápido para maior praticidade",
  },
  {
    title: "Cordão Retrátil",
    description: "Mecanismo retrátil para fácil acesso ao crachá",
  },
];

function CordoesPersonalizado() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cordões Personalizados",
          description:
            "Cordões personalizados para crachás. Impressão sublimática, diversas cores e materiais. Ideal para empresas e eventos.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60"></div><div className="absolute inset-0 pointer-events-none"><div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Cordões <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Personalizados</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Cordões para crachás com impressão personalizada. Sublimação de alta
            qualidade, diversas cores e materiais para empresas e eventos.
          </p>
          <CTAButton type="cordao" size="lg" />
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
                Cordões para Crachás Corporativos
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Os cordões personalizados para crachá são essenciais para
                empresas, eventos e equipes que precisam de identificação
                profissional com qualidade. Produzidos em poliéster acetinado e
                impressão sublimada de alta definição, garantem cores vivas,
                durabilidade e excelente acabamento.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Fabricamos no tamanho padrão 900mm x 20mm, com diversas opções
                de engates: mosquete, jacaré, argola, retrátil e presilha de
                segurança.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Ideais para eventos corporativos, feiras, congressos, escolas,
                empresas e credenciais de acesso. Personalize com sua marca e
                receba com produção rápida e entrega para todo o Brasil.
              </p>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]">
              <img
                src={cordaoPromoImg}
                alt="Cordões personalizados para crachá"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-10 text-center">
              Tipos de Cordões Disponíveis
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {types.map((type) => (
                <div
                  key={type.title}
                  className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                    {type.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                    {type.description}
                  </p>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para ${type.title}`)}`}
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

      {/* Seção de Preços */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4">
              Cordão para Crachá Personalizado
            </h2>
            <p className="text-lg sm:text-xl text-white/70 mb-4">
              900mm x 20mm
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium">
              <i className="ri-error-warning-line text-lg"></i>
              <span>Produzimos somente em múltiplos de 10 unidades (10, 20, 30, 40…)</span>
            </div>
            <p className="text-xs text-white/40 mt-2">
              NÃO realizamos produção fracionada (ex.: 4, 8 unidades)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {pricingCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-[#D4AF37] px-6 py-4 flex items-center gap-3">
                  <i className={`${category.icon} text-2xl text-white`}></i>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-center mb-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-24 sm:h-32 w-auto object-contain"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.prices.map((item) => (
                      <div
                        key={item.qty}
                        className={`relative rounded-lg p-3 text-center transition-all duration-300 ${
                          item.best
                            ? "bg-[#D4AF37] text-white shadow-md"
                            : "bg-[#2A2A2A] hover:bg-[#333333]"
                        }`}
                      >
                        {item.best && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            MAIS PEDIDO
                          </span>
                        )}
                        <p className={`text-xs mb-1 ${item.best ? "text-white/90 mt-1" : "text-white/60"}`}>
                          {item.qty}
                        </p>
                        <p className={`text-lg sm:text-xl font-bold ${item.best ? "text-white" : "text-white"}`}>
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de fazer pedido de Cordão Personalizado - ${category.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300"
                  >
                    <i className="ri-whatsapp-line text-lg"></i>
                    <span>Fazer Pedido pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Veja Como Fica o Nosso Cordão Personalizado
            </h2>
            <p className="text-sm sm:text-base text-white/70">
              Qualidade profissional com impressão sublimática de alta definição
            </p>
          </div>
          <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/MgF23j6RYAM"
              title="Cordão Personalizado - Gráfica Curitiba"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Solicite Seu Orçamento de Cordões
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato e personalize os cordões da sua empresa com
            qualidade profissional e preços competitivos.
          </p>
          <CTAButton type="cordao" size="lg" />
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

export default CordoesPersonalizado;
