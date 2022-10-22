import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="UindowOS" />
        <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/meh2xys.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
