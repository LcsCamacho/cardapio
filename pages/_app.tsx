import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { makeStore, persistor, store } from '../features/redux/store'
import { PersistGate } from 'redux-persist/integration/react'


function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>LOADING</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App
