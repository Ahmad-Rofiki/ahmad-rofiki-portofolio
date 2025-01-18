"use client";

import React, { useEffect, useState } from "react";
import comingsoon from "../../public/5.png";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { animate } from "motion";

const project = [
  {
    id: 1,
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo tempora atque dicta, eos nihil repellat cumque quis, quasi quaerat, earum minima ipsum. Cumque maxime error deleniti odit! Natus, quo.",
    image: comingsoon,
  },
  {
    id: 2,
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo tempora atque dicta, eos nihil repellat cumque quis, quasi quaerat, earum minima ipsum. Cumque maxime error deleniti odit! Natus, quo.",
    image: comingsoon,
  },
  {
    id: 3,
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo tempora atque dicta, eos nihil repellat cumque quis, quasi quaerat, earum minima ipsum. Cumque maxime error deleniti odit! Natus, quo.",
    image: comingsoon,
  },
  {
    id: 4,
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo tempora atque dicta, eos nihil repellat cumque quis, quasi quaerat, earum minima ipsum. Cumque maxime error deleniti odit! Natus, quo.",
    image: comingsoon,
  },
  {
    id: 5,
    title: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo tempora atque dicta, eos nihil repellat cumque quis, quasi quaerat, earum minima ipsum. Cumque maxime error deleniti odit! Natus, quo.",
    image: comingsoon,
  },
];

const COLORS_TOP = ["#f72585", "#7209b7", "#3a0ca3", "#81BFDA"];

export const Portofolios = () => {
  const [selectedProject, setSelectedProject] = useState(project[0]);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color.get(), COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(100% 50% at 0% 50%,#000 70%, ${color} 90% ,#000 )`;

  return (
    <motion.section
      id="portofolio"
      style={{
        backgroundImage,
      }}
      className="py-32 flex flex-col justify-center items-center text-white  mx-auto "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center flex-col items-center">
          <div className="px-4 grid lg:grid-cols-2 gap-5">
            <h2 className=" text-center text-4xl font-bold mb-10 items-center flex justify-center">
              All <span className="text-fuchsia-500">Project</span>
            </h2>

            <div>
              {project.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="cursor-pointer mb-8 group"
                >
                  <h1
                    className={`text-3xl font-semibold group-hover:text-slate-400 transition-colors duration-300 ${
                      selectedProject.id === item.id ? "text-fuchsia-500" : ""
                    }`}
                  >
                    {item.title}
                  </h1>
                  {selectedProject.id === item.id && (
                    <div className="border-b-2 border-fuchsia-500 my-4 "></div>
                  )}
                  {selectedProject.id === item.id && (
                    <div className="flex justify-center text-center items-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={200}
                      />

                      <div className="flex items-center flex-col">
                        <p className="text-slate-400 transition-all duration-500 ease-in-out">
                          {item.desc}
                        </p>
                        <div className="flex gap-5 mt-2">
                          <motion.button
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatType: "loop",
                              ease: "easeInOut",
                            }}
                          >
                            <AiOutlineGithub className="text-5xl" />
                          </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <h1 className="text-2xl bg-white/10 p-2 rounded-lg text-fuchsia-500 font-semibold">
                              Demo
                            </h1>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
