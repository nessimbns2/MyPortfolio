"use client"
import React, { useRef, useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

interface ExperienceItem {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

interface ExperienceSectionProps {
  experience: ExperienceItem[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = (direction: "up" | "down") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // Scroll by approximately one item's height (around 260px)
      const scrollAmount = 260
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
    <section id="experience" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-[#fafafa] text-zinc-900 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column - Sticky Info & Progress */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 h-fit space-y-6 lg:pr-8">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-zinc-950">
              <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-950 font-black">
                SELECTED EXPERIENCE
              </h2>
            </div>
            
            <h3 className="font-sans font-black text-3xl md:text-4xl text-zinc-950 uppercase tracking-tight leading-none">
              WHERE I HAVE WORKED
              <span className="text-sky-500 font-sans font-light ml-1 relative -top-0.5 select-none">○</span>
            </h3>
            
            <p className="text-zinc-600 font-sans text-sm md:text-base leading-relaxed max-w-sm">
              Developing intelligent systems, designing full-stack workflows, and building modern user experiences.
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
                aria-label="Scroll experience up"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("down")}
                className="p-2 border-2 border-zinc-950 bg-white text-zinc-950 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:bg-sky-400 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all focus:outline-none"
                aria-label="Scroll experience down"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Scrollable Timeline List */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Vertical Line */}
            <div className="absolute left-[9px] top-6 bottom-6 w-[1px] bg-zinc-200" />

            <div 
              ref={scrollContainerRef}
              onScroll={handleScrollEvent}
              className="experience-scroller overflow-y-auto max-h-[620px] md:max-h-[500px] pl-8 pr-2 md:pr-4 divide-y divide-zinc-200 snap-y snap-mandatory scroll-smooth"
            >
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="py-8 first:pt-2 last:pb-2 relative snap-start scroll-mt-6"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-29px] top-[14px] md:top-[16px] w-[9px] h-[9px] rounded-full bg-sky-500 border-2 border-zinc-950 shadow-[1px_1px_0px_0px_rgba(9,9,11,1)]" />

                  <div className="space-y-3">
                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h4 className="font-sans font-black text-base text-zinc-950 uppercase tracking-wide">
                        {exp.company}
                      </h4>
                      <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Position Title */}
                    <h5 className="font-mono text-xs uppercase tracking-widest text-zinc-700 font-bold">
                      {exp.position}
                    </h5>

                    {/* Description */}
                    <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Achievements List */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-1.5 list-disc list-outside pl-4">
                        {exp.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="text-zinc-500 font-sans text-xs sm:text-sm leading-relaxed marker:text-zinc-300"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
