import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";

// Features Data
const features = [
  { icon: "ri-shield-check-line", label: "Material Resistente" },
  { icon: "ri-palette-line", label: "Personalização Total" },
  { icon: "ri-lock-line", label: "Controle de Acesso" },
  { icon: "ri-timer-line", label: "Produção Rápida" },
];

// Product Options Data
const productOptions = [
  {
    title: "Pulseira Tyvek",
    description:
      "Leve, resistente à água e ideal para eventos de curta duração como shows e festas",
  },
  {
    title: "Pulseira Vinil",
    description:
      "Durável e confortável, perfeita para eventos de vários dias e parques temáticos",
  },
  {
    title: "Pulseira Tecido",
    description:
      "Personalização premium com impressão sublimática, ideal para festivais e congressos",
  },
  {
    title: "Pulseira Identificação",
    description:
      "Para hospitais, clínicas e empresas que precisam de identificação segura e profissional",
  },
];

// Applications Data
const applications = [
  {
    icon: "ri-music-2-line",
    title: "Eventos e Festas",
    description:
      "Shows, festivais, baladas e confraternizações com controle seguro de acesso e identificação rápida dos participantes.",
  },
  {
    icon: "ri-hospital-line",
    title: "Hospitais e Clínicas",
    description:
      "Pulseiras de identificação para pacientes, acompanhantes e visitantes com dados legíveis e material hipoalergênico.",
  },
  {
    icon: "ri-building-2-line",
    title: "Empresas e Indústrias",
    description:
      "Controle de acesso de funcionários, terceirizados e visitantes em áreas restritas e ambientes corporativos.",
  },
  {
    icon: "ri-door-open-line",
    title: "Controle de Acesso",
    description:
      "Gestão eficiente de entrada em feiras, congressos, parques e qualquer local que exija identificação visual imediata.",
  },
];

// Differentials Data
const differentials = [
  {
    icon: "ri-printer-line",
    title: "Impressão Profissional",
    description:
      "Equipamentos modernos que garantem cores vibrantes e impressão nítida em todas as pulseiras.",
  },
  {
    icon: "ri-shapes-line",
    title: "Diversos Materiais",
    description:
      "Tyvek, vinil, tecido e mais opções para atender diferentes tipos de evento e necessidade.",
  },
  {
    icon: "ri-truck-line",
    title: "Entrega Rápida",
    description:
      "Produção ágil em Curitiba com envio para todo o Brasil. Prazo reduzido para pedidos urgentes.",
  },
  {
    icon: "ri-hand-heart-line",
    title: "Atendimento Personalizado",
    description:
      "Equipe especializada para ajudar na escolha do material, layout e quantidade ideal para seu projeto.",
  },
];

function PulseirasEventos() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pulseiras para Eventos e Identificação em Curitiba",
          description:
            "Pulseiras personalizadas para eventos, festas, hospitais, empresas e controle de acesso em Curitiba. Material resistente, impressão profissional e produção rápida. Tyvek, vinil e tecido. Orçamento (41) 3024-0080.",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Pulseiras para Eventos e Identificação em Curitiba
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Pulseiras personalizadas para shows, festas, hospitais, empresas e
            controle de acesso. Produção profissional com entrega rápida em todo
            o Brasil.
          </p>
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

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-20">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
                Pulseiras Personalizadas para Todos os Tipos de Evento
              </h2>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Na Gráfica Curitiba, produzimos pulseiras personalizadas para
                eventos de todos os portes. Desde shows e festivais até
                hospitais e ambientes corporativos, oferecemos soluções
                completas de identificação e controle de acesso.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Trabalhamos com os melhores materiais do mercado — Tyvek, vinil
                e tecido — para garantir resistência, conforto e segurança.
                Todas as pulseiras são totalmente personalizáveis com sua marca,
                logo ou informação necessária.
              </p>
              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Atendemos pedidos de pequenas e grandes quantidades com produção
                rápida em Curitiba e envio para todo o Brasil. Solicite seu
                orçamento sem compromisso e receba atendimento especializado.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${fundosProdutosImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-6 sm:mb-10 text-center">
              Tipos de Pulseiras Disponíveis
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {productOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white border border-[#E5E5E5] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300"
                >
                  <h4 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                    {option.title}
                  </h4>
                  <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">
              Onde Utilizar Nossas Pulseiras
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed px-2">
              Soluções de identificação e controle de acesso para os mais
              diversos segmentos e necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="bg-white rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#FFF4F0] rounded-full flex-shrink-0">
                  <i
                    className={`${app.icon} text-xl sm:text-2xl text-[#FF6B35]`}
                  ></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1A1A1A] mb-1">
                    {app.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-[#666] leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#1A1A1A] mb-3 sm:mb-4">
              Por Que Escolher a Gráfica Curitiba?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#666] max-w-3xl mx-auto leading-relaxed px-2">
              Qualidade, agilidade e atendimento personalizado para entregar
              pulseiras perfeitas para o seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E5E5E5] rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-lg hover:border-[#FF6B35] transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#FFF4F0] rounded-full mx-auto mb-3 sm:mb-4">
                  <i
                    className={`${item.icon} text-xl sm:text-2xl text-[#FF6B35]`}
                  ></i>
                </div>
                <h4 className="text-[14px] sm:text-[18px] font-bold text-[#1A1A1A] mb-2 sm:mb-3">
                  {item.title}
                </h4>
                <p className="text-[12px] sm:text-[14px] text-[#555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Precisa de Pulseiras para Seu Evento?
          </h2>
          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para
            pulseiras de identificação e controle de acesso em Curitiba.
          </p>

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

export default PulseirasEventos;
