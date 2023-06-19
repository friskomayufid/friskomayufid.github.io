import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Text } from '@chakra-ui/react'
import markdownToHtml from '../../utils/remark'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface Post {
  frontmatter: any
  contentBlog: any
}

export default function Post({ frontmatter, contentBlog }: Post) {
  const { title, date, description, thumbnail, slug } = frontmatter
  const titlePage = title + ' | Frisko Mayufid'
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Box>
        <Navbar />
        <Container maxW={'3xl'} py={{ base: '4', lg: '5' }}>
          <Image
            src={thumbnail}
            alt={title}
            width="800"
            height="400"
            objectFit="cover"
          />
          <Text fontSize={'6xl'} fontWeight="bold">
            {title}
          </Text>
          <Text fontSize={'l'} fontWeight={'light'}>
            Written on {date} by Frisko Mayufid.
          </Text>
          <Text fontSize={'l'} mb="5" fontWeight={'light'}>
            2 Minutes Read.
          </Text>
          <article
            className="prose lg:prose-xl text-white dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: contentBlog }}
          />
          {/* <Comment post={slug} /> */}
        </Container>
        <Footer />
      </Box>
    </>
  )
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync('posts')
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  // return list of paths
  return {
    paths,
    fallback: false,
  }
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)

  const contentBlog = await markdownToHtml(content || '')

  return {
    props: {
      frontmatter,
      contentBlog,
    },
  }
}
