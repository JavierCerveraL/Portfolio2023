import Head from 'next/head';
// import Image from 'next/image';
import { useState } from 'react';
import Navbar from '../components/Navbar';

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        {/* <link href="css/hover-min.css" rel="stylesheet" />
        <link rel="stylesheet" href="wickedcss.min.css" /> */}

        <title>Welcome - JVRCVR</title>
        <meta name="description" content="Web portfolio by JVRCVR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="grid grid-flow-col gap-2 w-full  " id="home">
          <Navbar />
          {/* right main */}
          <div className="flex flex-col md:flex-row    items-center">
            <div className=" p-2 m-10 ">
              <h2 className="text-4xl   font-bold text-red-500 md:text-7xl javier   ">
                <div className="animate__backInLeft animate__animated">
                  Javier
                </div>

                <div className="animate__backInRight animate__animated">
                  Cervera
                </div>
              </h2>
              <h3 className="text-2xl py-1 font-medium text-neutral-900 md:text-3xl text-center dark:text-stone-100 font-com animate__fadeInUp animate__animated ">
                Frontend Developer
              </h3>
              <p className=" dark:text-stone-100 text-md mx-auto pt-2 leading-5  text-center font-light text-stone-700 md:text-lg max-w-xl  animate__fadeInUp animate__animated">
                Freelancer providing Web Services with the latest technolgies
              </p>
              <p className="text-md dark:text-stone-100 mx-auto text-neutral-900 text-center mt- font-light lg:max-w-xl animate__fadeInUp animate__animated ">
                Contact me for any further inquires.
              </p>

              {/* ICONS */}
              <div className=" text-4xl flex justify-center gap-10 text-blue-500 mt-10 ">
                <Link href="https://twitter.com/JvrCvrLpz">
                  <AiFillTwitterCircle />
                </Link>

                <Link href="https://www.linkedin.com/in/javiercerveralopez/">
                  <AiFillLinkedin />
                </Link>

                <Link href="https://github.com/JavierCerveraL">
                  <AiFillGithub />
                </Link>
              </div>
              {/* ICON */}
            </div>
          </div>

          {/* end right main */}
        </section>
      </main>
    </>
  );
}
