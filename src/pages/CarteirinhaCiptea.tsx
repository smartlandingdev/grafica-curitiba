import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import ciptea from "../assets/produtos/ciptea.jpg";

// Features Data
const features = [
  { icon: "ri-shield-check-line", label: "Material em PVC Resistente" },
  { icon: "ri-palette-line", label: "Personalização Completa" },
  { icon: "ri-heart-pulse-line", label: "Conforme Lei 13.977/2020" },
  { icon: "ri-timer-line", label: "Produção Rápida" },
];

// Benefits Data
const benefits = [
  {
    title: "Identificação Imediata",
    description:
      "A carteirinha CIPTEA permite que a pessoa com Transtorno do Espectro Autista seja identificada de forma rápida e respeitosa em qualquer ambiente.",
  },
  {
    title: "Atendimento Prioritário",
    description:
      "Garante o direito ao atendimento prioritário em estabelecimentos públicos e privados, conforme previsto em lei.",
  },
  {
    title: "Acesso a Direitos",
    description:
      "Facilita o acesso a benefícios, serviços especializados e políticas públicas destinadas a pessoas no espectro autista.",
  },
  {
    title: "Segurança e Tranquilidade",
    description:
      "Em situações de emergência ou necessidade, a carteirinha fornece informações essenciais para o atendimento adequado.",
  },
];

// Personalization Steps
const personalizationSteps = [
  {
    step: 1,
    icon: "ri-file-text-line",
    title: "Envie os Dados",
    description:
      "Envie as informações necessárias: nome completo, foto, data de nascimento e dados do responsável.",
  },
  {
    step: 2,
    icon: "ri-layout-line",
    title: "Criação do Layout",
    description:
      "Nossa equipe cria o layout personalizado da carteirinha seguindo o padrão oficial estabelecido.",
  },
  {
    step: 3,
    icon: "ri-checkbox-circle-line",
    title: "Aprovação da Prova",
    description:
      "Enviamos a prova digital para sua aprovação antes da impressão final.",
  },
  {
    step: 4,
    icon: "ri-printer-line",
    title: "Impressão e Entrega",
    description:
      "Impressão em PVC de alta qualidade com acabamento profissional e entrega rápida.",
  },
];

function CarteirinhaCiptea() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Carteirinha CIPTEA Personalizada em Curitiba",
          description:
            "Carteirinha CIPTEA personalizada em PVC para identificação de pessoas com Transtorno do Espectro Autista em Curitiba. Conforme Lei 13.977/2020 (Lei Romeo Mion). Material resistente, impressão profissional. Orçamento (41) 3024-0080.",
          brand: {
            "@type": "Organization",
            name: "Gráfica Curitiba",
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "18.00",
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
            Impressão de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">CIPTEA</span> em PVC | Carteira Autista Personalizada Curitiba
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            Transforme sua CIPTEA digital em cartão resistente e profissional em até 48h
          </p>
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

      {/* Kits de Preço */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Kit 1 - Só o Cartão */}
            <div className="bg-gradient-to-b from-[#1A1A1A] to-[#252525] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-[#D4AF37] font-bold text-base sm:text-lg mb-2">
                Cartão em PVC
              </p>
              <p className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl mb-3">
                R$ 18,00
              </p>
              <p className="text-white/60 text-sm mb-4">
                Carteirinha CIPTEA em PVC resistente
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de comprar a Carteirinha CIPTEA - Cartão em PVC R$18,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Pedir pelo WhatsApp</span>
              </a>
            </div>

            {/* Kit 2 - Cartão + Capa */}
            <div className="bg-gradient-to-b from-[#1A1A1A] to-[#252525] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-[#D4AF37] font-bold text-base sm:text-lg mb-2">
                Cartão + Capa Protetora
              </p>
              <p className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl mb-3">
                R$ 20,00
              </p>
              <p className="text-white/60 text-sm mb-4">
                Cartão em PVC + Capa Protetora
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de comprar a Carteirinha CIPTEA - Cartão + Capa Protetora R$20,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Pedir pelo WhatsApp</span>
              </a>
            </div>

            {/* Kit 3 - Completo */}
            <div className="bg-[#D4AF37] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-xs font-bold px-3 py-1 rounded-full">
                MAIS VENDIDO
              </div>
              <p className="text-white font-bold text-base sm:text-lg mb-2 mt-2">
                Kit Completo
              </p>
              <p className="text-white font-extrabold text-xl sm:text-2xl lg:text-3xl mb-3">
                R$ 45,00
              </p>
              <p className="text-white/90 text-sm mb-4">
                Cartão em PVC + Capa Protetora + Cordão Autismo
              </p>
              <a
                href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de comprar a Carteirinha CIPTEA - Kit Completo R$45,00")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] text-[#D4AF37] px-4 py-2 rounded-lg text-sm font-bold hover:bg-gradient-to-b from-[#1A1A1A] to-[#252525] transition-all duration-300 w-full"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                <span>Pedir pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is CIPTEA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
                O Que É a Carteirinha CIPTEA?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Transforme sua CIPTEA (Carteira de Identificação da Pessoa com Transtorno do Espectro Autista) em um cartão PVC resistente, durável e prático para o dia a dia.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4 sm:mb-6">
                Na Gráfica Curitiba, você pode solicitar a impressão da CIPTEA em PVC, garantindo mais segurança, organização e facilidade no uso em escolas, filas preferenciais, viagens e atendimentos.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Diferente do papel, o cartão em PVC não rasga, não amassa e possui acabamento profissional, ideal para quem precisa utilizar a carteira com frequência.
              </p>
            </div>
            <div className="flex flex-col">
              <div
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
                style={{
                  backgroundImage: `url("${ciptea}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-3 sm:mb-4">
              Benefícios da Carteirinha CIPTEA
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Conheça as principais vantagens de possuir a Carteira de
              Identificação da Pessoa com Transtorno do Espectro Autista.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-lg p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Process Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-3 sm:mb-4">
              Como Personalizar Sua Carteirinha CIPTEA
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Processo simples e rápido para você ter a carteirinha em mãos com
              qualidade profissional.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {personalizationSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#D4AF37] text-white text-lg sm:text-xl lg:text-2xl font-bold rounded-full mb-3 sm:mb-5 shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#252525] rounded-full mb-3 sm:mb-5">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37]`}
                    ></i>
                  </div>
                  <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-white mb-1 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-white/60 max-w-[200px] sm:max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Voltar para página inicial</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default CarteirinhaCiptea;
