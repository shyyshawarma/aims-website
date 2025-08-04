"use-client"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, ArrowDown, Send, MessageCircle, Calendar } from "lucide-react"

export default function TeamsContact() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [isTeamsVisible, setIsTeamsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  const heroRef = useRef(null)
  const teamsRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsHeroVisible(true)
      }
    }, observerOptions)

    const teamsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsTeamsVisible(true)
      }
    }, observerOptions)

    const footerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsFooterVisible(true)
      }
    }, observerOptions)

    if (heroRef.current) heroObserver.observe(heroRef.current)
    if (teamsRef.current) teamsObserver.observe(teamsRef.current)
    if (footerRef.current) footerObserver.observe(footerRef.current)

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current)
      if (teamsRef.current) teamsObserver.unobserve(teamsRef.current)
      if (footerRef.current) footerObserver.unobserve(footerRef.current)
    }
  }, [])

  const facultyMembers = [
    { name: "Dr. Sarah Chen", role: "Faculty Lead", image: "/placeholder.svg?height=180&width=180" },
    { name: "Dr. Raj Patel", role: "Co-Faculty", image: "/placeholder.svg?height=180&width=180" },
  ]

  const teamMembersRow1 = [
    { name: "Alex Johnson", role: "PhD Researcher", image: "/placeholder.svg?height=150&width=150" },
    { name: "Maria Garcia", role: "Data Scientist", image: "/placeholder.svg?height=150&width=150" },
    { name: "David Kim", role: "ML Engineer", image: "/placeholder.svg?height=150&width=150" },
    { name: "Emma Wilson", role: "Research Assistant", image: "/placeholder.svg?height=150&width=150" },
    { name: "James Brown", role: "PhD Student", image: "/placeholder.svg?height=150&width=150" },
  ]

  const teamMembersRow2 = [
    { name: "Lisa Zhang", role: "Postdoc Fellow", image: "/placeholder.svg?height=150&width=150" },
    { name: "Ahmed Hassan", role: "Research Scientist", image: "/placeholder.svg?height=150&width=150" },
    { name: "Sophie Martin", role: "AI Researcher", image: "/placeholder.svg?height=150&width=150" },
    { name: "Carlos Rodriguez", role: "Data Analyst", image: "/placeholder.svg?height=150&width=150" },
    { name: "Priya Sharma", role: "PhD Candidate", image: "/placeholder.svg?height=150&width=150" },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative overflow-hidden"
        style={{
          backgroundColor: "black",
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(29, 78, 216, 0.15) 0%, transparent 20%),
            radial-gradient(circle at 70% 40%, rgba(29, 78, 216, 0.12) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(29, 78, 216, 0.18) 0%, transparent 22%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* AI/ML Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shooting Stars as Neurons */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-black rounded-full transition-all duration-1000 ${
                isHeroVisible ? "animate-shooting-star opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Twinkling Stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-0.5 h-0.5 bg-black rounded-full transition-all duration-2000 ${
                isHeroVisible ? "animate-twinkle opacity-60" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}

          {/* Neural Network Connections */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="rgba(29, 78, 216, 0.3)"
                strokeWidth="1"
                className={`transition-all duration-2000 ${isHeroVisible ? "opacity-40 animate-pulse" : "opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <div
              className={`mb-8 transition-all duration-1500 ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          OUR TEAM
        </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`mb-12 transition-all duration-1500 ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              style={{ transitionDelay: "0.8s" }}
            >
              <h2 className="text-2xl lg:text-4xl font-light text-gray-300 leading-relaxed">
                Pioneering the future of AI and Machine Learning
              </h2>
            </div>

            {/* Scroll Indicator */}
            <div
              className={`transition-all duration-1500 ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
              style={{ transitionDelay: "1.3s" }}
            >
              <div className="flex items-center justify-center gap-3 text-gray-300 animate-bounce">
                <ArrowDown className="w-6 h-6" />
                <span className="text-lg font-medium">Meet our team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Frame Section - Separate from main teams section */}
      <section
        className="relative py-0 px-2 overflow-hidden"
        style={{
          backgroundColor: "black",
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(29, 78, 216, 0.15) 0%, transparent 20%),
            radial-gradient(circle at 70% 40%, rgba(29, 78, 216, 0.12) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(29, 78, 216, 0.18) 0%, transparent 22%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Shooting Stars and Neural Animations Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shooting Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${
                isTeamsVisible ? "animate-shooting-star-slow opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </div>
          ))}

          {/* Floating Neurons */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-indigo-400 rounded-full transition-all duration-2000 ${
                isTeamsVisible ? "animate-float-neuron opacity-60" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Large Team Photo Frame */}
          <div
            className={`mb-20 transition-all duration-1000 ${isTeamsVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
          >
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-900/30 to-[#04071D] border-2 border-blue-500/30 rounded-3xl overflow-hidden relative group hover:border-blue-400/50 transition-all duration-500">
                {/* AI Brain Background Image behind the frame content */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/images/ai-brain-background.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-[#04071D]/60"></div>
                </div>

                {/* Animated Background for Team Photo Frame */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Shooting Stars inside frame */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute transition-all duration-1000 ${
                        isTeamsVisible ? "animate-shooting-star-frame opacity-100" : "opacity-0"
                      }`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 6}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                      }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-300 rounded-full shadow-sm shadow-blue-300/50"></div>
                    </div>
                  ))}

                  {/* Floating Neurons inside frame */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-0.5 h-0.5 bg-indigo-300 rounded-full transition-all duration-2000 ${
                        isTeamsVisible ? "animate-float-neuron-frame opacity-40" : "opacity-0"
                      }`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    />
                  ))}

                  {/* Neural connections inside frame */}
                  <svg className="absolute inset-0 w-full h-full opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1={`${Math.random() * 100}%`}
                        y1={`${Math.random() * 100}%`}
                        x2={`${Math.random() * 100}%`}
                        y2={`${Math.random() * 100}%`}
                        stroke="rgba(29, 78, 216, 0.4)"
                        strokeWidth="1"
                        className={`transition-all duration-2000 ${isTeamsVisible ? "opacity-30 animate-pulse" : "opacity-0"}`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-black to-black rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/30">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      Our Research Team
                    </h3>
                    <p className="text-gray-300 text-xl group-hover:text-gray-200 transition-colors duration-300 max-w-2xl mx-auto leading-relaxed">
                      A collaborative group of brilliant minds working together to push the boundaries of AI and Machine
                      Learning research
                    </p>
                  </div>
                </div>

                {/* Enhanced Glowing Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-3xl opacity-0 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 rounded-3xl opacity-0 blur-2xl group-hover:opacity-20 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section with AI Brain Background behind individual frames */}
      <section
        ref={teamsRef}
        id="teams-section"
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('/images/ai-brain-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay with trending background for better text readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "black",
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(29, 78, 216, 0.15) 0%, transparent 20%),
              radial-gradient(circle at 70% 40%, rgba(29, 78, 216, 0.12) 0%, transparent 25%),
              radial-gradient(circle at 50% 80%, rgba(29, 78, 216, 0.18) 0%, transparent 22%)
            `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: 0.85,
          }}
        ></div>

        {/* Shooting Stars and Neural Animations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Shooting Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${
                isTeamsVisible ? "animate-shooting-star-slow opacity-100" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </div>
          ))}

          {/* Floating Neurons */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-indigo-400 rounded-full transition-all duration-2000 ${
                isTeamsVisible ? "animate-float-neuron opacity-60" : "opacity-0"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isTeamsVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <h6 className="text-5xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          MEET OUR BRILLIANT MINDS
        </h6>
            
          </div>

          {/* Faculty Members - Top Row */}
          <div className="flex justify-center items-center gap-16 mb-20">
            {facultyMembers.map((member, index) => (
              <div
                key={member.name}
                className={`text-center group transition-all duration-1000 ${
                  isTeamsVisible
                    ? "translate-x-0 opacity-100"
                    : index === 0
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-44 h-44 rounded-full overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full animate-pulse group-hover:animate-spin"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div className="absolute inset-1 bg-[#04071D] rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-0 blur-xl group-hover:opacity-60 transition-all duration-500"></div>
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 blur-2xl group-hover:opacity-30 transition-all duration-700"></div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium text-lg group-hover:text-indigo-400 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* First Row Team Members */}
          <div className="flex justify-center items-center gap-8 mb-16 flex-wrap">
            {teamMembersRow1.map((member, index) => (
              <div
                key={member.name}
                className={`text-center group transition-all duration-700 hover:scale-110 ${
                  isTeamsVisible
                    ? "translate-x-0 opacity-100"
                    : index < 2
                      ? "-translate-x-full opacity-0"
                      : index > 2
                        ? "translate-x-full opacity-0"
                        : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150 + 1100}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:animate-pulse"></div>
                    <div className="absolute inset-0.5 bg-[#04071D] rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-125 group-hover:brightness-125"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-3 bg-blue-500 rounded-full opacity-0 blur group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute -inset-4 bg-blue-400 rounded-full opacity-0 blur-lg group-hover:opacity-40 transition-all duration-500"></div>
                </div>
                <h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-sm text-blue-400 group-hover:text-indigo-400 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row Team Members */}
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {teamMembersRow2.map((member, index) => (
              <div
                key={member.name}
                className={`text-center group transition-all duration-700 hover:scale-110 ${
                  isTeamsVisible
                    ? "translate-x-0 opacity-100"
                    : index < 2
                      ? "-translate-x-full opacity-0"
                      : index > 2
                        ? "translate-x-full opacity-0"
                        : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150 + 1500}ms` }}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full group-hover:animate-pulse"></div>
                    <div className="absolute inset-0.5 bg-[#04071D] rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-125 group-hover:brightness-125"
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-3 bg-indigo-500 rounded-full opacity-0 blur group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute -inset-4 bg-indigo-400 rounded-full opacity-0 blur-lg group-hover:opacity-40 transition-all duration-500"></div>
                </div>
                <h4 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes shooting-star {
          0% { 
            transform: translateX(-100px) translateY(-100px) scale(0);
            opacity: 0;
          }
          10% { 
            opacity: 1;
            transform: translateX(-50px) translateY(-50px) scale(1);
          }
          90% { 
            opacity: 1;
            transform: translateX(100px) translateY(100px) scale(1);
          }
          100% { 
            transform: translateX(200px) translateY(200px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes shooting-star-slow {
          0% { 
            transform: translateX(-150px) translateY(-150px) scale(0);
            opacity: 0;
          }
          20% { 
            opacity: 1;
            transform: translateX(-75px) translateY(-75px) scale(1);
          }
          80% { 
            opacity: 1;
            transform: translateX(75px) translateY(75px) scale(1);
          }
          100% { 
            transform: translateX(150px) translateY(150px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes shooting-star-frame {
          0% { 
            transform: translateX(-80px) translateY(-80px) scale(0);
            opacity: 0;
          }
          25% { 
            opacity: 1;
            transform: translateX(-40px) translateY(-40px) scale(1);
          }
          75% { 
            opacity: 1;
            transform: translateX(40px) translateY(40px) scale(1);
          }
          100% { 
            transform: translateX(80px) translateY(80px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes float-neuron {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        
        @keyframes float-neuron-frame {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-8px) translateX(4px); }
          50% { transform: translateY(0px) translateX(8px); }
          75% { transform: translateY(8px) translateX(4px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        .animate-shooting-star {
          animation: shooting-star 3s linear infinite;
        }
        
        .animate-shooting-star-slow {
          animation: shooting-star-slow 6s linear infinite;
        }
        
        .animate-shooting-star-frame {
          animation: shooting-star-frame 4s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-float-neuron {
          animation: float-neuron 4s ease-in-out infinite;
        }
        
        .animate-float-neuron-frame {
          animation: float-neuron-frame 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
