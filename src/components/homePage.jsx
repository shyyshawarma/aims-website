"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white antialiased">
      {/* Background blobs */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute rounded-full mix-blend-lighten blur-3xl opacity-60 animate-blob -z-40 blob-1 top-10 left-20 w-64 h-64 bg-[#1000DE]/40"></div>
        <div className="absolute rounded-full mix-blend-lighten blur-3xl opacity-60 animate-blob -z-40 blob-2 bottom-20 right-32 w-80 h-80 bg-[#1000DE]/30"></div>
        <div className="absolute rounded-full mix-blend-lighten blur-3xl opacity-60 animate-blob -z-40 blob-3 top-1/3 right-1/4 w-96 h-64 bg-[#1000DE]/20 rotate-45"></div>
      </div>

      {/* Page content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="py-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 flex-shrink-0">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-bold whitespace-nowrap">
                upward studio
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-900/50 border border-gray-700/50 rounded-full px-2 py-1 mx-4">
              <a className="px-4 py-2 text-sm font-medium bg-gray-700/50 rounded-full">
                Upward Studio
              </a>
              <a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white flex items-center">
                Our Services
                <svg
                  className="h-4 w-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
                Team
              </a>
              <a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
                Blog
              </a>
              <a className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">
                AI
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a className="px-5 py-2.5 text-sm font-semibold text-gray-900 bg-white rounded-lg hover:bg-gray-200">
                Contact Us
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center py-24 sm:py-32 lg:py-48">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              AIMS-
              <span className="relative inline-block text-yellow-400">
                DTU
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 292 22"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full"
                >
                  <path
                    d="M1.5 15.5C21.33 7.67 86.83 4.17 290.5 13.5"
                    stroke="#facc15"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-4xl mx-auto text-lg sm:text-xl text-gray-300/80 leading-8">
              Turn your idea into a thriving digital product. With our hands-on
              support in strategy, design, and development, we'll craft a
              platform that ensures your launch is nothing short of remarkable.
              Ready to make it happen?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gray-800 rounded-xl hover:bg-gray-700 shadow-lg shadow-gray-800/20">
                Start today
                <svg
                  className="h-5 w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
