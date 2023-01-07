import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

function AboutMe() {
  return (
    <div>
      <Head>
        <title>About me - JVRCVR</title>
      </Head>
      <section className="flex gap-6 w-full bg-slate-900" id="me">
        <Navbar />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className="text-5xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-7xl javier pb-5 text-center  ">
            About Me
          </h3>
          <div className="big-box md:flex  mt-5 ">
            {' '}
            {/* box 1 */}
            <div className="grid md:grid-flow-col mx-2 p-5 bg-slate-200 animate__animated animate__backInUp opacity-3 mt-5 rounded-lg justify-center">
              <p className="text-lg ">
                My name is <strong>Javier Cervera Lopez</strong>, born and
                raised in Mexico. After working more than 5 years in the
                hospitality industry I decided to give my career a 180 degree
                change. <br />
                <br />
                After days of researching about the IT industry and how and
                where to start programing, I found JavaScript and started to
                learn the basic of it. But first my learning journey started
                with the <strong> Responsive Web Design </strong>course from
                FreeCodeCamp.com. After finishing it and with a basic knowledge
                of HTML and CSS, I got enrolled into the{' '}
                <strong> Web Developement </strong>
                course from CoderHouse.com which helped me understand more and
                kept me motivated. <br />
                <br />
                Now after having my first interview experience for a Wordpress
                Developement position, I consider myself capable of building
                responsive and beautiful website designs with tools like
                Tailwind, React, and many other libraries.
                <br />
                <br />
                There is still a lot to learn but I know this is just the
                beginning. <br />
                <small className="text-right mt-14">- jvr</small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
