import { useLocation } from 'react-router-dom'
import {
  getWhatsAppUrl,
  getWhatsAppMessage,
  getRouteName,
  getWhatsAppUrlSimple,
  type MessageType,
} from '../utils/whatsapp'

/**
 * Hook para gerar URLs e mensagens do WhatsApp baseadas na rota atual
 *
 * @example
 * const { getUrl, getMessage, productName } = useWhatsApp()
 *
 * // URL para orçamento (padrão)
 * <a href={getUrl()}>Solicitar Orçamento</a>
 *
 * // URL para falar com especialista
 * <a href={getUrl('especialista')}>Falar com Especialista</a>
 */
export function useWhatsApp() {
  const { pathname } = useLocation()

  return {
    /**
     * Gera URL do WhatsApp com mensagem personalizada
     * @param type - Tipo de mensagem (orcamento, especialista, iniciar-pedido, saber-mais, contato)
     */
    getUrl: (type: MessageType = 'orcamento') => getWhatsAppUrl(pathname, type),

    /**
     * Obtém apenas a mensagem (sem URL)
     * @param type - Tipo de mensagem
     */
    getMessage: (type: MessageType = 'orcamento') => getWhatsAppMessage(pathname, type),

    /**
     * Nome do produto/página atual
     */
    productName: getRouteName(pathname),

    /**
     * URL simples do WhatsApp (sem mensagem)
     */
    simpleUrl: getWhatsAppUrlSimple(),

    /**
     * Rota atual
     */
    pathname,
  }
}

export default useWhatsApp
