"use client"
import React from "react"

interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  github: string
  demo?: string
}

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  // Outcomes adapted to match the vertical border-l highlight format seen in the screenshot
  const projectOutcomes: Record<string, string> = {
    "Taalem Online": "Developed RESTful APIs for user authentication, course management, and progress logs.",
    "Digital Sales ": "Offline-first inventory tracking, transaction receipts, and receipt logging.",
    "AnimeRec": "Collaborative filtering recommendation engine training with 95% similarity match."
  }

  return (
    <section id="projects" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* Eyebrow with blue accent square */}
        <div className="flex items-center gap-2 pb-4 border-b border-zinc-900">
          <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-800 font-bold">
            Selected Work
          </h2>
        </div>

        {/* Karol Binkowski screenshot style project rows */}
        <div className="divide-y divide-zinc-200">
          {projects.map((project, idx) => {
            const outcome = projectOutcomes[project.name] || project.description
            
            // Clean up name for comparison & display
            const displayName = project.name.toUpperCase().trim()

            return (
              <div 
                key={idx}
                className="py-8 first:pt-4 last:pb-0 space-y-4 reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Top Row: Title (Left) & Technologies (Right) */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-black text-base tracking-wide text-zinc-950 uppercase hover:text-sky-600 transition-colors group flex items-center gap-1.5 focus:outline-none"
                  >
                    {displayName}
                    <span className="text-zinc-400 group-hover:text-sky-600 text-sm transition-colors">↗</span>
                  </a>

                  {/* Tech stack pills in monospace */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="font-mono border border-zinc-200 px-2.5 py-1 rounded text-xs text-zinc-500 bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Row: Description */}
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans font-normal">
                  {project.description}
                </p>

                {/* Bottom Row: Accent callout with left border */}
                <div className="border-l-[3px] border-sky-500 pl-3 py-0.5 flex items-center">
                  <p className="font-mono text-xs sm:text-sm text-zinc-800 leading-normal font-bold">
                    {outcome}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

        {/* More work callout */}
        <div className="pt-8 text-center reveal font-mono text-xs">
          <a 
            href="https://github.com/nessimbns2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-950 transition-colors"
          >
            More repositories on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
