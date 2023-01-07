import React from 'react';
import Navbar from '../components/Navbar';

function Me() {
  return (
    <div>
      <section className="flex gap-6 w-full bg-slate-900" id="me">
        <Navbar />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className="text-5xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-7xl javier pb-5   ">
            About Me
          </h3>
        </div>
      </section>
    </div>
  );
}
export default Me;
