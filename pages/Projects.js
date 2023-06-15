import React from 'react';
import Navbar from '../components/Navbar';
import web1 from '../public/web1.png';
import web2 from '../public/web 2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Projects() {
  return (
    <div>
      <Head>
        <title>Projects - JVRCVR</title>
      </Head>
      <section className="flex justify-center gap-2 w-full bg-slate-900 " id="projects">
        <Navbar />
        <div className="py-8 lg:py-6 px-4 md:px-2 mx-auto max-w-screen-md">
          <h3 className="text-xl lg:text-6xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-6xl javier  pb-10 text-center ">
            Projects
          </h3>

          <div className="big-box  flex gap-8 flex-wrap justify-center   ">
            <div className="grid md:grid-flow-col   animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl justify-center w-60 lg:w-auto">
              <Link href="https://sumrazer.netlify.app/" target="_blank">
                <Image
                  src={web1}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Article Summarizer </h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'>Web application use to summarize websites. Use of React, RapidApi, Redux Toolkit. </p>
                </div>
              </Link>
            </div>
            <div className="grid md:grid-flow-col   animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-60  lg:w-auto ">
              <Link
                href="https://notflixdb.netlify.app/"
                target="_blank"
              >
                <Image
                  src={web4}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                         <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Movie Database </h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'>Movie Database </p>
                </div>     
              </Link>
            </div>
            <div className="grid md:grid-flow-col   animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-60 lg:w-auto">
              <Link href="https://tatilazobeauty.com/" target="_blank">
                <Image
                  src={web3}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                                                <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Beauty Services Website</h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'>  </p>
                </div>          
              </Link>
            </div>
            <div className="grid md:grid-flow-col  animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-60 lg:w-auto ">
              <Link
                href="https://yasc-test.netlify.app/"
                target="_blank"
              >
                <Image
                  src={web5}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                                         <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Dashboard / Social Media App Front End </h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'> </p>
                </div>     
              </Link>
            </div>
            <div className="grid md:grid-flow-col  animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-60 lg:w-auto ">
              <Link
                href="https://alejandromaldonado.netlify.app/"
                target="_blank"
              >
                <Image
                  src={web6}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                                         <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Architecture Portfolio </h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'> </p>
                </div>     
              </Link>
            </div>
            <div className="grid md:grid-flow-col  animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-60 lg:w-auto ">
              <Link
               href="https://javiercerveral.github.io/sucre/"
                target="_blank"
              >
                <Image
                  src={web2}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
                                         <div className='w-full bg-grad-skills rounded-b-md rounded-t-sm pb-2 relative  mt-2  '>
                  <h3 className='text-stone-100 font-medium text-xl border-b border-white border-solid text-center'>Ice Cream Shop Landing Page </h3><hr/>
                  <p className='text-stone-100 mt-2 p-2 font-normal'> </p>
                </div>     
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;
