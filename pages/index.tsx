import type { NextPage } from 'next'
import { Container, Box, Heading } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} textAlign="center" color="white" mb="6">
        Hello I&apos;m software engineer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Frisko Mayufid</Heading>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
