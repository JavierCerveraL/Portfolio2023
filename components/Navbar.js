import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaTools } from 'react-icons/fa';
import * as ReactDOM from 'react-dom';

import { BiCookie, BiHome, BiUserPin, BiChat, BiBuoy } from 'react-icons/bi';
// import { checkIsManualRevalidate } from 'next/dist/server/api-utils';
import Image from 'next/image';

export default function Navbar() {
  const menu = [
    { name: 'Home', link: '/', icon: BiHome },
    { name: 'About Me', link: '/Me', icon: BiUserPin },
    { name: 'Tools', link: '/Skills', icon: FaTools },
    { name: 'Projects', link: '/Projects', icon: BiCookie },
    { name: 'Contact Me', link: '/Contact', icon: BiChat },
  ];
  const [open, setOpen] = useState(true);

  return (
    // navbar
    <div
      className={`text-gray-50 bg-slate-800 min-h-screen    border-r-slate-100      ${
        open ? 'w-16' : 'w-16'
      } duration-1000 `}
    >
      {/* Burger button */}
      <div className="py-3 flex justify-center logo bg-red-700 hover:text-slate-700 text-xl rounded  shadow-lg">
        <h1 className="shadow-lg"> JVR</h1>
        {/* <Image
          className="cursor-pointer mr-4 hvr-icon  text-neutral-200 pulse
          navbar-toggler "
          src={'/pngwing.com.png'}
          width={40}
          height={30}
          onClick={() => setOpen(!open)}
        /> */}
      </div>
      {/* <div className="flex justify-center items-center relative ">
        <Image
          className={`   bg-slate-200   rounded-full duration-500${
            !open && 'opacity-0 translate-x-28  relative hidden'
          }`}
          src={'/cartoon-nobg.png'}
          width={100}
          height={100}
          alt="developer-image"
        />
      </div> */}

      {/* Links */}
      <div className="   m-4 flex flex-col gap-4 mt-10 gap-y-16  relative">
        {menu?.map((menu, i) => (
          <Link
            key={i}
            className=" hover:bg-red-500 p-2 group rounded-sm flex items-center gap-3.5 font-medium "
            href={menu?.link}
          >
            <div>{React.createElement(menu?.icon, { size: '22' })}</div>
            {/* 
            <h2
              style={{ transitionDelay: `${i + 3}00ms ` }}
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2> */}
            <h2
              className={` absolute left-48 bg-white font-semibold whitespace-pre text-slate-900 w-0 overflow-hidden rounded-md  drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1  group-hover:left-14  group-hover:duration-300 group-hover:w-fit `}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
