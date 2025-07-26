import Head from 'next/head';
import '@/styles/globals.css'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/miniblogicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
