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
export type CTAType =
  | "folder"
  | "whatsapp"
  | "cordao"
  | "banner"
  | "pulseira"
  | "cartoes"
  | "ciptea"
  | "verniz"
  | "hotStamping"
  | "credenciais"
  | "pastas"
  | "papelTimbrado"
  | "blocos"
  | "receituario"
  | "envelopes"
  | "ima"
  | "rollerClip"
  | "lacre"
  | "lixoCar"
  | "pvcTransparente"
  | "adesivoResinado"
  | "adesivoCascaOvo"
  | "adesivoPapelVinil"
  | "blocosAnotacoes"
  | "pulseirasEventos"
  | "folderA4Dobras";

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
 * Todos os botões agora direcionam para o WhatsApp com mensagens personalizadas
 */
export const CTA_CONFIG: Record<CTAType, CTAConfig> = {
  // Botão para orçamento de Folder
  folder: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Folder")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  // Botão para WhatsApp genérico
  whatsapp: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}`,
    label: "Falar no WhatsApp",
    icon: "ri-whatsapp-line",
  },

  cordao: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Cordão Personalizado")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  banner: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Banner")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pulseira: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Pulseira")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  cartoes: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Cartões de Visita")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  ciptea: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de comprar carteirinha CIPTEA")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  verniz: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Verniz Localizado")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  hotStamping: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Hot Stamping")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  credenciais: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Credenciais")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pastas: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Pastas Personalizadas")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  papelTimbrado: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Papel Timbrado")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  blocos: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Blocos de Recibo")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  receituario: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Receituário")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  envelopes: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Envelopes")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  ima: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Imã de Geladeira")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  rollerClip: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Roller Clip")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  lacre: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Lacre de Alimentos")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  lixoCar: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para LixoCar")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pvcTransparente: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Cartão PVC Transparente")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoResinado: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Adesivo Resinado")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoCascaOvo: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Adesivo Casca de Ovo")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoPapelVinil: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Adesivo Papel/Vinil")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  blocosAnotacoes: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Blocos de Anotações")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pulseirasEventos: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Pulseiras de Eventos")}`,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  folderA4Dobras: {
    url: `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent("Gostaria de solicitar orçamento para Folder A4 com Dobras")}`,
    label: "Solicitar Orçamento",
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
