import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Transferring Knowledge", "Conquering Hackathons", "Revolutionizing Research"];

  return (
    
      <div
        className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        {/* with lorem ipsum dolor sit amet, consectetur adipiscing elit. aur ab iske aage ka text daldena */}
        <br />
        Here, we focus on
        <FlipWords words={words} /> <br />
        
      </div>

  );
}
