import Page from '../components/Page';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <div>asdfasdfasfa</div>
      <Component {...pageProps} />
    </Page>
  );
}
