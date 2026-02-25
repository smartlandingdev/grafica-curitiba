import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";
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
            price: "45.00",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Impressão de Carteirinha CIPTEA em PVC Personalizada.
          </h1>
          <h5 className="text-[15px] sm:text-2xl lg:text-[28px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Entrega em todo o Paraná
          </h5>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Facilite a identificação com carteirinha CIPTEA em PVC resistente e
            profissional. Acompanha cordão. Ideal para escolas, passeios e
            atendimento prioritário. Produção rápida em até 48h e com Envio para
            todo Paraná.
          </p>
          <div className="block">
            <CTAButton type="ciptea" size="lg" id="btn-whatsapp-orcamento" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-[#FFF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-[#FF6B35] rounded-full mb-2 sm:mb-3">
                  <i
                    className={`${feature.icon} text-xl sm:text-2xl text-white`}
                  ></i>
                </div>
                <p className="text-[12px] sm:text-[15px] font-medium text-[#1A1A1A]">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is CIPTEA Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
                O Que É a Carteirinha CIPTEA?
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                A CIPTEA — Carteira de Identificação da Pessoa com Transtorno do
                Espectro Autista — foi criada pela{" "}
                <strong>Lei 13.977/2020</strong>, também conhecida como{" "}
                <strong>Lei Romeo Mion</strong>. Ela garante à pessoa autista
                uma identificação oficial que facilita o acesso a direitos e
                atendimento prioritário.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                A carteirinha contém informações essenciais como nome completo,
                foto, data de nascimento, dados do responsável e o CID
                (Classificação Internacional de Doenças), sendo um documento
                reconhecido nacionalmente.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Na Gráfica Curitiba, produzimos a Carteirinha CIPTEA em{" "}
                <strong>PVC de alta qualidade</strong>, com impressão
                profissional e acabamento durável. Atendemos famílias,
                associações e órgãos públicos em Curitiba e em todo o Brasil.
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
              <div className="bg-[#FFF4F0] rounded-xl sm:rounded-2xl px-6 py-4 mt-4 text-center shadow-lg">
                <p className="text-[#FF6B35] font-bold text-base sm:text-lg mb-1">
                  Kit Completo apenas
                </p>
                <p className="text-[#1A1A1A] font-extrabold text-2xl sm:text-3xl mb-2">
                  R$ 45,00
                </p>
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent("Gostaria de comprar a Carteirinha CIPTEA")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  <span>Encomende pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">
              Benefícios da Carteirinha CIPTEA
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed px-2">
              Conheça as principais vantagens de possuir a Carteira de
              Identificação da Pessoa com Transtorno do Espectro Autista.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#666] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Process Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">
              Como Personalizar Sua Carteirinha CIPTEA
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed px-2">
              Processo simples e rápido para você ter a carteirinha em mãos com
              qualidade profissional.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {personalizationSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#FF6B35] text-white text-lg sm:text-xl lg:text-2xl font-bold rounded-full mb-3 sm:mb-5 shadow-lg">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-[#FFF4F0] rounded-full mb-3 sm:mb-5">
                    <i
                      className={`${item.icon} text-2xl sm:text-3xl lg:text-4xl text-[#FF6B35]`}
                    ></i>
                  </div>
                  <h3 className="text-[14px] sm:text-[16px] lg:text-[20px] font-bold text-[#1A1A1A] mb-1 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-[#666] max-w-[200px] sm:max-w-[240px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Solicite Sua Carteirinha CIPTEA
          </h2>
          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para a
            Carteirinha CIPTEA em PVC com impressão profissional em Curitiba.
          </p>
          <CTAButton type="ciptea" size="lg" id="btn-whatsapp-orcamento" />

          <div className="mt-6 sm:mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#FF6B35] font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 cursor-pointer"
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

export default CarteirinhaCiptea;
