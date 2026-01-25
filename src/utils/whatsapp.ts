/**
 * Utilitário para gerar URLs do WhatsApp com mensagens dinâmicas
 * baseadas na rota atual do usuário
 */

const WHATSAPP_NUMBER = '554130240080'

// Mapeamento de rotas para nomes de produtos/páginas
const routeNames: Record<string, string> = {
  '/': 'Página Inicial',
  '/cartoes-de-visita': 'Cartões de Visita',
  '/panfletos': 'Panfletos',
  '/crachas-e-cordoes': 'Crachás e Cordões',
  '/banners': 'Banners',
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

// Tipos de mensagem predefinidos
export type MessageType =
  | 'orcamento'        // Solicitar orçamento (padrão)
  | 'especialista'     // Falar com especialista
  | 'iniciar-pedido'   // Iniciar pedido
  | 'saber-mais'       // Saber mais sobre produto
  | 'contato'          // Contato simples

/**
 * Obtém o nome do produto/página baseado na rota
 */
export function getRouteName(pathname: string): string {
  return routeNames[pathname] || 'Este Produto'
}

/**
 * Gera a mensagem do WhatsApp baseada na rota e tipo de mensagem
 */
export function getWhatsAppMessage(pathname: string, type: MessageType = 'orcamento'): string {
  const productName = routeNames[pathname]
  const isHomePage = pathname === '/'

  switch (type) {
    case 'especialista':
      return 'Olá! Gostaria de falar com um especialista'

    case 'iniciar-pedido':
      return 'Olá! Quero iniciar meu pedido'

    case 'saber-mais':
      if (productName && !isHomePage) {
        return `Olá! Gostaria de saber mais sobre ${productName}`
      }
      return 'Olá! Gostaria de saber mais sobre os produtos'

    case 'contato':
      return 'Olá!'

    case 'orcamento':
    default:
      if (productName && !isHomePage) {
        return `Olá! Gostaria de um orçamento para ${productName}`
      }
      return 'Olá! Gostaria de solicitar um orçamento'
  }
}

/**
 * Gera a URL completa do WhatsApp com a mensagem codificada
 */
export function getWhatsAppUrl(pathname: string, type: MessageType = 'orcamento'): string {
  const message = getWhatsAppMessage(pathname, type)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}

/**
 * Gera URL do WhatsApp sem mensagem (apenas número)
 */
export function getWhatsAppUrlSimple(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`
}

/**
 * Hook-friendly: retorna todas as funções necessárias para uso com useLocation
 */
export function createWhatsAppHelpers(pathname: string) {
  return {
    getUrl: (type: MessageType = 'orcamento') => getWhatsAppUrl(pathname, type),
    getMessage: (type: MessageType = 'orcamento') => getWhatsAppMessage(pathname, type),
    productName: getRouteName(pathname),
  }
}
