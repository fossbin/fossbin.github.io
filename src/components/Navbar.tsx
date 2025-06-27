"use client";
import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavLink = ({ href, label } : {href: string, label:string }) => {
  return (
    <Link href={href} passHref>
      <Button variant="default" className="font-bold bg-amber-500 hover:bg-amber-400" asChild>
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);
  }, [lastScrollY])


  return (
    <Alert className={`
      transition-transform duration-300 ease-in-out z-50 
      ${showNavbar ? "translate-y-5" : "-translate-y-full"} 
      flex justify-between items-center 
      fixed left-1/2 transform -translate-x-1/2
      px-20 h-16 w-11/12 bg-yellow-200
    `}>
      <div className="flex justify-evenly items-center gap-5">
        <h3 className="text-4xl text-blue-300 text-shadow-[3px_3px_rgb(0_0_0)] font-outline-1">fossbin</h3>
      </div>
      <div className="flex justify-center items-center gap-10">
        <NavLink href="/" label="Home" />
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/contact" label="Contact Me" />
      </div>
    </Alert>
  );
}
