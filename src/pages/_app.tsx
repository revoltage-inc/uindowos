import '@assets/css/globals.css'
import type { AppProps } from 'next/app'
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

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
