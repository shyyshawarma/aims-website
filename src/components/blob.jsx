import React from "react";
import { cn } from "@/lib/utils";

function Blob({ className }) {
  return (
    <div
      className={cn(
        "absolute rounded-full mix-blend-lighten filter blur-3xl opacity-40 -z-40 animate-none",
        className
      )}
    />
  );
}

export default Blob;
