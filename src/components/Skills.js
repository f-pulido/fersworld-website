import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
            <div class="skillsContainer">
                <div class="skillsDescription">
                    <h1>Skills & Technologies</h1>
                    <p>
                        Dive into the toolbox that fuels my journey in the digital realm. I wield a versatile 
                        set of skills and tools, transforming ideas into functional and elegant solutions. Here's a glimpse behind the scenes:
                    </p>
                </div>
                <div class="skillsDisplay">
                    {skills.map((skill) => (
                        <div class="item">
                            <span id="check">✔️</span> <span id="skill">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}