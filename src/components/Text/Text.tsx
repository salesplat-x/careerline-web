import type { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import './Text.scss';

export interface TextProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  color?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'inverse'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  onClick?: () => void;
}

export const Text = ({
  children,
  className,
  style,
  color,
  weight,
  size,
  align,
  truncate,
  onClick,
}: TextProps) => {
  const classes = classNames(
    'text-component',
    size && `text-${size}`,
    color && `text-${color}`,
    weight && `font-${weight}`,
    align && `text-${align}`,
    truncate && 'text-truncate',
    onClick && 'text-clickable',
    className,
  );

  return (
    <span className={classes} style={style} onClick={onClick}>
      {children}
    </span>
  );
};

export const ExtraSmallText = ({
  size = 'xs',
  weight = 'normal',
  color = 'secondary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const SmallText = ({
  size = 'sm',
  weight = 'normal',
  color = 'secondary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const BodyText = ({
  size = 'base',
  weight = 'normal',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const EmphasisText = ({
  size = 'lg',
  weight = 'medium',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const SubheadingText = ({
  size = 'xl',
  weight = 'medium',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const HeadingText = ({
  size = '2xl',
  weight = 'semibold',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const PageTitleText = ({
  size = '3xl',
  weight = 'semibold',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const HeroText = ({
  size = '4xl',
  weight = 'bold',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;

export const DisplayText = ({
  size = '5xl',
  weight = 'extrabold',
  color = 'primary',
  ...props
}: TextProps) => <Text size={size} weight={weight} color={color} {...props} />;
