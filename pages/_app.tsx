import React, { ReactChild } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles'
import { AppProps } from 'next/app'
import '@fontsource/inter'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

const App = ({ Component, pageProps }: AppProps): ReactChild => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
