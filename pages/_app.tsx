import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TokenProvider } from '../components/tokenContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TokenProvider >
      <Component {...pageProps} />
    </TokenProvider>
  )
}

export default MyApp
