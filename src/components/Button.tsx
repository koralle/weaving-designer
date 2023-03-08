import { ClassValue, clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

const appearance = {
  primary: 'primary',
  secondary: 'secondary',
  info: 'info',
  destructive: 'destructive',
} as const;

type Appearance = (typeof appearance)[keyof typeof appearance];

type Props = {
  appearance: Appearance;
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ appearance, children, className }: Props) => {
  const baseStyle: ClassValue = `w-[180px] h-[48px] font-regular rounded-full`;

  const primaryStyle = {
    'bg-wd-primary text-wd-white': appearance === 'primary',
  };

  const secondaryStyle = {
    'bg-wd-secondary': appearance === 'secondary',
  } as const;

  const infoStyle = {
    'bg-wd-info text-wd-white': appearance === 'info',
  } as const;

  const destructiveStyle = {
    'bg-wd-destructive text-wd-white': appearance === 'destructive',
  } as const;

  return (
    <button
      className={clsx(
        {
          ...primaryStyle,
          ...secondaryStyle,
          ...infoStyle,
          ...destructiveStyle,
        },
        baseStyle,
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
