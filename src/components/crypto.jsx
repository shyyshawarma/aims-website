"use client";

import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import Blob from "@/components/blob";

export default function CryptoSection() {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center font-manrope overflow-hidden">
        <Blob className="top-0 left-0 w-96 h-64 bg-[#1000DE]/30 z-20" />
  <Blob className="top-170 left-10 w-96 h-64 bg-[#1000DE]/30 z-30" />
  <Blob className="top-0 right-0 w-96 h-64 bg-[#1000DE]/30 z-30" />
   <Blob className="top-100 right-0 w-96 h-64 bg-[#1000DE]/30 z-30" />
    <Blob className="top-170 right-0 w-96 h-64 bg-[#1000DE]/30 z-30" />

      {/* === Main Content Box === */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-10 sm:px-12 sm:py-14 bg-[#010317]/5 backdrop-blur-md rounded-3xl shadow-2xl text-white border border-blue-800/20">

        {/* === Header === */}
        <header className="flex flex-col mb-16 space-y-8 overflow-hidden">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter font-clash-display hover:text-blue-500 transition-colors duration-300">
              Trending Crypto
            </h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-4xl leading-none">/</span>
              <div className="flex flex-col leading-tight text-gray-400 text-sm">
                <span>Making Magic</span>
                <span>Happen</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end pr-0 md:pr-16 w-full">
            <div className="flex items-center space-x-6">
              <div className="bg-blue-700 p-3 rounded-full shadow-lg hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.5)] transition-all duration-300">
                <Play fill="white" className="text-white w-6 h-6" />
              </div>
              <div className="text-base text-gray-400 hidden lg:block">
                /Start <br /> /Invest <br /> /Collect
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-clash-display hover:text-blue-400 transition-colors duration-300">
                Market News
              </h2>
            </div>
          </div>
        </header>

        {/* === Main Grid === */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Text Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-80 items-center">
            <h3 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tighter font-clash-display hover:text-blue-500 transition duration-300">
              <span className="whitespace-nowrap">Find Modern</span> <br />
              <span className="whitespace-nowrap">
                Art on <span className="text-blue-400">NFT</span>
              </span> <br />
              Platforms
            </h3>
            <p className="text-gray-400 ml-35 hover:text-white transition duration-300">
              Invest in creativity that stands the test of time, uniquely yours in the NFT space.
            </p>
          </div>

          {/* Blue Lady Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/blue_lady.png"
              alt="Blue Lady"
              width={600}
              height={400}
              className="rounded-2xl object-cover w-4/5 h-full shadow-lg hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(96,165,250,0.3)] transition-transform duration-500"
            />
          </div>

          {/* NFT Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/nft.png"
              alt="NFT"
              width={600}
              height={400}
              className="rounded-2xl object-contain w-full h-full shadow-lg hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(96,165,250,0.3)] transition-transform duration-500"
            />
          </div>

          {/* Stats Section */}
          <div className="flex flex-col justify-between items-start relative h-full min-h-[300px]">
            <div className="flex items-center pl-1">
              <h4 className="text-8xl lg:text-9xl font-extrabold tracking-tighter font-clash-display hover:text-blue-400 transition duration-300">
                100%
              </h4>
              <span className="ml-6 text-lg text-gray-400 leading-tight">
                Secure <br /> Copyright
              </span>
            </div>

            <div className="mt-8 mb-12 pl-1">
              <p className="text-4xl font-extralight leading-tight font-clash-display hover:text-blue-500 transition duration-300">
                Art in the Age <br /> of Blockchain
              </p>
            </div>

            <div className="absolute bottom-0 right-0 p-3 border-2 border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:shadow-[0_0_20px_5px_rgba(96,165,250,0.4)] transition-all duration-300 cursor-pointer">
              <ArrowRight className="text-white w-6 h-6" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
