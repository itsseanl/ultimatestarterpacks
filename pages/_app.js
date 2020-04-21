// import App from 'next/app'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M6FJVXX');`,
					}}
				></script>
				...
			</Head>
			<noscript>
				<iframe
					src={"https://www.googletagmanager.com/ns.html?id=GTM-M6FJVXX"}
					height={0}
					width={0}
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>
			<Component {...pageProps} />
		</>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
