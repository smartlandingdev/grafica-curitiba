import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";
import { CTAButton } from "../components";

const benefits = [
  {
    title: "Marketing Diário",
    description: "Sua marca presente no dia a dia do cliente",
  },
  {
    title: "Brinde Útil",
    description: "Item prático que será usado constantemente",
  },
  {
    title: "Custo Acessível",
    description: "Investimento baixo com alto retorno de visibilidade",
  },
  {
    title: "Fidelização",
    description: "Presente que gera lembrança positiva da marca",
  },
];

function BlocosAnotacoes() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Blocos de Anotações",
          description:
            "Blocos de anotações personalizados. Diversos tamanhos com impressão colorida. Ideal como brinde corporativo.",
          brand: { "@type": "Organization", name: "Gráfica Curitiba" },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
          },
        })}
      </script>

      {/* Título + Descrição + Imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Blocos de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">
                  Anotações
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Blocos de anotações personalizados para sua empresa. Brinde
                corporativo útil com impressão de alta qualidade.
              </p>
              <CTAButton type="blocosAnotacoes" size="lg" />
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

      {/* Diferenciais */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Por que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4E4A6] to-[#D4AF37]">
              Escolher
            </span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gradient-to-b from-[#252525] via-[#1F1F1F] to-[#1A1A1A] border border-[#D4AF37]/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-[0_8px_24px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-[14px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/70 leading-relaxed mb-3 flex-grow">
                  {benefit.description}
                </p>
                <a
                  href={`https://wa.me/+554130240080?text=${encodeURIComponent(`Gostaria de solicitar orçamento para Bloco de Anotações Personalizado`)}`}
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

      <section className="py-8 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[13px] text-white/40 leading-relaxed text-center">
            Blocos de anotações personalizados pela Gráfica Curitiba, com impressão colorida de alta qualidade e entrega para todo o Brasil. O brinde corporativo ideal para manter sua marca sempre à vista dos clientes.
          </p>
        </div>
      </section>
    </>
  );
}

export default BlocosAnotacoes;
