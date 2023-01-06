import React from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <div>
      <section className=" grid grid-flow-col  w-full bg-neutral-900 ">
        <Navbar />
        {/* {Contact form} */}

        <section className="col-span-12 ">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h3 className="text-3xl text-stone-900 font-semibold  text-center pt-16 pb-5 dark:text-white font-good">
              CONTACT ME
            </h3>

            <form
              action="https://formspree.io/f/xknawryd"
              method="POST"
              className="space-y-8"
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                  className="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Email"
                  name="Email"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg shadow-sm border border-stone-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                  className="py-5 px-8 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-red-600
                to-rose-800   ml-8  "
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
