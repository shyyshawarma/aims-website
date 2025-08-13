"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export default function NavbarDemo() {
  const navItems = [
    { name: "Our Mottos", link: "#motos" },
    // { name: "Projects", link: "#projects" },
    { name: "Flagships", link: "#flagships" },
    { name: "Research", link: "#research" },
    // { name: "Achievements", link: "#achievements" },
    // { name: "Our team", link: "#ourteam" },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      const offset = 100; // Account for fixed navbar height
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileNavClick = (e, link) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(link);
    if (target) {
      const offset = 100; // Account for fixed navbar height
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleNavClick} />

        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      <div className="flex items-center gap-4">
         <NavbarButton
  as="a"
  href="https://in.linkedin.com/company/aims-dtu"
  target="_blank"
  rel="noopener noreferrer"
  variant="secondary"
>
  Contact us
</NavbarButton>

         
        </div>
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#1000DE]/55 via-[#1000DE]/40 to-[#1000DE]/25 transition-opacity duration-500 group-hover:opacity-40" />
</button>
        
        
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => handleMobileNavClick(e, item.link)}
              className="text-neutral-600 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">Login</NavbarButton>
           
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
