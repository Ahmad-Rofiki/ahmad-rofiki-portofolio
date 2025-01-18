"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "portofolio",
    path: "#portofolio",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbars = () => {
  const [nav, setNav] = useState(false);
  const toogleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className=" z-50 fixed flex justify-center w-full text-white font-bold">
      <div className="border border-slate-400/20 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
        <ul className="flex flex-row p2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={toogleNav}
        className="md:hidden absolute top-5 right-14 border border-white z-50 text-white/70 p-2"
      >
        {nav ? (
          <AiOutlineClose size={20} className="text-white" />
        ) : (
          <AiOutlineMenu size={20} className="text-white" />
        )}
      </div>
      <div
        onClick={toogleNav}
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300  ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-5xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbars;
