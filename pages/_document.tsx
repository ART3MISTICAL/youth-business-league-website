import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
		
      <Head >
	  <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-98ylrWmf8wT5PrnreN1dj6sTQ11S17KrAJ1SNHpQ6E0="
            crossOrigin="anonymous"
          ></script>
	</Head >
	  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
      <body className='body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
