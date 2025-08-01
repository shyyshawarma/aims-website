// app/page.jsx (or pages/index.jsx)
"use client";
import React from "react";
import { Inter } from "next/font/google";
import AboutUs from "../components/aboutUs";
import NFTMarketplace from "../components/cards";
import ChooseUs from "../components/chooseUs";
import CryptoSection from "../components/crypto";
import Blob from "../components/blob";


const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export default function Home() {
  return (
    <main className={`${inter.className} z-10 bg-black text-white relative min-h-screen`}>
      {/* Blobs Background */}
      <div className="relative inset-0 -z-50">
        <Blob className="top-30 left-20 w-64 h-64 bg-[#1000DE]/30" />
        <Blob className="top-40 right-50 w-90 h-80 bg-[#1000DE]/30" />
        
        <Blob className="top-120 right-200 w-96 h-64 bg-[#1000DE]/30 " />
        <Blob className="top-130 right-2 w-96 h-64 bg-[#1000DE]/30 " />
        {/* New Bottom Center Blob */}
        <Blob className="bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#1000DE]/25" />
      </div>



      {/* Page Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6">
          <nav className="flex items-center justfy-center gap-50">
            {/* Logo */}
            <a href="#!" className="flex items-center space-x-2 flex-shrink-0">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="text-xl font-bold whitespace-nowrap">AIMS DTU</span>
            </a>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-900/50 border border-gray-700/50 rounded-full px-2 py-1 mx-4">
              <a href="https://google.com" className="px-4 py-2 text-sm font-medium bg-gray-700/50 rounded-full whitespace-nowrap">Upward Studio</a>
              <a href="#!" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center whitespace-nowrap">
                Our Services
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <a href="#!" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Team</a>
              <a href="#!" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#!" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">AI</a>
            </div>

         
          </nav>
        </header>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center py-24 sm:py-32 lg:py-48">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-7xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-white">
              AIMS-
              <span className="relative inline-block text-yellow-400">
                DTU
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292 22" className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-auto">
                  <path d="M1.5 15.5C21.33 7.67 86.83 4.17 290.5 13.5" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-4xl mx-auto text-lg sm:text-xl text-gray-300/80 leading-8">
              Turn your idea into a thriving digital product. With our hands-on support in strategy, design, and development, we'll craft a platform that ensures your launch is nothing short of remarkable. Ready to make it happen?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#!" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-200 shadow-lg shadow-gray-800/20">
                Start today
                <svg className="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Global Styles for Blobs Animation */}
      <style jsx global>{`
       
        }
        html, body {
    overflow-x: hidden; 
    overflow-y: auto;   
  }

        
      `}</style>
      <NFTMarketplace />
      <CryptoSection />
      <ChooseUs />
      <AboutUs />
    </main>

  );
}
