import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';

const TauriFrontendApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default TauriFrontendApp;
