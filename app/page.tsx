"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FastQuote from "@/components/FastQuote";
import About from "@/components/About";
import Pillars from "@/components/Pillarts";
import Realizations from "@/components/Realizations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// ══════ DANE WSPÓŁDZIELONE ══════
const logoUrl =
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/495335756_122094223904876885_3195785698321049331_n.jpg?stp=dst-jpg_tt6&cstp=mx599x598&ctp=s599x598&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uC1qdx8pPi8Q7kNvwGaiNTa&_nc_oc=AdopN10ikMbrD6-FJpyYpu7-guWvCzUqGmBOOUwqXFht43JP0OFL0B96PhDxQ0QfQA0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=XhfdQuo86sJ0t_Iy32FnxQ&_nc_ss=7b2a8&oh=00_AQHLFdu_Q9FPwaqRIlQpFNGNB68hC-G73rzDVuU9GkdgmQ&oe=6A79F8B8";

const navLinks = [
  { label: "Oferta", href: "#oferta" },
  { label: "O nas", href: "#o-nas" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  { title: "Wykończenia pod klucz" },
  { title: "Remonty generalne" },
  { title: "Adaptacja wnętrz" },
  { title: "Projektowanie wykonawcze" },
];

// ══════ STRONA ══════
const page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // ZWRÓĆ UWAGĘ NA TE KLASY PONIŻEJ - DODANY WARIANT dark:
    <div className="bg-white dark:bg-[#050505] text-neutral-900 dark:text-white font-sans antialiased selection:bg-[#2563EB] selection:text-white overflow-x-hidden transition-colors duration-300">
      <TopBar />
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <Stats />
      <Services />
      <FastQuote />
      <About />
      <Pillars />
      <Realizations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
