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
  | "folderA4Dobras"
  | "marcadorPagina";

// Interface para a configuração de cada CTA
export interface CTAConfig {
  url: string;
  label: string;
  icon?: string; // Classes do RemixIcon (ex: "ri-whatsapp-line")
}

// Número do WhatsApp (usado para gerar URLs dinâmicas)
export const WHATSAPP_NUMBER = "554130240080";

const WHATSAPP_URL = "https://tintim.link/whatsapp/0eb741f7-a339-4a99-a871-b7c6aff012dd/affb41e2-145a-4fcb-8d48-46d48ab0c7f1";

/**
 * CONFIGURAÇÃO CENTRAL DOS CTAs
 *
 * Altere as URLs aqui para refletir em todo o projeto
 * Todos os botões agora direcionam para o WhatsApp com mensagens personalizadas
 */
export const CTA_CONFIG: Record<CTAType, CTAConfig> = {
  // Botão para orçamento de Folder
  folder: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  // Botão para WhatsApp genérico
  whatsapp: {
    url: WHATSAPP_URL,
    label: "Falar no WhatsApp",
    icon: "ri-whatsapp-line",
  },

  cordao: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  banner: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pulseira: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  cartoes: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  ciptea: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  verniz: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  hotStamping: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  credenciais: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pastas: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  papelTimbrado: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  blocos: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  receituario: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  envelopes: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  ima: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  rollerClip: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  lacre: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  lixoCar: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pvcTransparente: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoResinado: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoCascaOvo: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  adesivoPapelVinil: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  blocosAnotacoes: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  pulseirasEventos: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  folderA4Dobras: {
    url: WHATSAPP_URL,
    label: "Solicitar Orçamento",
    icon: "ri-whatsapp-line",
  },

  marcadorPagina: {
    url: WHATSAPP_URL,
    label: "Gostaria de comprar Marcadores de página",
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
export function getWhatsAppUrlWithMessage(_message: string): string {
  return WHATSAPP_URL;
}
