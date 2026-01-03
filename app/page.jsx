"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = React.useState("home");

  const [open, setOpen] = React.useState(false);
  const openWA = () => {
    const text = encodeURIComponent("Halo Iky, saya tertarik bekerja sama 👋");
    window.open(`https://wa.me/6281326305609?text=${text}`, "_blank");
  };

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-neutral-950 text-white overflow-x-hidden">
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg md:text-xl font-semibold">
            Iky<span className="text-green-400">Devs</span>
          </span>
          <ul className="hidden md:flex gap-8 text-sm text-neutral-300">
            {[
              { label: "Home", href: "#home", id: "home" },
              { label: "About", href: "#about", id: "about" },
              { label: "Project", href: "#project", id: "project" },
              { label: "Skill", href: "#skill", id: "skill" },
              { label: "Contact", href: "#contact", id: "contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative transition ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/90 backdrop-blur border-t border-white/10"
            >
              <ul className="flex flex-col items-center gap-6 py-8">
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
                      onClick={() => setOpen(false)}
                      className="text-lg text-neutral-300 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 scroll-mt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl font-bold"
          >
            Hi, I'm <span className="text-green-400">Iky</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-6 text-sm sm:text-base text-neutral-400"
          >
            Frontend Developer focused on modern UI, animation, and performance.
          </motion.p>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={openWA}
            className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 bg-green-500 rounded-full text-black font-medium"
          >
            Contact via WhatsApp
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-32 sm:py-40 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl mb-10">
            About Me
          </motion.h2>
          <motion.p variants={fadeUp} className="text-neutral-400 max-w-3xl">
            Saya adalah frontend developer yang fokus membangun website modern
            menggunakan Next.js, Tailwind CSS, dan animasi Framer Motion. Saya
            suka UI elegan, clean, dan interaktif.
          </motion.p>
        </motion.div>
      </section>

      {/* PROJECT */}
      <section
        id="project"
        className="py-32 sm:py-40 px-4 sm:px-6 bg-neutral-900 scroll-mt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="text-3xl mb-16 text-center">
            Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Landing Page – Promotion Website",
                image: "/images/1.png",
                link: "https://boddington-villas.vercel.app",
              },
              {
                title: "Modern Portfolio Website",
                image: "/images/1.png",
                link: "https://boddington-villas.vercel.app",
              },
              {
                title: "Booking Website UI",
                image: "/images/1.png",
                link: "https://boddington-villas.vercel.app",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.02 }}
                className="bg-neutral-800 rounded-3xl overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg mb-2">{project.title}</h3>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-green-400 text-sm hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section
        id="skill"
        className="py-32 sm:py-40 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl mb-16 text-center">
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[FaReact, SiNextdotjs, SiTailwindcss, FaNodeJs].map((Icon, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.15, rotate: 3 }}
                className="text-5xl mx-auto text-neutral-300"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 sm:py-40 px-4 sm:px-6 bg-neutral-900 text-center scroll-mt-24"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl mb-10">
            Let's Work Together
          </motion.h2>
          <motion.button
            variants={fadeUp}
            onClick={openWA}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-green-500 text-black px-10 py-4 rounded-full text-lg font-medium"
          >
            <FaWhatsapp /> Chat via WhatsApp
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-10 text-center text-neutral-500 text-sm"
      >
        © 2026 IkyDevs
      </motion.footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
