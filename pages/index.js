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
        <link rel="icon" href="/logo-no-background.svg" />
      </Head>
      <main>
        <section className="grid grid-flow-col gap-2 w-full  " id="home">
          <Navbar />
          {/* right main */}
          <div className="flex  md:flex-row  xs:top-50 items-center">
            <div className=" p-2 m-10 ">
              <h2 className="text-3xl sm:text-7xl  xs:text-5xl  font-bold text-red-500 javier lg:text-7xl  relative text-center  ">
                <div className="animate__backInLeft animate__animated">
                  Javier
                </div>

                <div className="animate__backInRight animate__animated text-center">
                  Cervera
                </div>
              </h2>
              <h3 className="text-xl py-1 font-medium text-neutral-900 md:text-3xl text-center dark:text-stone-100 font-com animate__fadeInUp animate__animated ">
                Frontend Developer
              </h3>
              <p className=" dark:text-stone-100 text-sm mx-auto pt-2 leading-5  text-center font-light text-stone-700 md:text-lg max-w-xl  animate__fadeInUp animate__animated">
                Freelancer providing Web Services with the latest technologies
              </p>
              <p className="text-sm dark:text-stone-100 mx-auto text-neutral-900 text-center mt- font-light lg:max-w-xl animate__fadeInUp animate__animated ">
                Contact me for any further inquires.
              </p>

              {/* ICONS */}
              <div className=" lg:text-4xl text-2xl md:text-4xl flex justify-center gap-10 text-sky-700 mt-8 ">

                <Link href="https://www.linkedin.com/in/javiercerveralopez/">
                  <AiFillLinkedin />
                </Link>

                <Link href="https://github.com/JavierCerveraL">
                  <AiFillGithub />
                </Link>
              </div>
              <div className='flex justify-center mt-10'>
              <button  type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                <Link href="https://drive.google.com/file/d/1X4ti2nZL5bSpME6h9i4ZOxcNL6xCs0zv/view?usp=sharing"    target="_blank">Resume</Link> </button>
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
