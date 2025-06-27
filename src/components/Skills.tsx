'use client'
import React from 'react'
import Marquee from "@/components/ui/marquee"
import { 
    SiJavascript,
    SiReact,
    SiPython,
    SiTypescript,
    SiHtml5,
    SiGit
} from "react-icons/si";
import {
    FaJava
} from "react-icons/fa";

export default function Skills() {
    const items = [
        {label: "JavaScript", icon: <SiJavascript />},
        {label: "ReactJS", icon: <SiReact />},
        {label: "Java", icon: <FaJava />},
        {label: "Python", icon: <SiPython />},
        {label: "Typescript", icon: <SiTypescript/>},
        {label: "HTML", icon: <SiHtml5 />},
        {label: "Git", icon: <SiGit/>},
    ] 
    return (
        <div>
            <Marquee items={items}></Marquee>
        </div>
    )
}
