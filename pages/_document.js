import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>todo</title>
        <meta name="description" content="Todo App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,600;1,400&family=Playfair+Display:wght@400;600&display=swap"
        />
      </Head>
      <body className="bg-[#00c27b]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
