import { CTAButton } from "../components";
import receituario from "../assets/produtos/receita.jpeg";

function ReceituarioEspecial() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Receituário Especial",
          description:
            "Receituário médico personalizado em Curitiba. Impressão profissional para médicos, dentistas e profissionais da saúde. Diversos formatos.",
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
                Receituário <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Especial</span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Receituários médicos personalizados para profissionais da saúde.
                Impressão de qualidade com papel premium e acabamento profissional.
              </p>
              <CTAButton type="receituario" size="lg" />
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: `url("${receituario}")`,
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
            Gráfica Curitiba — receituários médicos personalizados para médicos, dentistas e profissionais da saúde. Impressão profissional em papel de alta qualidade. Curitiba e todo o Brasil.
          </p>
        </div>
      </section>
    </>
  );
}

export default ReceituarioEspecial;
