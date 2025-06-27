import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-8/10 flex gap-20 items-center">
        <div className="flex-grow basis-2/3 flex-col items-start">
          <div className="text-chart-2 text-3xl font-bold mb-4">Hey !<span className="ml-1 animate-blink">|</span></div>
          <div className="text-4xl font-bold mb-4">I'm Steve Fernandez. 👋</div>
          <p className="text-lg font-normal mb-6">Passionate Full-Stack Developer who fueled by curiosity and coffee grounded shakes. I build scalable software and specialize with fullstack frameworks. </p>
          <Button variant="reverse" className="bg-blue-200 font-bold hover:font-extrabold hover:underline hover:bg-blue-400"><a href="#contact">Get in Touch!
          </a></Button>
        </div>
        <div className="flex-grow basis-1/3">
          <div className="w-[300px] overflow-hidden rounded-4xl border-2 border-border shadow-shadow aspect-4/3">
              <Image
                width={300}
                height={400}
                src="/steve.jpg"
                alt="image"
                className="w-full h-full object-cover scale-[2] origin-[50%_10%]"
              />
          </div>
        </div>
    </section>
  )
}
