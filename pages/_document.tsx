import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es" className="scroll-smooth">
        <Head>
          <meta name="description" content="Jhoner's Portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
