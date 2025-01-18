import Contacts from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbars from "@/components/Navbars";
import { Portofolios } from "@/components/Portofolio";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbars />
      <Hero />
      <Portofolios />
      <Contacts />
    </>
  );
}
