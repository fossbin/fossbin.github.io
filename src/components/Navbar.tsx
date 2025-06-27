"use client";
import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  PanelTopClose,
  FolderGit2,
  Signature,
  Menu, 
  X,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NavLink = ({ href, label } : {href: string, label:string }) => {
  return (
    <Link href={href} passHref>
      <Button variant="default" className="md:text-sm md:p-2 lg:p-4 lg:text-base font-bold bg-amber-500 hover:bg-amber-400" asChild>
        <span>{label}</span>
      </Button>
    </Link>
  );
};

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


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
      transition-transform duration-300 ease-in-out z-50 ${showNavbar ? "translate-y-5" : "-translate-y-full"} flex justify-between items-center fixed left-1/2 transform -translate-x-1/2 h-12 md:h-16 w-11/12 bg-yellow-200 px-4 md:px-20`}>
      <div className="flex justify-evenly items-center gap-5">
        <h3 className="text-xl md:text-3xl lg:text-4xl text-blue-300 text-shadow-[1.5px_1.5px_rgb(0_0_0)] md:text-shadow-[2px_2px_rgb(0_0_0)] lg:text-shadow-[3px_3px_rgb(0_0_0)] font-outline-1">fossbin</h3>
      </div>

      { /* Desktop NavLinks */}
      <div className="hidden md:flex gap-8 md:justify-center items-center lg:gap-10">
        <NavLink href="/" label="Home" />
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/contact" label="Contact Me" />
      </div>

      { /* Mobile Toggle Button */}
      <div className="md:hidden">
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'noShadow'} className="h-8 w-6"onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen? <X/>: <Menu/>}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[60vw] translate-x-[calc(-50vw+50%)]" align="center" sideOffset={20}>
            <DropdownMenuItem className="" >
              <Link href="/" className="flex items-center gap-2">
              <PanelTopClose />
              <span>Home</span>
              </Link>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/projects" className="flex items-center gap-2">
              <FolderGit2 /> 
              <span>Projects</span>
              </Link>
            </DropdownMenuItem>
          <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/contact" className="flex items-center gap-2">
              <Signature />
              <span>Contact Me</span>
              </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </Alert>
  );
}
