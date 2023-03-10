import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Me - JVRCVR</title>
      </Head>
      <section
        className=" grid grid-flow-col  w-full bg-slate-900 "
        id="contact"
      >
        <Navbar />
        {/* {Contact form} */}

        <section className="col-span-12  ">
          <div className="py-8 lg:py-16 px-5 pr-10 mx-auto max-w-screen-sm">
            <h3 className="text-5xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-6xl javier pb-5 lg:pb-10 text-center  ">
              CONTACT ME
            </h3>

            <form
              action="https://formspree.io/f/xknawryd"
              method="POST"
              className="space-y-2 md:space-y-1  lg:space-y-8 "
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-stone-900 bg dark:text-stone-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-200 dark:border-stone-600 dark:placeholder-stone-900 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your name"
                  name="Name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-slate-200 dark:border-stone-600 dark:placeholder-stone-900 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Email"
                  name="Email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-100"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg shadow-sm border border-stone-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-200 dark:border-stone-600 dark:placeholder-stone-900 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  name="Message"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div
                className="flex justify-center
              "
              >
                <button
                  type="submit"
                  className="py-2 px-8 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-red-600
                to-rose-800   ml-8 mt-2 "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Contact;
