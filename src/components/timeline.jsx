import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "brAInwave",
      text: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          brAInwave is a 30-hour hackathon by AIMS-DTU, designed to push the limits of innovation. 
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Over two days, participants engage in insightful speeches, intense coding, and thorough project evaluations,expert mentorship, providing an ideal platform to showcase their skills and creativity.
        </p>
        
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            With a reach of over 20K individuals, AIMS-DTU offers excellent visibility.
        </p>
        </div>
        
      ),
      images: [
        "/brainwavegroup.png",
        "/brainwavebraudi.png",
        "/brainwavejudge.png",
        "/trophies.png",
      ],
    },
    {
      title: "VisionX AI",
      text: (
        <>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deep learning-based hackathon, challenging participants to develop groundbreaking solutions for real-world problems . 
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The primary objective is to foster a culture of ingenuity, collaboration, and continuous growth in the AI community. It consists of multiple tracks including NLP, Computer Vision and much more.
          </p>
          
        </>
      ),
      images: [
        "/igts.png",
        "/visionxtrop.png",
        "/devcraft1.png",
        "visionx.png",
      ],
    },
    {
      title: "Synaptix",
      text: (
        <>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A high-stakes GenAI-focused competition with  innovative problem statements, designed to push your technical creativity. 
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            From ideation to live implementation, compete across two intense rounds judged by industry experts and professors. 
          </p>
        </>
      ),
      images: [
        "/adobevanshbhaiya.png",
        "/adobeworkshop.png",
        "/shaswatbhaiya.png",
        "/winnerssynaptix.png",
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id="flagships">
      <Timeline data={data} />
    </div>
  );
}
