import { Html, Head, Main, NextScript } from 'next/document';
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
import Image from 'next/image';
import Navbar from '../components/Navbar';
function Skills() {
  return (
    <section className="grid gap-6 w-full bg-neutral-900 grid-flow-col overflow-x-hidden">
      <Navbar />
      {/* Tools */}
      <div className="mt-10  ">
        <h3 className="text-3xl text-stone-900 font-semibold  py-1 pt-5 pb-7 dark:text-white font-good">
          TOOLS AND SKILSS
        </h3>

        <div className="  gap-24 py-5  grid grid-cols-3 md:grid-cols-4 xs:grid-cols-3   text-stone-900 font-semibold  pt-1 dark:text-white ">
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill1}
              className=" rounded-lg  hvr-wobble-vertical transition duration-300 ease-in-out"
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill2}
              className=" rounded-lg object-cover  hvr-wobble-vertical  transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill3}
              className=" rounded-lg object-cover   hvr-wobble-skew  transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill4}
              className=" rounded-lg object-cover  hvr-buzz-out  transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1  grid content-center  ">
            <Image
              src={skill5}
              className=" rounded-lg object-cover hvr-buzz-out   transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill6}
              className=" rounded-lg object-cover  hvr-buzz  hover:scale-110 transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill7}
              className=" rounded-lg object-cover hvr-buzz   hover:scale-110 transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill8}
              className=" rounded-lg object-cover  hvr-wobble-vertical transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
          <div className="basis-1/2 flex-1 ">
            <Image
              src={skill9}
              className=" rounded-lg hvr-skew object-cover   hover:scale-110 transition duration-300 ease-in-out"
              width={'100%'}
              height={'100%'}
              layout="responsive"
              alt="developer-image"
            />
          </div>
        </div>
      </div>
      {/* end section */}
    </section>
  );
}
export default Skills;
