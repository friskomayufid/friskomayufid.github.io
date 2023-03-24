import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config, fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default theme