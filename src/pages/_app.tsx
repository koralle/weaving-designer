import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const TauriFrontendApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
};

export default TauriFrontendApp;
