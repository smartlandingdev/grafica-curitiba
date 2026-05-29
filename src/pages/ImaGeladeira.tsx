import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";

function ImaGeladeira() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Imã de Geladeira",
          description:
            "Imã de geladeira personalizado em Curitiba. Impressão full color em imã flexível. Marketing direto para o lar do seu cliente.",
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
                Imã de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Geladeira</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Imãs personalizados para marketing direto. Sua marca na geladeira do
                cliente com impressão colorida de alta qualidade.
              </p>
              <CTAButton type="ima" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${fundosProdutosImg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Gráfica Curitiba — imãs de geladeira personalizados em imã flexível com impressão full color. Ideal para delivery, farmácias e assistência técnica. Curitiba e todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default ImaGeladeira;
