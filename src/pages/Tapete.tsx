import fundosProdutosImg from "../assets/produtos/fundos-produtos.jpeg";

function Tapete() {
  return (
    <>
      {/* Seção: título + descrição + imagem */}
      <section className="pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-[#1A1A1A] to-[#252525]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-[26px] sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight mb-4 sm:mb-6">
                Tapetes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] via-[#D4AF37] to-[#AA771C]">Automotivos</span> de Vinil
              </h1>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed mb-6 sm:mb-10">
                Tapetes automotivos sob medida com encaixe preciso para cada veículo.
                Material de vinil resistente com proteção contra líquidos e fácil limpeza.
              </p>
              <a
                href="https://automotivo.kapazi.com.br/?cupom=Rafaelgarcia10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#D4AF37] text-white px-6 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-shopping-cart-2-line text-xl sm:text-2xl"></i>
                <span>Comprar Agora</span>
              </a>
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
            Tapetes automotivos Kapazi de vinil sob medida. Encaixe preciso, proteção premium e fácil limpeza para o interior do seu veículo.
          </p>
        </div>
      </section>
    </>
  );
}

export default Tapete;
