import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Button: FC = ({ children, className }: Props) => {
  return <button className={className}>{children}</button>;
};

export { Button };
