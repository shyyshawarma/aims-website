import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["conquer hackathons", "build projects", "do research", "modern"];

  return (
    
      <div
        className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        At aims you will
        <FlipWords words={words} /> <br />
        with lorem ipsum dolor sit amet, consectetur adipiscing elit. aur ab iske aage ka text daldena
        
      </div>

  );
}
