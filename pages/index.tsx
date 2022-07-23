import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaDownload,
} from "react-icons/fa";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const Home: NextPage = () => {
  return (
    <div className="bg-graywhite h-screen">
      <Head>
        <title>Frisko Mayufid | Javascript Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 md:w-96">
        <div className="flex items-center pt-6 justify-center">
          <Image
            src="/assets/profile.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <div className="ml-4">
            <h1 className="text-3xl font-medium text-primary">
              Frisko Mayufid
            </h1>
            <h3 className="text-xl font-medium text-secondary">
              Javascript Developer
            </h3>
            <div className="flex mt-2 text-secondary">
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
          <div className="flex-1 text-center text-secondary">
            <p>4</p>
            <p className="leading-5">Years of work experience</p>
          </div>
          <div className="flex-1 text-center text-secondary">
            <p>15+</p>
            <p className="leading-5">Completed projects</p>
          </div>
          <div className="flex-1 text-center text-secondary">
            <p>4</p>
            <p className="leading-5">Different Companies</p>
          </div>
        </div>
        <div className="flex space-x-2 mt-10">
          <button className="flex-1 text-white text-center bg-mainred border-mainred py-3 px-4 flex rounded-md justify-center">
            Download CV
            <div className="ml-2 mt-1">
              <FaDownload />
            </div>
          </button>
          <button className="flex-1 text-primary text-center bg-white font-medium border-white py-3 px-4 flex rounded-md justify-center">
            Contact me
            <div className="ml-2 mt-1">
              <FaDownload />
            </div>
          </button>
        </div>
        <section className="mt-8">
          <Tab.Group>
            <Tab.List className="flex rounded-xl bg-white space-x-4">
              <Tab className="w-full rounded-lg my-2 py-2 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 focus:bg-graysecond bg-white">
                Projects
              </Tab>
              <Tab className="w-full rounded-lg my-2 py-2 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 focus:bg-graysecond bg-white">
                Skills
              </Tab>
              <Tab className="w-full rounded-lg my-2 py-2 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 focus:bg-graysecond bg-white">
                Articles
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <section className="mt-4">
                  <h3 className="font-medium text-primary text-xl text-center">
                    Some of my personal projects
                  </h3>
                  <h3 className="font-medium text-mainred text-xl text-center">
                    Coming Soon
                  </h3>
                </section>
              </Tab.Panel>
              <Tab.Panel className="mt-4">
                <h3 className="font-medium text-mainred text-xl text-center">
                  Coming Soon
                </h3>
              </Tab.Panel>
              <Tab.Panel className="mt-4">
                <h3 className="font-medium text-mainred text-xl text-center">
                  Coming Soon
                </h3>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </div>
    </div>
  );
};

export default Home;