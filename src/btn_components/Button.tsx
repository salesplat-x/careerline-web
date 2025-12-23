import React from 'react';
import './Button.scss';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonVariant = 'primary' | 'primary-white' | 'primary-blue' | 'secondary' | 'tertiary';

interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  id?: string;
  name?: string;
  title?: string;
  'aria-label'?: string;
  tabIndex?: number;
  form?: string;
  value?: string | number | readonly string[];
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  type = 'button',
  iconPosition = 'right',
  loading = false,
  icon = null,
  onClick,
  className,
  id,
  name,
  title,
  'aria-label': ariaLabel,
  tabIndex,
  form,
  value,
}) => {
  const isDisabled = disabled || loading;

  const combinedClassName = [
    'btn',
    `btn--${size}`,
    `btn--${variant}`,
    loading ? 'btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type === 'submit' ? 'submit' : type === 'reset' ? 'reset' : 'button'}
      onClick={onClick}
      disabled={isDisabled}
      className={combinedClassName}
      id={id}
      name={name}
      title={title}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      form={form}
      value={value}
    >
      {!loading && icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      {loading && <span className="btn__loader">Loading...</span>}
      <span className="btn__text">{children}</span>
      {!loading && icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export default Button;
