import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import pulseiras from "../assets/produtos/pulseira-festa-personalizada.png";

const features = [
  { icon: "ri-shield-check-line", label: "Material Resistente" },
  { icon: "ri-palette-line", label: "9 Cores Disponíveis" },
  { icon: "ri-lock-line", label: "Controle de Acesso" },
  { icon: "ri-timer-line", label: "Entrega em 48h" },
];

const colors = [
  { name: "Branca", bg: "#FFFFFF", text: "#1A1A1A" },
  { name: "Cinza", bg: "#9CA3AF", text: "#1A1A1A" },
  { name: "Pink", bg: "#EC4899", text: "#FFFFFF" },
  { name: "Vermelha", bg: "#EF4444", text: "#FFFFFF" },
  { name: "Roxo", bg: "#7C3AED", text: "#FFFFFF" },
  { name: "Verde", bg: "#22C55E", text: "#FFFFFF" },
  { name: "Azul", bg: "#3B82F6", text: "#FFFFFF" },
  { name: "Amarelo", bg: "#EAB308", text: "#1A1A1A" },
  { name: "Laranja", bg: "#F97316", text: "#FFFFFF" },
];

const pricing = [
  { qty: "50 unidades", price: "R$ 45,00" },
  { qty: "100 unidades", price: "R$ 60,00" },
  { qty: "200 unidades", price: "R$ 120,00" },
  { qty: "300 unidades", price: "R$ 175,00" },
  { qty: "500 unidades", price: "R$ 275,00" },
  { qty: "1.000 unidades", price: "R$ 445,00" },
];

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

function PulseirasEventos() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pulseiras para Eventos e Identificação",
          description:
            "Pulseiras personalizadas para eventos, festas, hospitais, empresas e controle de acesso em Curitiba. Material resistente, impressão profissional e produção rápida. Tyvek e vinil. Orçamento (41) 3024-0080.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            seller: { "@type": "Organization", name: "Gráfica Curitiba" },
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
        className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
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
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
            Pulseiras de Festa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
              Personalizadas
            </span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            Ideais para controle de entrada em eventos, festas, bares e baladas.
            Resistentes, com impressão personalizada em preto.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C] rounded-full shadow-[0_4px_20px_rgba(212,175,55,0.4)] mb-2 sm:mb-3">
                  <i className={`${feature.icon} text-xl sm:text-2xl text-[#0A0A0A]`}></i>
                </div>
                <p className="text-[12px] sm:text-[15px] font-medium text-white">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section — logo após os ícones */}
      <section className="py-10 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1E1E1E] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-[14px] sm:text-[16px] text-white/80 leading-relaxed mb-2">
              Trabalhamos com <strong className="text-white">pulseiras de festa personalizadas</strong>, ideais para controle de entrada em eventos, festas, bares e baladas. Resistentes e já vão <strong className="text-white">com impressão em PRETO personalizada</strong> (nome do evento, data ou marca).
            </p>
            <p className="text-[13px] sm:text-[14px] text-[#D4AF37] font-semibold mt-3">
              ⏱ Produção rápida: em até 48 horas.
            </p>
          </div>

          {/* Cores disponíveis */}
          <div className="mb-8">
            <h2 className="text-[15px] sm:text-[17px] font-bold text-white mb-4">
              Cores disponíveis
            </h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <span
                  key={c.name}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold border border-white/10"
                  style={{ backgroundColor: c.bg, color: c.text }}
                >
                  {c.name}
                </span>
              ))}
            </div>
            <p className="text-[12px] sm:text-[13px] text-white/50 mt-3">
              📦 Pedido mínimo: 50 unidades da mesma cor.
            </p>
          </div>

          {/* Tabela de preços */}
          <div>
            <h2 className="text-[15px] sm:text-[17px] font-bold text-white mb-4">
              Valores por quantidade
            </h2>
            <div className="space-y-2">
              {pricing.map((item) => (
                <div
                  key={item.qty}
                  className="flex items-center justify-between gap-2 sm:gap-4 bg-gradient-to-r from-[#2A2A2A] to-[#1E1E1E] border border-[#D4AF37]/15 rounded-xl px-4 sm:px-6 py-3 hover:border-[#D4AF37]/40 transition-all duration-200"
                >
                  <span className="text-[14px] sm:text-[15px] text-white/80 font-medium">
                    {item.qty}
                  </span>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-[15px] sm:text-[17px] font-bold text-[#D4AF37]">
                      {item.price}
                    </span>
                    <a
                      href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Olá! Quero comprar pulseiras de festa personalizadas — ${item.qty}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3 py-1.5 rounded-lg text-[10px] sm:text-[12px] font-semibold transition-all duration-300"
                    >
                      <i className="ri-whatsapp-line text-sm"></i>
                      Comprar
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white mb-3 sm:mb-4">
              Onde Utilizar Nossas Pulseiras
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-3xl mx-auto leading-relaxed px-2">
              Soluções de identificação e controle de acesso para os mais diversos segmentos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-b from-[#1A1A1A] to-[#252525] rounded-full flex-shrink-0">
                  <i className={`${app.icon} text-xl sm:text-2xl text-[#D4AF37]`}></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-[14px] sm:text-[16px] font-bold text-white mb-1">{app.title}</h3>
                  <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Imagem + Texto */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Qualidade e agilidade para seu evento
              </h2>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed mb-4">
                Atendemos pedidos de pequenas e grandes quantidades com produção
                rápida em Curitiba e envio para todo o Brasil. Todas as
                pulseiras são personalizáveis com nome do evento, data ou marca.
              </p>
              <p className="text-[14px] sm:text-[16px] text-white/70 leading-relaxed">
                Perfeitas para shows, festas, baladas, bares e qualquer evento
                que precise de controle de entrada seguro e visual.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${pulseiras}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Precisa de Pulseiras para Seu Evento?
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e garanta suas pulseiras personalizadas com entrega em até 48 horas.
          </p>
          <a
            href={`https://wa.me/+554130240080?text=${encodeURIComponent("Olá! Quero comprar pulseiras de festa personalizadas")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Falar no WhatsApp
          </a>
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

export default PulseirasEventos;
