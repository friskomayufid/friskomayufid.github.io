import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { FaBackspace } from "react-icons/fa";

import Comment from "../../components/Comment";

interface Post {
  frontmatter: any;
  content: any;
}

export default function Post({ frontmatter, content }: Post) {
  const { title, date, description } = frontmatter;

  return (
    <>
      <Head>
        <title>{title} | Frisko Mayufid</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 md:w-[600px]">
        <Link href="/">
          <a className="text-3xl font-medium text-mainred mt-8 flex justify-end">
            <FaBackspace />
          </a>
        </Link>
        <h1 className="text-center text-2xl font-medium text-mainred">
          {title}
        </h1>
        <h2 className="text-center text-lg font-medium text-secondary">
          {moment(date).format("LL")}
        </h2>
        <div className="flex items-center pt-6 justify-center">
          <Image
            src="/assets/profile.svg"
            alt="Picture of the author"
            width={50}
            height={50}
          />
          <div className="ml-4">
            <h1 className="text-lg font-medium text-primary dark:text-white">Frisko Mayufid</h1>
            <h3 className="text-md font-medium text-secondary dark:text-white">
              Javascript Developer
            </h3>
          </div>
        </div>
        {/* <img src={bannerImage} /> */}
        <article className="prose lg:prose-xl mt-10 text-justify px-4">
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </article>
        <Comment post={frontmatter} />
      </div>
    </>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
