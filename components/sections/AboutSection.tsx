"use client"
import React from "react"
import { Code, Brain, Users, Compass } from "lucide-react"

interface AboutSectionProps {
  description: string
  highlights: string[]
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, highlights }) => {
  // Structured highlights for the right column list
  const structuredHighlights = [
    {
      code: "01",
      title: "Algorithmic Focus",
      desc: "Solved 500+ problems on Codeforces & LeetCode, optimizing runtime and space complexity."
    },
    {
      code: "02",
      title: "AI & Full Stack",
      desc: "Shipped intelligent web and mobile systems integrating TensorFlow, PyTorch, and Next.js."
    },
    {
      code: "03",
      title: "Open Collaboration",
      desc: "Active contributor in team ecosystems, maintaining clean git structures and documentation."
    },
    {
      code: "04",
      title: "Beyond Coding",
      desc: "Enjoys playing chess, exploring progressive music, and camping in the outdoors."
    }
  ]

  return (
    <section id="about" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 pb-4 border-b border-zinc-900">
          <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-800 font-bold">
            Background & Bio
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Biography and Core Stats */}
          <div className="md:col-span-6 space-y-8 reveal">
            <div className="space-y-4">
              <p className="text-zinc-800 font-sans text-sm sm:text-base leading-relaxed font-normal">
                {description}
              </p>
              <p className="text-zinc-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                I specialize in designing and shipping performant backend services and training machine learning architectures. By bridging mathematical logic and scalable system engineering, I build applications that are fast, intuitive, and highly functional.
              </p>
            </div>

            {/* Core Stats Dashboard */}
            <div className="grid grid-cols-3 gap-4 border-t border-zinc-200 pt-6">
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl sm:text-3xl text-sky-500">2+ Yrs</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Coding Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl sm:text-3xl text-zinc-900">+10</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Shipped Projects</span>
              </div>
              <div className="space-y-1">
                <span className="block font-sans font-black text-2xl sm:text-3xl text-zinc-900">+100</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Solved Challenges</span>
              </div>
            </div>
          </div>

          {/* Right Column: Unified highlights list (instead of bulky separate cards) */}
          <div className="md:col-span-6 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-sky-600 font-bold pb-2 border-b border-sky-100">
              Key Highlights
            </h3>

            <div className="border border-zinc-200 bg-white divide-y divide-zinc-200 shadow-[2px_2px_0px_0px_rgba(9,9,11,0.05)]">
              {structuredHighlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 flex gap-4 items-start hover:bg-zinc-50/50 transition-colors reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="font-mono text-xs font-black text-sky-500 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 flex-shrink-0">
                    {item.code}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-zinc-900">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[11px] sm:text-xs text-zinc-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
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

export default AboutSection
