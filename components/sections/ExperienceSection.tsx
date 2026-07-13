"use client"
import React from "react"
import { MapPin } from "lucide-react"

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
  return (
    <section id="experience" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="flex justify-between items-baseline pb-2 border-b border-zinc-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
            Selected Experience
          </h2>
        </div>

        {/* Timeline List in Karol's structured format */}
        <div className="divide-y divide-zinc-200">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Left Column: Duration & Company */}
              <div className="md:col-span-4 space-y-1">
                <span className="font-mono text-xs text-zinc-400 tracking-wider block">
                  {exp.duration}
                </span>
                <h3 className="font-sans font-black text-lg text-zinc-950 leading-tight">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-1 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  Ariana, Tunisia
                </div>
              </div>

              {/* Right Column: Position & Details */}
              <div className="md:col-span-8 space-y-3">
                <h4 className="font-mono text-sm uppercase tracking-wider text-zinc-800 font-bold">
                  {exp.position}
                </h4>
                
                <p className="text-zinc-700 font-sans font-normal leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-2 list-disc list-outside pl-4">
                  {exp.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className="text-zinc-600 font-sans font-normal text-sm sm:text-base leading-relaxed marker:text-zinc-300"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
