"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Portfolio() {
  const openWA = () => {
    const text = encodeURIComponent("Halo Iky, saya tertarik bekerja sama 👋");
    window.open(`https://wa.me/6281326305609?text=${text}`, "_blank");
  };

  return (
    <main className="bg-neutral-950 text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">
            Iky<span className="text-green-400">Devs</span>
          </span>
          <ul className="hidden md:flex gap-8 text-sm text-neutral-300">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Project", href: "#project" },
              { label: "Skill", href: "#skill" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-green-400">Iky</span>
          </h1>
          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            Frontend Developer focused on modern UI, animation, and performance.
          </p>
          <motion.button
            onClick={openWA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 bg-green-500 rounded-full text-black font-medium"
          >
            Contact via WhatsApp
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 max-w-6xl mx-auto" id="about">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl mb-10"
        >
          About Me
        </motion.h2>
        <p className="text-neutral-400 max-w-3xl">
          Saya adalah frontend developer yang fokus membangun website modern
          menggunakan Next.js, Tailwind CSS, dan animasi Framer Motion. Saya
          suka UI elegan, clean, dan interaktif.
        </p>
      </section>

      {/* PROJECT */}
      <section className="py-32 px-6 bg-neutral-900" id="project">
        <motion.h2 className="text-3xl mb-16 text-center">Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-neutral-800 rounded-3xl p-6"
            >
              <h3 className="text-xl mb-2">Project { i }</h3>
              <h1>Boddington Villas</h1>
              <p className="text-neutral-400 text-sm">
                Landing page modern dengan animasi smooth.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-32 px-6 max-w-6xl mx-auto" id="skill">
        <motion.h2 className="text-3xl mb-16 text-center">Skills</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <FaReact className="text-5xl mx-auto" />
          <SiNextdotjs className="text-5xl mx-auto" />
          <SiTailwindcss className="text-5xl mx-auto" />
          <FaNodeJs className="text-5xl mx-auto" />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 bg-neutral-900 text-center" id="contact">
        <motion.h2 className="text-3xl mb-10">Let's Work Together</motion.h2>
        <motion.button
          onClick={openWA}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 bg-green-500 text-black px-10 py-4 rounded-full text-lg font-medium"
        >
          <FaWhatsapp /> Chat via WhatsApp
        </motion.button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-neutral-500 text-sm">
        © 2026 IkyDevs
      </footer>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
