import type { ReactNode } from 'react';
import classNames from 'classnames';
import './styles/Text.scss';

interface Props {
  children: ReactNode;
  fontSize?: 'fs-2xl' | 'fs-xl' | 'fs-lg' | 'fs-base' | 'fs-sm' | 'fs-xs';
  fontWeight?: 'bolder' | 'bold' | 'normal';
  fontStyle?: 'italic' | 'underline' | 'normal';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error';
  onClick?: () => void;
  className?: string;
}

export const Text = ({
  fontWeight = 'normal',
  fontSize = 'fs-base',
  fontStyle = 'normal',
  variant = 'default',
  onClick,
  className,
  children,
}: Props) => (
  <span
    className={classNames(fontSize, fontWeight, fontStyle, variant, className)}
    onClick={onClick}
  >
    {children}
  </span>
);
