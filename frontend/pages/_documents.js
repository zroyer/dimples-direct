import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    <Html>
      {/* <Head></Head> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
