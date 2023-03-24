import { FC, ReactNode } from 'react';

import { Header } from './Header';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main id='main'>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { Layout };
