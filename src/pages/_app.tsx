import '@assets/css/global.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore } from '@libs/store'
// import type { NextWebVitalsMetric } from 'next/app'

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = createStore()
  const persistor = persistStore(store)

  useEffect(() => {
    // HACK: IE Access Block
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
      location.replace('../unsupport.html')
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
