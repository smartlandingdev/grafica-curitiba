import pulseirasImg from "../assets/produtos/pulseira-festa-personalizada.png";
import { CTAButton } from "../components";

const precos = [
  { qtd: "50 unidades", valor: "R$ 45,00" },
  { qtd: "100 unidades", valor: "R$ 60,00" },
  { qtd: "200 unidades", valor: "R$ 120,00" },
  { qtd: "300 unidades", valor: "R$ 175,00" },
  { qtd: "500 unidades", valor: "R$ 275,00" },
  { qtd: "1000 unidades", valor: "R$ 445,00" },
];

function PulseirasFesta() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Pulseiras de Festa",
          description:
            "Pulseiras para festas e eventos em Curitiba. Tyvek, vinil e holográficas. Controle de acesso com segurança e personalização.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
          },
        })}
      </script>

      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Pulseiras Personalizadas para Eventos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Entrega Rápida</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Compre direto da fábrica — impressão em preto, alta resistência e envio para todo o Brasil
              </p>
              <CTAButton type="pulseira" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${pulseirasImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      {/* Seção de preços */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Valores das Pulseiras
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {precos.map((item) => (
              <div
                key={item.qtd}
                className="bg-gradient-to-b from-[#2A2A2A] to-[#1F1F1F] border border-[#D4AF37]/30 rounded-lg p-4 text-center hover:border-[#D4AF37]/60 transition-all duration-300"
              >
                <p className="text-[#D4AF37] font-bold text-lg sm:text-xl mb-1">{item.valor}</p>
                <p className="text-white/70 text-xs sm:text-sm">{item.qtd}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-center mb-8">
            <div className="flex items-center gap-2 text-white/80">
              <i className="ri-shopping-bag-line text-[#D4AF37] text-lg"></i>
              <span className="text-sm sm:text-base"><strong>Pedido mínimo:</strong> 50 unidades da mesma cor</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <i className="ri-time-line text-[#D4AF37] text-lg"></i>
              <span className="text-sm sm:text-base"><strong>Produção rápida:</strong> em até 48 horas</span>
            </div>
          </div>

          <div className="text-center">
            <CTAButton type="pulseira" size="lg" />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — pulseiras personalizadas para festas e eventos. Tyvek e vinil com impressão em preto. Entrega rápida em até 48h em Curitiba e todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default PulseirasFesta;
