import React from "react";
import { cn } from "@/lib/utils";

function Blob({ className }) {
  return (
    <div
      className={cn(
        "absolute rounded-full mix-blend-lighten filter blur-3xl opacity-70 z-10 animate-none w-80 h-64 bg-[#1000DE]/25",
        className
      )}
    />
  );
}

export default Blob;
