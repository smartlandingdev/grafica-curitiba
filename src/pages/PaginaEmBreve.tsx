import { Link, useLocation } from 'react-router-dom'

// Mapeamento de rotas para nomes de produtos
const productNames: Record<string, string> = {
  '/verniz-localizado': 'Verniz Localizado',
  '/hotstamping': 'HotStamping',
  '/pvc-transparente': 'PVC Transparente',
  '/abridor-de-garrafa': 'Abridor de Garrafa',
  '/cordoes-personalizado': 'Cordões Personalizado',
  '/credenciais': 'Credenciais Papel e PVC',
  '/lixocar': 'LixoCar',
  '/lacre-de-alimentos': 'Lacre de Alimentos',
  '/pulseiras-de-festa': 'Pulseiras de Festa',
  '/etiqueta-troca-oleo': 'Etiqueta Troca Óleo',
  '/ima-de-geladeira': 'Imã de Geladeira',
  '/roller-clip': 'Roller Clip',
  '/pastas-personalizadas': 'Pastas Personalizadas',
  '/envelopes': 'Envelopes',
  '/papel-timbrado': 'Papel Timbrado',
  '/blocos-anotacoes-recibo': 'Blocos Anotações/Recibo',
  '/blocos-de-anotacoes': 'Blocos de Anotações',
  '/receituario-especial': 'Receituário Especial',
  '/folder-a4-2-dobras': 'Folder A4 2 Dobras',
  '/adesivo-resinado': 'Adesivo Resinado',
  '/adesivo-casca-de-ovo': 'Adesivo Casca de Ovo',
  '/adesivos-papel-vinil': 'Adesivos Papel - Vinil',
  '/calendarios': 'Calendários',
}

function PaginaEmBreve() {
  const location = useLocation()
  const productName = productNames[location.pathname] || 'Este Produto'

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-24 sm:pt-20 pb-10 bg-gradient-to-b from-[#FFF4F0] to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 flex items-center justify-center bg-[#FF6B35] rounded-full shadow-lg">
          <i className="ri-customer-service-2-line text-4xl sm:text-5xl text-white"></i>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-bold text-[#1A1A1A] mb-3 sm:mb-4 leading-tight px-2">
          {productName}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-[#555] mb-6 sm:mb-8 leading-relaxed px-2">
          Quer saber mais sobre <strong>{productName.toLowerCase()}</strong>?
          Entre em contato conosco pelo WhatsApp e nossa equipe terá prazer em ajudá-lo!
        </p>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/554130240080?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(productName)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] hover:scale-105 transition-all duration-300 cursor-pointer mb-4 sm:mb-6"
        >
          <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
          <span>Nos chame para saber mais!</span>
        </a>

        {/* Phone Number */}
        <p className="text-[#666] text-sm sm:text-base mb-6 sm:mb-8">
          Ou ligue: <a href="tel:+554130240080" className="text-[#FF6B35] font-semibold hover:underline">(41) 3024-0080</a>
        </p>

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#FF6B35] font-medium text-sm sm:text-base hover:gap-3 transition-all duration-300 cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Voltar para página inicial</span>
        </Link>
      </div>
    </section>
  )
}

export default PaginaEmBreve
