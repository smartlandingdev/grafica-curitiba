import cartaoVisitaImg from "../assets/produtos/cartao-visita-novo.jpeg";
import { CTAButton } from "../components";

const WPP_BASE = "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1";

const fotoOptions = [
  { qty: "100 unidades", price: "R$ 65,00", msg: "Olá! Quero o Cartão de Visita Fotográfico — 100 unidades por R$ 65,00" },
  { qty: "250 unidades", price: "R$ 75,00", msg: "Olá! Quero o Cartão de Visita Fotográfico — 250 unidades por R$ 75,00" },
  { qty: "500 unidades", price: "R$ 85,00", msg: "Olá! Quero o Cartão de Visita Fotográfico — 500 unidades por R$ 85,00" },
  { qty: "1.000 unidades", price: "R$ 99,00", best: true, msg: "Olá! Quero o Cartão de Visita Fotográfico — 1.000 unidades por R$ 99,00" },
];

const paperOptions = [
  {
    title: "Papel Supremo 250g",
    description: "Textura premium, perfeito para acabamento sofisticado",
    href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1",
  },
  {
    title: "Papel Reciclado",
    description: "Opção sustentável com excelente qualidade de impressão",
    href: "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1",
  },
  {
    title: "Laminação Brilhante",
    description: "Proteção extra com acabamento brilhante e moderno",
  },
];

function CartoesDeVisita() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Cartões de Visita",
          description:
            "Cartões de visita personalizados em Curitiba com impressão offset e digital. Acabamento premium, diversos tipos de papel e entrega rápida. Solicite orçamento via WhatsApp (41) 3024-0080.",
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

      {/* Título + Descrição + Imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Cartões de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Visita
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Impressão profissional de cartões de visita com acabamento
                premium. Diversos tipos de papel e acabamentos para sua marca
                se destacar.
              </p>
              <CTAButton type="cartoes" size="lg" id="btn-whatsapp-orcamento" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] h-[250px] sm:h-[350px] lg:h-[400px] border border-[#D4AF37]/20"
              style={{
                backgroundImage: `url("${cartaoVisitaImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Opções de Papel */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Opções de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Papel
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {paperOptions.map((option) => (
              <div
                key={option.title}
                className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                  {option.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/60 leading-relaxed mb-3 flex-grow">
                  {option.description}
                </p>
                <a
                  href={option.href || `https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Cartão de Visita em ${option.title}`)}`}
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
      </section>

      {/* Cartão de Visita Fotográfico */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[#1A1A1A] to-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-[22px] sm:text-3xl lg:text-[38px] font-extrabold text-white leading-tight mb-4">
              Cartão de Visita{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                Fotográfico
              </span>{" "}
              em Curitiba com Impressão Frente e Verso Colorida
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
              Destaque sua empresa com um cartão de visita profissional, moderno e com excelente qualidade de impressão.
              Na Gráfica Curitiba você encontra cartões fotográficos em papel Couchê 250g, com acabamento premium e produção rápida em Curitiba.
            </p>
          </div>

          {/* Features + Pricing */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">

            {/* Checklist */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-5">
                Por que escolher o Fotográfico?
              </h3>
              <ul className="space-y-3">
                {[
                  "Impressão Offset Profissional",
                  "Frente e Verso Colorido",
                  "Papel Couchê 250g de Alta Qualidade",
                  "Ideal para empresas, autônomos e profissionais liberais",
                  "Produção rápida em até 48 horas úteis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] sm:text-[15px] text-white/80">
                    <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-[16px] sm:text-[18px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] mb-5">
                Valores Promocionais
              </h3>
              <div className="space-y-3">
                {fotoOptions.map((opt) => (
                  <div
                    key={opt.qty}
                    className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${
                      opt.best
                        ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#BF953F]/10 border border-[#D4AF37]/50"
                        : "bg-[#1A1A1A] border border-[#D4AF37]/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[#D4AF37] text-sm flex-shrink-0">🔹</span>
                      <div className="min-w-0">
                        <span className="text-[13px] sm:text-[14px] text-white font-medium">
                          {opt.qty}
                        </span>
                        <span className="text-[13px] sm:text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] ml-2">
                          {opt.price}
                        </span>
                        {opt.best && (
                          <span className="ml-2 text-[11px] text-[#D4AF37] font-semibold">
                            ⭐ Mais Vendido
                          </span>
                        )}
                      </div>
                    </div>
                    <a
                      href={`${WPP_BASE}?text=${encodeURIComponent(opt.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] sm:text-[12px] font-bold px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-whatsapp-line text-sm"></i>
                      Quero Esse
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="text-center">
            <h3 className="text-[18px] sm:text-[22px] font-bold text-white mb-2">
              Veja o vídeo e conheça a
            </h3>
            <p className="text-[16px] sm:text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37] mb-6">
              qualidade do cartão fotográfico:
            </p>
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(212,175,55,0.2)] border border-[#D4AF37]/20" style={{ maxWidth: 360 }}>
              <div style={{ paddingBottom: "177.78%" }} className="relative">
                <iframe
                  src="https://www.youtube.com/embed/YCmP5i9j7Z4"
                  title="Cartão de Visita Fotográfico - Gráfica Curitiba"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <a
              href="https://www.youtube.com/shorts/YCmP5i9j7Z4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-full font-bold text-[14px] transition-all duration-300 cursor-pointer"
            >
              <i className="ri-youtube-line text-lg"></i>
              Assistir Vídeo
            </a>
          </div>

        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Cartões de visita personalizados pela Gráfica Curitiba com
            impressão offset e digital de alta qualidade. Entrega para todo o
            Brasil e orçamento rápido para empresas em Curitiba.
          </p>
        </div>
      </section>
    </>
  );
}

export default CartoesDeVisita;
