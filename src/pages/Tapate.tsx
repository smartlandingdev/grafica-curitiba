import { Link } from "react-router-dom";
import { useWhatsApp } from "../hooks/useWhatsApp";

// Features Data
// Features Data
const features = [
  {
    icon: "ri-car-line",
    label: "Encaixe sob medida para cada veículo",
  },
  {
    icon: "ri-shield-line",
    label: "Vinil resistente e de alta durabilidade",
  },
  {
    icon: "ri-drop-line",
    label: "Proteção contra líquidos e sujeira",
  },
  {
    icon: "ri-brush-line",
    label: "Fácil limpeza e manutenção",
  },
  {
    icon: "ri-award-line",
    label: "Acabamento premium e design moderno",
  },
  {
    icon: "ri-lock-line",
    label: "Mais segurança e conforto no dia a dia",
  },
];

// Paper Options Data

function Tapete() {
  const { getUrl } = useWhatsApp();

  return (
    <>
      {/* JSON-LD Schema */}

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 pb-8 sm:pt-20"
        style={{
          backgroundImage: 'url("/assets/produtos/tapete.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[26px] sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg">
            Tapetes Automotivos Tapetes Automotivos de Vinil Sob Medida para Seu
            Veículo
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2">
            Tapete Automotivo Kapazi – Proteção, Conforto e Sofisticação para
            Seu Veículo
          </p>
          <a
            href="https://graficacuritiba.wixsite.com/website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-shopping-cart-2-line text-xl sm:text-2xl"></i>
            <span>Comprar Agora</span>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 bg-[#FFF4F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
                Tapetes Automotivos Personalizados para Seu Veículo
              </h2>

              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                O Tapete Automotivo Kapazi é desenvolvido para oferecer máxima
                proteção, durabilidade e acabamento premium ao interior do seu
                veículo. Produzido com materiais de alta qualidade, ele protege
                o carpete original contra sujeira, líquidos, poeira e desgaste
                do uso diário, mantendo o carro sempre limpo e valorizado.
              </p>

              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed mb-4 sm:mb-6">
                Com encaixe preciso para cada modelo de veículo, o tapete Kapazi
                garante segurança e estabilidade, evitando deslizamentos durante
                a condução. Seu design moderno alia funcionalidade e estética,
                proporcionando um visual elegante e acabamento superior ao
                interior automotivo.
              </p>

              <p className="text-[14px] sm:text-[16px] text-[#555] leading-relaxed">
                Além disso, o Tapete Automotivo Kapazi é fácil de limpar,
                resistente à umidade e ideal tanto para uso urbano quanto para
                quem enfrenta rotinas mais intensas, como estradas de terra ou
                ambientes corporativos.
              </p>
            </div>
            <div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[400px]"
              style={{
                backgroundImage: 'url("/assets/produtos/tapete.jpeg")',
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-[#FFF4F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-[38px] font-bold text-[#1A1A1A] mb-4 sm:mb-6">
            Pronto para Tapetes Personalizados?
          </h2>

          <p className="text-sm sm:text-lg text-[#555] mb-6 sm:mb-10 max-w-2xl mx-auto px-2">
            Entre em contato agora e receba um orçamento personalizado para
            tapetes automotivos de vinil sob medida para o seu veículo.
          </p>

          <a
            href="https://graficacuritiba.wixsite.com/website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#FF6B35] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-shopping-cart-2-line text-xl sm:text-2xl"></i>
            <span>Comprar Agora</span>
          </a>

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

export default Tapete;
