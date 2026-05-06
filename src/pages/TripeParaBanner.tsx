import { Link } from "react-router-dom";
import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";

const features = [
  { icon: "ri-arrow-up-down-line", label: "Altura ajustável até 2m" },
  { icon: "ri-flight-takeoff-line", label: "Leve e fácil de transportar" },
  { icon: "ri-tools-line", label: "Montagem rápida" },
  { icon: "ri-megaphone-line", label: "Ideal para eventos e feiras" },
];

const WHATSAPP_URL =
  "https://wa.me/+554130240080?text=Gostaria%20de%20comprar%20Trip%C3%A9%20para%20Banner";

function TripeParaBanner() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Tripé para Banner 2 Metros",
          description:
            "Tripé para banner de 2 metros. Estrutura leve, resistente e de montagem rápida. Ideal para eventos, lojas, feiras e promoções em Curitiba.",
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
            Tripé para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
              Banner 2 Metros
            </span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Destaque sua marca com praticidade! Estrutura leve, resistente e
            fácil de montar — perfeita para eventos, lojas, feiras e promoções.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Compre pelo WhatsApp
          </a>
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
                  <i className={`${feature.icon} text-xl sm:text-2xl text-[#0A0A0A]`}></i>
                </div>
                <p className="text-[13px] sm:text-[15px] font-medium text-white">
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-5 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              A estrutura ideal para seu banner
            </h2>

            <ul className="space-y-4 mb-8">
              {[
                "Altura ajustável até 2 metros",
                "Estrutura leve e fácil de transportar",
                "Montagem rápida, sem complicação",
                "Ideal para banners promocionais e institucionais",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BF953F] via-[#D4AF37] to-[#AA771C]">
                    <i className="ri-check-line text-[11px] text-[#0A0A0A] font-bold"></i>
                  </span>
                  <span className="text-[14px] sm:text-[16px] text-white/80 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[14px] sm:text-[16px] text-white/60 leading-relaxed mb-8">
              Leve seu banner para qualquer lugar e monte em poucos segundos!
              O tripé de 2 metros garante que sua comunicação fique sempre
              visível e profissional — seja em feiras, eventos corporativos,
              lojas ou pontos de venda.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3 rounded-xl text-[15px] shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              Compre pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-white mb-4 sm:mb-6">
            Fale com a gente e garanta o seu agora mesmo!
          </h2>
          <p className="text-sm sm:text-lg text-white/70 mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato pelo WhatsApp e adquira seu tripé para banner com
            atendimento rápido e personalizado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.5)] transition-all duration-300"
          >
            <i className="ri-whatsapp-line text-xl"></i>
            Compre pelo WhatsApp
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

export default TripeParaBanner;
