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
    { name: 'Who Am I', link: '/Me', icon: BiUserPin },
    { name: 'Tools', link: '/Skills', icon: FaTools },
    { name: 'Projects', link: '/Projects', icon: BiCookie },
    { name: 'Contact Me', link: '/Contact', icon: BiChat },
  ];
  const [open, setOpen] = useState(true);

  return (
    // navbar
    <div
      className={`text-gray-50 bg-slate-800 min-h-screen    border-r-slate-100      ${
        open ? 'w-64' : 'w-16'
      } duration-1000 `}
    >
      {/* Burger button */}
      <div className="py-3 flex justify-end   ">
        <BiBuoy
          size={26}
          className="cursor-pointer mr-4 hvr-icon bg-slate-900  text-neutral-200 rounded-full navbar-toggler "
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        />
        {/* <Image
          className="cursor-pointer mr-4 hvr-icon  text-neutral-200 pulse
          navbar-toggler "
          src={'/pngwing.com.png'}
          width={40}
          height={30}
          onClick={() => setOpen(!open)}
        /> */}
      </div>
      <div className="flex justify-center items-center relative ">
        <Image
          className={`   bg-slate-200   rounded-full duration-500${
            !open && 'opacity-0 translate-x-28  relative hidden'
          }`}
          src={'/cartoon-nobg.png'}
          width={100}
          height={100}
          alt="developer-image"
        />
      </div>

      {/* Links */}
      <div className="   m-4 flex flex-col gap-4  relative">
        {menu?.map((menu, i) => (
          <Link
            key={i}
            className=" hover:bg-red-500 p-2 rounded-sm flex items-center gap-3.5 font-medium "
            href={menu?.link}
          >
            <div>{React.createElement(menu?.icon, { size: '20' })}</div>

            <h2
              style={{ transitionDelay: `${i + 3}00ms ` }}
              className={`whitespace-pre duration-500 ${
                !open && 'opacity-0 translate-x-28 overflow-hidden'
              }`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
