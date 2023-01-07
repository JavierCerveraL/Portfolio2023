import React from 'react';
import Navbar from '../components/Navbar';
import web1 from '../public/web1.png';
import web2 from '../public/web 2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
    <div>
      <section className="flex gap-6 w-full bg-slate-900 " id="projects">
        <Navbar />
        <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
          <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-7xl javier  pb-5 text-center ">
            Projects
          </h3>

          <div className="big-box  flex gap-16 flex-wrap  ">
            <div className="grid md:grid-flow-col   animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl justify-center w-80 lg:w-auto">
              <Link href="https://notflixdb.netlify.app/" target="_blank">
                <Image
                  src={web1}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </Link>
            </div>
            <div className="grid md:grid-flow-col  bg-slate-200 animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl  w-80 lg:w-auto ">
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
              </Link>
            </div>
            <div className="grid md:grid-flow-col  bg-slate-200 animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-80 lg:w-auto">
              <Link href="https://tatilazobeauty.com/" target="_blank">
                <Image
                  src={web3}
                  className=" rounded-lg object-cover   hover:scale-110 transition duration-300 ease-in-out"
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  alt="developer-image"
                />
              </Link>
            </div>
            <div className="grid md:grid-flow-col bg-slate-200 animate__animated animate__fadeIn opacity-3 mt-5 rounded-xl w-80 lg:w-auto ">
              <Link
                href="https://javiercerveral.github.io/dentia-merida/"
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;
