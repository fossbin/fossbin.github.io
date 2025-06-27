import Hero from "@/components/sections/Hero";
import React from 'react'
import Skills from "@/components/Skills"

export default function Main() {

  return (
    <div className="flex flex-col w-11/12 max-w-screen-xl mx-auto">
        <Hero/>
        <Skills/>
    </div>
  )
}
