"use client";
import { animate } from "motion";
import { useMotionTemplate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../../public/2.png";
import astronot from "../../public/1.png";
import astronot3 from "../../public/4.png";

import Image from "next/image";
import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlinePython,
  AiOutlineTikTok,
} from "react-icons/ai";
import Link from "next/link";
import { FaDartLang, FaFlutter, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { DiFirebase, DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const gradient = ["#f72585", "#7209b7", "#3a0ca3", "#81BFDA"];
export default function Hero() {
  const color = useMotionValue(gradient[0]);

  useEffect(() => {
    animate(color.get(), gradient, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 50% at 50% 100%,#000 70%, ${color} 90% ,#000 )`;
  const borders = useMotionTemplate`1px solid ${color}`;
  const boxShadows = useMotionTemplate`0px 4px 24px #fff ${color}`;

  const stack = [
    {
      id: 1,
      alt: "React",
      src: <FaReact />,
    },
    {
      id: 2,
      alt: "Flutter",
      src: <FaFlutter />,
    },
    {
      id: 3,
      alt: "Dart",
      src: <FaDartLang />,
    },
    {
      id: 4,
      alt: "Python",
      src: <AiOutlinePython />,
    },
    {
      id: 5,
      alt: "NextJs",
      src: <RiNextjsFill />,
    },
    {
      id: 6,
      alt: "GraphQl",
      src: <GrGraphQl />,
    },
    {
      id: 7,
      alt: "Firebase",
      src: <DiFirebase />,
    },
    {
      id: 8,
      alt: "Java Script",
      src: <DiJavascript />,
    },
    {
      id: 9,
      alt: "Type Script",
      src: <SiTypescript />,
    },
    {
      id: 10,
      alt: "node Js",
      src: <FaNodeJs />,
    },
  ];

  return (
    <motion.section
      style={{ backgroundImage }}
      className="py-5 relative flex flex-col justify-center items-center text-white  mx-auto "
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="z-10 flex flex-col items-center text-center ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className=" text-2xl font-black mt-10 text-white/60"
          >
            HI THERE, IM
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
            className="  md:text-6xl text-4xl leading-tight font-bold  text-white/70 "
          >
            IM{" "}
            <span className="hover:text-violet-400 duration-500 transition-all ease-in-out ">
              TIYAZ
            </span>
            KURNIASIH
          </motion.h1>

          <motion.div
            className="absolute right-[360px] top-[170px]"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <Image
              src={astronot}
              width={100}
              height={200}
              alt="profile"
              className="rounded-full"
              draggable={false}
            />
          </motion.div>
          <motion.div
            className="absolute left-[320px] top-[70px]"
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <Image
              src={astronot3}
              width={100}
              height={190}
              alt="profile"
              className="rounded-full"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src={profile}
              width={250}
              height={250}
              alt="profile"
              className="rounded-full 
              w-40 h-auto mx-auto"
            />
          </motion.div>

          {/* LINK */}

          <div className="  flex  p-3 rounded-3xl justify-center items-center space-x-2 mb-2 flex-col mt-5 ">
            <div className="flex text-6xl">
              <Link href="https://github.com/Ahmad-Rofiki">
                <AiOutlineGithub
                  className={`hover:-translate-y-5 duration-200 transition-all ease-in-out `}
                />
              </Link>
              <Link href="https://www.instagram.com/rfky_rofiki/">
                <AiOutlineInstagram className="hover:-translate-y-5 duration-200 transition-all ease-in-out" />
              </Link>
              <Link href="https://www.tiktok.com/@rfky_rofiki">
                <AiOutlineTikTok className="hover:-translate-y-5 duration-200 transition-all ease-in-out" />
              </Link>
            </div>
            <p className="text-xl mt-5 items-center text-center max-w-sm lg:text-4xl lg:max-w-xl">
              all social media that you can see, if you are interested
            </p>
          </div>
          <motion.button
            style={{
              boxShadow: boxShadows,
              border: borders,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex w-fit text-3xl p-5 items-center gap-2 rounded-3xl  shadow-xl mb-5"
          >
            <h1>Download CV</h1>
            <AiOutlineDownload />
          </motion.button>
        </div>
        <div className=" opacity-80 ">
          <div className="mx-auto">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
              <motion.div
                className="flex gap-5"
                animate={{ translateX: "-50%" }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                {stack.map((item, index) => (
                  <div
                    key={index}
                    className="text-white items-center text-center flex justify-center gap-3"
                  >
                    <div className="text-3xl">{item.src}</div>
                    <h1>{item.alt}</h1>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
