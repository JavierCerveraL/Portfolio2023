import React from 'react';
import Navbar from '../components/Navbar';

function Projects() {
  return (
    <div>
      <section className="flex gap-6 w-full bg-slate-900">
        <Navbar />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-red-500 md:text-7xl javier pb-5   ">
            Projects
          </h3>
        </div>
      </section>
    </div>
  );
}
export default Projects;
