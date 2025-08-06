"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWordsDemo } from "@/components/FlipWordsDemo";
import {
  IconBrandDiscord,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#1000DE] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#1000DE] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden pt-40 mb-40">
      {/* ✅ Spotlights */}
      <Spotlight />

      {/* ✅ Blobs */}
      {/* <Blob className="top-0 left-0 w-[30rem] h-[30rem] bg-indigo-500" />
      <Blob className="top-20 right-10 w-[20rem] h-[20rem] bg-purple-500" />
      <Blob className="bottom-0 left-1/2 w-[25rem] h-[25rem] bg-cyan-500" /> */}

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          AIMS-DTU
        </h1>
        <p className="text-md text-center mt-4 text-neutral-600 dark:text-neutral-400">
          Artificial Intelligence and Machine Learning Society, DTU
        </p>
        <FlipWordsDemo />
        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-row justify-center items-center space-x-4">
          <button
            className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
            type="submit"
          >
            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Instagram
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
            type="submit"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Linkedin
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
            type="submit"
          >
            <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Discord
            </span>
            <BottomGradient />
          </button>
          {/* <button
            className="group/btn shadow-input relative flex h-10 items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandDiscord className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Discord
            </span>
            <BottomGradient />
          </button> */}
        </div>
      </div>
    </div>
  );
}
