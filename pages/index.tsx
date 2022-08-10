import Head from "next/head";
import Image from "next/image";
import { useState } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { getSortedPostsData } from "../utils/posts";
import BlogList from "../components/BlogList";
import Journey from "../components/Journey";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Home {
  allPostsData: Array<String>;
}

const Home = ({ allPostsData }: Home) => {
  const [theme, setTheme] = useState('light')

  return (
    <div className="bg-graywhite h-full">
      <Head>
        <title>Frisko Mayufid | Javascript Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`${theme === 'light' ? 'light' : 'dark'}`}>
        <div className="bg-graywhite dark:bg-slate-800 w-full">
          <div className="container mx-auto px-4 md:w-[600px] ">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="flex items-center pt-6 justify-center">
              <Image
                priority
                src="/assets/profile.svg"
                alt="Picture of the author"
                width={100}
                height={100}
              />
              <div className="ml-4">
                <h1 className="text-3xl font-medium text-primary dark:text-white">
                  Frisko Mayufid
                </h1>
                <h3 className="text-xl font-medium text-secondary dark:text-graywhite">
                  Javascript Developer
                </h3>
                <div className="flex mt-2 text-secondary dark:text-white">
                  <Link href="https://github.com/friskomayufid">
                    <a className="mr-4">
                      <FaGithub />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/friskomayufid/">
                    <a className="mr-4">
                      <FaLinkedin />
                    </a>
                  </Link>
                  <Link href="https://www.instagram.com/myxxfd/">
                    <a className="mr-4">
                      <FaInstagram />
                    </a>
                  </Link>
                  <Link href="https://www.facebook.com/Friskomayufid/">
                    <a className="mr-4">
                      <FaFacebookSquare />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex font-medium mt-6">
              <div className="flex-1 text-center text-secondary dark:text-white">
                <p>4</p>
                <p className="leading-5">Years of work experience</p>
              </div>
              <div className="flex-1 text-center text-secondary dark:text-white">
                <p>15+</p>
                <p className="leading-5">Completed projects</p>
              </div>
              <div className="flex-1 text-center text-secondary dark:text-white">
                <p>4</p>
                <p className="leading-5">Different Companies</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-10">
              <a
                target="_blank"
                href="/assets/resume.pdf"
                className="flex-1 text-white text-center bg-mainred hover:bg-red-700 border-mainred py-3 px-4 flex rounded-md justify-center"
                rel="noopener noreferrer"
              >
                Download CV
                <div className="ml-2 mt-1">
                  <FaDownload />
                </div>
              </a>
              <button className="flex-1 text-primary text-center bg-white hover:bg-gray-100 font-medium border-white py-3 px-4 flex rounded-md justify-center">
                <Link href="https://wa.me/6285329107849?text=Hi%20Frisko!%20">
                  <a>Contact me</a>
                </Link>
              </button>
            </div>
            <section className="mt-8">
              <About />
            </section>
            <section className="mt-8">
              <Journey />
            </section>
            <section className="mt-8">
              <Skills />
            </section>
            <section className="mt-8">
              <BlogList list={allPostsData} />
            </section>
            <section className="mt-8">
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div >
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Home;
