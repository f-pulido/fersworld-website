import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects">
            <div class="projectsContainer">
                <div class="projectsDescription">
                    <h1>My Digital Creations</h1>
                    <p>
                        In the ever-evolving world of technology, I embrace the journey of perpetual learning. Each app 
                        is not just a product but a chapter in my ongoing education, with every challenge serving as an opportunity to grow.
                    </p>
                </div>
                <div class="projectsDisplay">
                    {projects.map((project) => (
                        
                        <div class="projectsItem">
                            <a href={project.link} key={project.image}>
                            <div>
                                <h1>{project.title} - {project.subtitle}</h1>
                            </div>
                            <img alt="gallery" src={project.image}/>
                            </a>
                        </div>
                        
                    ))}
                </div>
            </div>
        </section>
    );
}