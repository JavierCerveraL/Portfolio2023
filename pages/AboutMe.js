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
            <div className="grid md:grid-flow-col mx-2 p-5 bg-slate-300  animate__animated animate__backInUp  mt-5 rounded-lg justify-center">
              <p className="text-lg ">
                My name is <strong>Javier Cervera Lopez</strong>, born and
                raised in Mexico. After working more than 5 years in the
                hospitality industry, I decided to give my career a 180-degree
                change. <br />
                <br />
                After days of researching about the IT industry and how and
                where to start programming, i found JavaScript and started to
                learn the basics of it. The<strong> Responsive Web Design </strong>course from
                FreeCodeCamp.org was the first course i took. After finishing it and with a basic knowledge
                of HTML and CSS, I got enrolled into the
                <strong> Web Development  </strong>
                course from CoderHouse.com which helped me understand more concepts and
                kept me motivated. <br />
                <br />
                Though I may not possess a formal degree, I have spent significant time honing my web development skills through self-study and hands-on experience. I have consistently sought out opportunities to expand my knowledge and stay updated with the latest industry trends and technologies. My dedication to continuous learning has enabled me to acquire a good proficiency in various coding languages such as HTML, CSS, JavaScript and other frameworks.<br/> 
                <br/> 
                What I lack in formal education, I make up for with my ambition and determination. I am always striving to improve my skills and stay ahead of industry advancements. I am an avid learner, always seeking out online courses, tutorials, and networking opportunities to enhance my technical expertise. 
                <br />
                <br />

              
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
