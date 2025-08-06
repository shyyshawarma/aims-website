// app/page.jsx (or pages/index.jsx)
"use client";
import React from "react";
import  ResearchShowcase  from "../components/research-showcase.jsx";
import { Inter } from "next/font/google";
import TeamsContact from "../components/teams-contact";
import Blob from "../components/blob";
import NavbarDemo from "../components/NavbarDemo";
import {SpotlightNewDemo} from "../components/SpotlightNewDemo";
import {TimelineDemo} from "../components/timeline";
import Section from "../components/Section";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function Home() {
 
    return (
    <main className={`${inter.className} bg-black text-white relative min-h-screen`}>
      {/* ✅ Floating Navbar - stays fixed */}
      <NavbarDemo />

      {/* ✅ Blobs */}
      <div className="relative inset-0 z-0">
        <Blob className="top-0 left-0 scale-200" />
        <Blob className="top-20 right-30" />
        <Blob className="top-120 right-200 w-96 h-64" />
        <Blob className="top-130 right-2 w-96 h-64" />
      </div>

      
      <SpotlightNewDemo />
      <Section />
      <TimelineDemo />
      {/* <TeamsContact /> */}
      <ResearchShowcase />
     


      <style jsx global>{`
        html, body {
          overflow-x: hidden; 
          overflow-y: auto; 
        }
      `}</style>
      
     
     
    </main>
  );
        

}
