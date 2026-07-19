"use client"
import React, { useRef, useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

interface ProjectItem {
  name: string
  description: string
  technologies: string[]
  github: string
  demo?: string
  showDemo?: boolean
}

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Outcomes adapted to match the vertical border-l highlight format seen in the screenshot
  const projectOutcomes: Record<string, string> = {
    "Taalem Online": "Developed RESTful APIs for user authentication, course management, and progress logs.",
    "Digital Sales ": "Offline-first inventory tracking, transaction receipts, and receipt logging.",
    "AnimeRec": "Collaborative filtering recommendation engine training with 95% similarity match."
  }

  const handleScroll = (direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 240
      container.scrollBy({
        top: direction === "down" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleScrollEvent = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollTop = container.scrollTop
    const scrollHeight = container.scrollHeight - container.clientHeight
    const percentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
    setScrollProgress(percentage)
  }

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column - Sticky Info & Progress */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6 lg:pr-8">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-zinc-950">
              <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-950 font-black">
                SELECTED WORK
              </h2>
            </div>
            
            <h3 className="font-sans font-black text-3xl md:text-4xl text-zinc-950 uppercase tracking-tight leading-none">
              WHAT I HAVE BUILT
              <span className="text-sky-500 font-sans font-light ml-1 relative -top-0.5 select-none">○</span>
            </h3>
            
            <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed max-w-sm">
              A selection of academic and personal projects focused on software architecture, machine learning, and mobile integration.
            </p>

            {/* Neobrutalist Scroll Progress Bar */}
            <div className="pt-4 space-y-2">
              <div className="flex justify-between font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
                <span>FOUNDATIONS</span>
                <span>TODAY</span>
              </div>
              <div className="w-full h-3 bg-zinc-100 border-2 border-zinc-950 relative overflow-hidden">
                <div 
                  className="h-full bg-sky-400 border-r-2 border-zinc-950 transition-all duration-100" 
                  style={{ width: `${scrollProgress}%` }} 
                />
              </div>
            </div>

            {/* Quick scroll controls for easy desktop navigation */}
            <div className="hidden lg:flex items-center gap-2 pt-4">
              <button
                onClick={() => handleScroll("up")}
                className="p-2 border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:bg-sky-400 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus:outline-none"
                aria-label="Scroll projects up"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("down")}
                className="p-2 border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:bg-sky-400 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus:outline-none"
                aria-label="Scroll projects down"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Scrollable Projects List */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-[9px] top-6 bottom-6 w-[1px] bg-zinc-200" />

            <div 
              ref={scrollContainerRef}
              onScroll={handleScrollEvent}
              className="projects-scroller overflow-y-auto max-h-[540px] md:max-h-[420px] pl-8 pr-2 md:pr-4 divide-y divide-zinc-200 snap-y snap-mandatory scroll-smooth"
            >
              {projects.map((project, idx) => {
                const outcome = projectOutcomes[project.name] || project.description
                
                // Clean up name for comparison & display
                const displayName = project.name.toUpperCase().trim()

                return (
                  <div 
                    key={idx}
                    className="py-8 first:pt-2 last:pb-2 relative snap-start scroll-mt-6 space-y-4"
                  >
                    {/* Timeline Badge (Project Number) */}
                    <div className="absolute left-[-30px] top-[14px] md:top-[16px] w-5 h-5 bg-white border-2 border-zinc-950 flex items-center justify-center font-mono text-[9px] font-black text-zinc-950 shadow-[1px_1px_0px_0px_rgba(9,9,11,1)]">
                      {idx + 1}
                    </div>

                    {/* Top Row: Title (Left) & Technologies (Right) */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans font-black text-base tracking-wide text-zinc-950 uppercase hover:text-sky-600 transition-colors group flex items-center gap-1.5 focus:outline-none"
                        >
                          {displayName}
                          <span className="text-zinc-400 group-hover:text-sky-600 text-sm transition-colors">↗</span>
                        </a>

                        {project.demo && project.showDemo !== false && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 font-mono text-[10px] font-black uppercase tracking-wider text-zinc-950 bg-sky-300 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus:outline-none"
                          >
                            <span>Live Demo</span>
                            <span className="text-[9px]">↗</span>
                          </a>
                        )}
                      </div>

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
            <div className="pt-6 pl-8 font-mono text-xs">
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

        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
