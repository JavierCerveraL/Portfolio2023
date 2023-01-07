// import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import skill1 from '../public/skill1.png';
import skill2 from '../public/skill2.png';
import skill3 from '../public/skill3.png';
import skill4 from '../public/skill4.png';
import skill5 from '../public/skill5.png';
import skill6 from '../public/skill6.png';
import skill7 from '../public/skill7.png';
import skill8 from '../public/skill8.png';
import skill9 from '../public/skill9.png';
import skill10 from '../public/skill10.png';
import skill11 from '../public/skill11.png';
import skill12 from '../public/skill12.png';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function Skills() {
  return (
    <section
      className="grid  w-full bg-slate-900  row-span-6 grid-flow-col overflow-x-hidden"
      id="skills"
    >
      <Head>
        <title>Skills - JVRCVR</title>
      </Head>
      <Navbar />
      {/* Tools */}
      <div className="main-skills col-span-12 text-center mx-auto">
        <div className="py-8 lg:py-16 px-4    w-max h-auto  ">
          <h2 className="text-5xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-7xl javier pb-5   ">
            Skills
          </h2>
          {/* skill box */}
          <div className="big-box md:flex  mt-5 ">
            {' '}
            {/* box 1 */}
            <div className="grid md:grid-flow-col mx-10 shadow bg-slate-200 animate__animated animate__fadeInTopLeft opacity-3 mt-5 rounded-xl justify-center">
              {/* item list */}
              <div className="sm:col-span-2 p-10 text-xl">
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>HTML5 </h2>
                  <div className="w-10">
                    <Image
                      src={skill1}
                      className=" rounded-lg  hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>

                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>CSS3</h2>
                  <div className="w-10">
                    <Image
                      src={skill2}
                      className=" rounded-lg  hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>JavaScript</h2>
                  <div className="w-10">
                    <Image
                      src={skill3}
                      className=" rounded-lg  hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                  <div id="container">{}</div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>SASS</h2>
                  <div className="w-10">
                    <Image
                      src={skill4}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>Tailwind</h2>
                  <div className="w-10">
                    <Image
                      src={skill5}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>React</h2>
                  <div className="w-10">
                    <Image
                      src={skill6}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
              </div>
            </div>
            {/* box1 */}
            {/* box2 */}
            <div className="grid md:grid-flow-col mx-10 bg-slate-200 opacity-3 mt-5 rounded-xl justify-center animate__animated animate__fadeInTopRight">
              {/* item list */}
              <div className="sm:col-span-2 p-10 text-xl">
                {/* idv item */}
                <div className="flex items-center  justify-center ">
                  <h2>Next.js</h2>
                  <div className="w-7">
                    <Image
                      src={skill7}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>

                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>Bootstrap</h2>
                  <div className="w-7 mt-2">
                    <Image
                      src={skill8}
                      className=" rounded-lg ml-1  hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>Wordpress</h2>
                  <div className="w-7 mt-2">
                    <Image
                      src={skill9}
                      className=" rounded-lg ml-1 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                  <div id="container">{}</div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>Git</h2>
                  <div className="w-10 mt-1">
                    <Image
                      src={skill10}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2>Netlify</h2>
                  <div className="w-7 mt-2">
                    <Image
                      src={skill11}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
                <div className="flex items-center justify-center ">
                  <h2 className="mt-1.5">npm</h2>
                  <div className="w-7 mt-2">
                    <Image
                      src={skill12}
                      className=" rounded-lg ml-2 hvr-wobble-vertical transition duration-300 ease-in-out"
                      layout="responsive"
                      alt="developer-image"
                    />
                  </div>
                </div>
                {/* idv item */}
              </div>
            </div>
            {/* box2 */}
          </div>
        </div>
      </div>

      {/* end section */}
    </section>
  );
}
export default Skills;
