"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Locations from "@/components/Locations";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Approach />
        <Experience />
        <Skills />
        <Locations />
        <Education />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;