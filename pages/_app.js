import { useEffect } from 'react'
import { AuthProvider } from '../lib/auth'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {

  useEffect(()=> {
    console.log(theme)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
