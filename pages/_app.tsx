<<<<<<< HEAD
import '../styles/tailwind.css';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
=======
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
>>>>>>> 684b5b80decf600b82e91502a887f622f6a58f13
