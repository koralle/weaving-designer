import { Icon, IconifyIcon } from '@iconify-icon/react';
import { ClassValue, clsx } from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { Appearance } from '.';

type Props = {
  appearance: Appearance;
  icon: string | IconifyIcon;
  children?: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<Props> = ({ appearance, icon = 'mdi:home', children, className }: Props) => {
  const baseStyle: ClassValue = `w-[180px] h-[48px] font-regular rounded-full flex items-center gap-x-5 px-5`;

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
      <Icon
        inline
        icon={icon}
        width={24}
        height={24}
      />
      {children}
    </button>
  );
};

export { IconButton };
