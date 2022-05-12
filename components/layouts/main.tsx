import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/router'

interface MainProps {
  children: ReactNode,
  router: Router
}

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <title>Frisko Mayufid</title>
        <meta name='description' content='Frisko Mayufid Personal Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
