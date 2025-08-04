import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "brAInwave",
      text: (
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched and from scratch
        </p>
      ),
      images: [
        "https://assets.aceternity.com/templates/startup-1.webp",
        "https://assets.aceternity.com/templates/startup-2.webp",
        "https://assets.aceternity.com/templates/startup-3.webp",
        "https://assets.aceternity.com/templates/startup-4.webp",
      ],
    },
    {
      title: "VisionX AI",
      text: (
        <>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more examples of beautiful designs I built.
          </p>
        </>
      ),
      images: [
        "https://assets.aceternity.com/pro/hero-sections.png",
        "https://assets.aceternity.com/features-section.png",
        "https://assets.aceternity.com/pro/bento-grids.png",
        "https://assets.aceternity.com/cards.png",
      ],
    },
    {
      title: "Synaptix",
      text: (
        <>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            {[
              "✅ Card grid component",
              "✅ Startup template Aceternity",
              "✅ Random file upload lol",
              "✅ Himesh Reshammiya Music CD",
              "✅ Salman Bhai Fan Club registrations open",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
              >
                {item}
              </div>
            ))}
          </div>
        </>
      ),
      images: [
        "https://assets.aceternity.com/pro/hero-sections.png",
        "https://assets.aceternity.com/features-section.png",
        "https://assets.aceternity.com/pro/bento-grids.png",
        "https://assets.aceternity.com/cards.png",
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
