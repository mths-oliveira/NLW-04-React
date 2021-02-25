import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import type { AppProps } from 'next/app'
import { CountdownProvider } from '../contexts/CountdownContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
        <Component {...pageProps} />        
    </ChallengesProvider>
  )
}

export default MyApp
