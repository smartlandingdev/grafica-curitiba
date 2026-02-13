/**
 * Configuração centralizada das URLs dos botões de Call To Action (CTA)
 *
 * COMO USAR:
 * - Para alterar a URL de um botão, basta modificar o valor aqui
 * - Todos os componentes que usam essa URL serão atualizados automaticamente
 *
 * COMO ADICIONAR NOVOS BOTÕES:
 * 1. Adicione a nova chave no tipo CTAType
 * 2. Adicione a configuração em CTA_CONFIG
 */

// Tipos de CTA disponíveis - adicione novos tipos aqui
export type CTAType = "folder" | "whatsapp" | "cordao" | "banner";

// Interface para a configuração de cada CTA
export interface CTAConfig {
  url: string;
  label: string;
  icon?: string; // Classes do RemixIcon (ex: "ri-whatsapp-line")
}

// Número do WhatsApp (usado para gerar URLs dinâmicas)
export const WHATSAPP_NUMBER = "554130240080";

/**
 * CONFIGURAÇÃO CENTRAL DOS CTAs
 *
 * Altere as URLs aqui para refletir em todo o projeto
 */
export const CTA_CONFIG: Record<CTAType, CTAConfig> = {
  // Botão para orçamento de Folder
  folder: {
    url: "https://conversaicrm.com.br/grafica-curitiba/orcamento.html?produto=folder",
    label: "Solicitar Orçamento",
    icon: "ri-file-text-line",
  },

  // Botão para WhatsApp
  whatsapp: {
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "Falar no WhatsApp",
    icon: "ri-whatsapp-line",
  },

  cordao: {
    url: `https://conversaicrm.com.br/grafica-curitiba/orcamento.html?produto=cordao`,
    label: "Falar no WhatsApp",
    icon: "ri-whatsapp-line",
  },

  banner: {
    url: `https://conversaicrm.com.br/grafica-curitiba/orcamento.html?produto=banner`,
    label: "Falar no WhatsApp",
    icon: "ri-whatsapp-line",
  },
};

/**
 * Função auxiliar para obter a URL de um CTA
 */
export function getCTAUrl(type: CTAType): string {
  return CTA_CONFIG[type].url;
}

/**
 * Função auxiliar para obter a configuração completa de um CTA
 */
export function getCTAConfig(type: CTAType): CTAConfig {
  return CTA_CONFIG[type];
}

/**
 * Função para gerar URL do WhatsApp com mensagem personalizada
 */
export function getWhatsAppUrlWithMessage(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
