import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { withProse } from '@nikolovlazar/chakra-ui-prose'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config, fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
}, withProse(),)

export default theme