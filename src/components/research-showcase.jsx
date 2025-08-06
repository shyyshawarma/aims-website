"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResearchShowcase() {
  const [scrollY, setScrollY] = useState(0)
  const [currentPaperIndex, setCurrentPaperIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const researchPapers = [
    {
      id: 1,
      title: "Quantum Computing Applications in Machine Learning Optimization",
      conferenceName: "QUANTUM COMPUTING",
      conferenceSubtitle: "SYMPOSIUM",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Aisha Patel"],
      color: "#3A0CA3",
      abstract:
        "This research explores the intersection of quantum computing and machine learning, presenting novel optimization techniques that leverage quantum superposition and entanglement.",
    },
    {
      id: 2,
      title: "Neural Network Architecture for Real-Time Data Processing",
      conferenceName: "AI & MACHINE",
      conferenceSubtitle: "LEARNING",
      authors: ["Dr. James Wilson", "Dr. Lisa Zhang", "Prof. Robert Kim"],
      color: "#560BAD",
      abstract:
        "We present a novel neural network architecture optimized for real-time processing, featuring adaptive layer structures and dynamic resource allocation mechanisms.",
    },
    {
      id: 3,
      title: "Blockchain Integration in Distributed AI Systems",
      conferenceName: "BLOCKCHAIN",
      conferenceSubtitle: "TECHNOLOGY",
      authors: ["Dr. Maria Santos", "Prof. David Lee", "Dr. Ahmed Hassan"],
      color: "#3A0CA3",
      abstract:
        "This paper introduces a framework for integrating blockchain technology with distributed AI systems, addressing security, transparency, and trust issues.",
    },
    {
      id: 4,
      title: "Cybersecurity in Edge Computing Environments",
      conferenceName: "CYBERSECURITY",
      conferenceSubtitle: "CONFERENCE",
      authors: ["Dr. Elena Petrov", "Prof. John Martinez", "Dr. Wei Chen"],
      color: "#560BAD",
      abstract:
        "We propose a multi-layered security framework specifically designed for edge computing environments, incorporating AI-driven threat detection and response systems.",
    },
    {
      id: 5,
      title: "Sustainable Computing: Green Algorithms for Data Centers",
      conferenceName: "SUSTAINABLE",
      conferenceSubtitle: "COMPUTING",
      authors: ["Dr. Anna Kowalski", "Prof. Thomas Brown", "Dr. Raj Patel"],
      color: "#3A0CA3",
      abstract:
        "This research presents innovative green algorithms that significantly reduce energy consumption in data centers while maintaining computational performance.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setCurrentPaperIndex(index)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    const paperElements = document.querySelectorAll("[data-paper-section]")
    paperElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScrollContainer = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop
        const sectionHeight = scrollContainerRef.current.clientHeight
        const newIndex = Math.round(scrollTop / sectionHeight)
        if (newIndex !== currentPaperIndex && newIndex >= 0 && newIndex < researchPapers.length) {
          setCurrentPaperIndex(newIndex)
        }
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScrollContainer)
      return () => scrollContainer.removeEventListener("scroll", handleScrollContainer)
    }
  }, [currentPaperIndex, researchPapers.length])

  const currentPaper = researchPapers[currentPaperIndex]

  return (
    <div className="relative bg-black min-h-screen w-full flex items-center justify-center" id="research">
      {/* Main Research Showcase */}
      <section className="relative h-screen overflow-hidden bg-black w-[90%]">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#1000DE]/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-[#1000DE]/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 h-full grid grid-cols-12 gap-0">
          {/* Left Panel: Using grid system for better alignment */}
          <div className="col-span-4 h-screen flex items-center justify-center px-8 lg:px-12">
            <div className="space-y-8 max-w-sm w-full">
              <div className="space-y-4">
                <div
                  className="transition-all duration-500 ease-in-out"
                  key={`conference-${currentPaper.id}`}
                  style={{ animation: "fadeInUp 0.5s ease-out" }}
                >
                  <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    {currentPaper.conferenceName}
                    <br />
                    <span className="text-neutral-600">{currentPaper.conferenceSubtitle}</span>
                  </h1>
                </div>
                <p className="text-white/70 text-base lg:text-lg">San Francisco, California</p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  {researchPapers.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === currentPaperIndex ? "bg-[#1000DE]/40 w-16" : "bg-white/30 w-8"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* <Button className="bg-[#1000DE]/25 cursor-pointer text-white hover:bg-[#1000DE]/35 px-6 py-3 text-sm lg:text-base font-semibold transition-all duration-300 shadow-lg shadow-[#3A0CA3]/25">
                READ FULL PAPER
              </Button> */}
            </div>
          </div>

          {/* Right Panel: Using grid system for better alignment */}
          <div className="col-span-8 h-screen relative">
            <div
              ref={scrollContainerRef}
              className="absolute inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scrollbar-hide"
              style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
            >
              {researchPapers.map((paper, index) => (
                <div
                  key={paper.id}
                  data-paper-section
                  data-index={index}
                  className="h-screen flex items-center justify-center px-6 lg:px-8 snap-start"
                >
                  <div className="space-y-6 max-w-4xl w-full">
                    <div
                      className="relative bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-3xl px-6 lg:px-8 py-12 lg:py-16 border transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        borderColor: `#1000DE40`,
                        boxShadow: `0 0 30px ${paper.color}20, inset 0 0 30px ${paper.color}10`,
                      }}
                    >
                      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                        {paper.title}
                      </h3>

                      <div className="mb-6 lg:mb-8">
                        <p className="text-white/70 text-sm mb-2">Authors:</p>
                        <p className="text-white/90 text-sm">{paper.authors.join(" • ")}</p>
                      </div>

                      <div className="mb-6 lg:mb-8">
                        {/* <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-sm border border-white/20"
                            style={{
                              backgroundColor: paper.color,
                              boxShadow: `0 0 10px ${paper.color}60`,
                            }}
                          ></div>
                          <span className="text-white/80 text-xs font-medium">Research Paper</span>
                        </div> */}
                      </div>

                      <p className="text-white/70 text-sm mb-2">Overview:</p>
                      <p className="text-white/70 text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8">
                        {paper.abstract}
                      </p>

                      {/* <div
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-full opacity-60"
                        style={{
                          backgroundColor: "#1000DE70",
                          boxShadow: `0 0 20px ${paper.color}80`,
                        }}
                      ></div> */}
                    </div>

                    <div className="flex justify-between items-center px-4">
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className="w-2 h-2 rounded-full bg-white/30"
                            style={{ animation: `pulse ${1 + dot * 0.2}s infinite` }}
                          ></div>
                        ))}
                      </div>
                      {/* <div className="text-white/40 text-xs font-mono">{new Date().getFullYear()} • PEER REVIEWED</div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 right-8 text-white/40">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll vertically</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div> */}
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
