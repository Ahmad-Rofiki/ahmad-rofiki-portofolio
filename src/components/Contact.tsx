"use client";

import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { animate } from "motion";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";

const gradient = ["#f72585", "#7209b7", "#3a0ca3", "#81BFDA"];

export default function Contacts() {
  const color = useMotionValue(gradient[0]);

  useEffect(() => {
    animate(color.get(), gradient, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 50% at 50% 00%,#000 70%, ${color} 90% ,#000 )`;

  return (
    <motion.section
      style={{ backgroundImage }}
      id="contact"
      className="py-32 text-white  mx-auto px-4 flex justify-center items-center  min-h-screen"
    >
      <div className="space-y-12 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl  font-bold text-white/50 flex justify-center items-center text-center gap-2"
        >
          Get <span className="text-fuchsia-500"> READY?</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="p-8 rounded-2xl space-y-8"
        >
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-white/50">Contact Me</h1>
            <p className="text-lg font-semibold flex items-center gap-2">
              @ Email{" "}
              <span>
                <AiOutlineMail />
              </span>
            </p>
            <Link
              href="https://mail.google.com/mail/u/0/#inbox"
              className="text-2xl font-semibold transition- duration-300 flex items-center gap-2 hover:text-fuchsia-500"
            >
              ahmadrofiki6146@gmail.com
              <span>
                <FaArrowTrendUp />
              </span>
            </Link>
          </div>

          <h1 className="text-2xl font-semibold text-white/50 items-center text-center">
            leave me a message
          </h1>

          <div className="flex flex-col lg:flex-row items-center text-center gap-5 justify-center">
            <form action="">
              <label>Email</label>
            </form>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white/20 w-96 h-20 mt-2 rounded-xl text-white/50 p-5"
            />
            <form action="">
              <label htmlFor="">Message</label>
            </form>
            <input
              type="text"
              name="text"
              id="text"
              className="bg-white/20 w-96 h-20 mt-2 rounded-xl text-white/50 p-5"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="items-center text-center flex gap-2 justify-center mt-10 bg-fuchsia-500 p-5 rounded-xl mx-auto"
          >
            Send{" "}
            <span>
              <GiSelfLove />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
