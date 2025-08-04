"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          OUR FLAGSHIPS
        </h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between gap-10 pt-6 md:pt-20"
          >
            {/* LEFT: sticky dot + heading + text */}
            <div className="sticky top-40 z-40 flex-shrink-0 flex flex-col items-start max-w-xs lg:max-w-sm w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {item.title}
              </h3>
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400 pl-12">
                {item.title}
              </h3>
              <div className="mt-4 md:pl-20 pl-12 text-neutral-300">
                {item.text}
              </div>
            </div>

            {/* RIGHT: images expand to leftover space */}
            <div className="flex-grow w-full">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {item.images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="timeline"
                    width={800}
                    height={800}
                    className="w-full h-32 md:h-44 lg:h-64 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* vertical progress line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-800 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
