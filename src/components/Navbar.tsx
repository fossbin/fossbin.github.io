"use client";
import { Alert } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <Alert className="flex justify-between items-center top-5 px-20 fixed h-16 w-11/12 bg-yellow-200">
        <div className="flex justify-evenly items-center gap-5">
          <h3 className="text-4xl text-blue-300 text-shadow-[3px_3px_rgb(0_0_0)] font-outline-1">fossbin</h3>
        </div>
        <div className="flex justify-center items-center gap-10">
          <Button>Home</Button>
          <Button>Projects</Button>
          <Button>Contact Me</Button>
        </div>
      </Alert>
    </div>
  );
}
