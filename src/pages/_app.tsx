import '@assets/css/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
// import type { NextWebVitalsMetric } from 'next/app'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default appWithTranslation(MyApp)
