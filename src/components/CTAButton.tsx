import type { CTAType } from '../config/ctaUrls';
import { getCTAConfig } from '../config/ctaUrls';

/**
 * Variantes visuais disponíveis para o botão CTA
 */
export type CTAVariant = 'primary' | 'secondary' | 'whatsapp' | 'outline';

/**
 * Tamanhos disponíveis para o botão CTA
 */
export type CTASize = 'sm' | 'md' | 'lg';

interface CTAButtonProps {
  /** Tipo do CTA (define a URL e label padrão) */
  type: CTAType;
  /** Texto customizado do botão (opcional - usa o padrão da config se não informado) */
  label?: string;
  /** Variante visual do botão */
  variant?: CTAVariant;
  /** Tamanho do botão */
  size?: CTASize;
  /** Mostrar ícone */
  showIcon?: boolean;
  /** Ícone customizado (opcional - usa o padrão da config se não informado) */
  icon?: string;
  /** Classes CSS adicionais */
  className?: string;
  /** ID para tracking/analytics */
  id?: string;
}

/**
 * Estilos base por variante
 */
const variantStyles: Record<CTAVariant, string> = {
  primary:
    'bg-[#FF6B35] text-white shadow-[0_4px_16px_rgba(255,107,53,0.4)] hover:scale-105',
  secondary:
    'bg-[#00A859] text-white shadow-[0_4px_16px_rgba(0,168,89,0.4)] hover:scale-105',
  whatsapp:
    'bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] hover:scale-105',
  outline:
    'bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white',
};

/**
 * Estilos base por tamanho
 */
const sizeStyles: Record<CTASize, string> = {
  sm: 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm rounded-lg gap-1.5',
  md: 'px-6 sm:px-8 py-3 sm:py-4 text-base rounded-lg gap-2',
  lg: 'px-6 sm:px-10 lg:px-12 py-4 sm:py-5 text-base sm:text-lg rounded-full gap-2 sm:gap-3',
};

/**
 * Tamanhos de ícone por tamanho do botão
 */
const iconSizes: Record<CTASize, string> = {
  sm: 'text-base sm:text-lg',
  md: 'text-lg sm:text-xl',
  lg: 'text-xl sm:text-2xl',
};

/**
 * Componente de botão CTA reutilizável
 *
 * Usa as URLs centralizadas do arquivo de configuração.
 * Qualquer alteração na URL da config será refletida automaticamente.
 *
 * @example
 * // Botão de Folder com estilo padrão
 * <CTAButton type="folder" />
 *
 * @example
 * // Botão de WhatsApp com label customizado
 * <CTAButton type="whatsapp" label="Fale Conosco" variant="whatsapp" />
 *
 * @example
 * // Botão grande com ícone
 * <CTAButton type="folder" size="lg" showIcon />
 */
export function CTAButton({
  type,
  label,
  variant = 'primary',
  size = 'md',
  showIcon = true,
  icon,
  className = '',
  id,
}: CTAButtonProps) {
  const config = getCTAConfig(type);
  const displayLabel = label ?? config.label;
  const displayIcon = icon ?? config.icon;

  const baseStyles =
    'inline-flex items-center font-bold transition-all duration-300 cursor-pointer';

  return (
    <a
      href={config.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      id={id}
    >
      {showIcon && displayIcon && (
        <i className={`${displayIcon} ${iconSizes[size]}`}></i>
      )}
      <span>{displayLabel}</span>
    </a>
  );
}

export default CTAButton;
