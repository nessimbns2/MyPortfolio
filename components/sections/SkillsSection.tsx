"use client"
import { Wrench } from "lucide-react"
import React from "react"

interface SkillsSectionProps {
  skills: Record<string, string[]>
  iconMap: Record<string, React.ComponentType<any>>
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, iconMap }) => {
  // Brand color presets for Neobrutalist Category Headers & Shadows
  const categoryStyles: Record<string, {
    headerBg: string
    shadow: string
    pillBg: string
    pillBorder: string
  }> = {
    languages: {
      headerBg: "bg-amber-400",
      shadow: "shadow-[4px_4px_0px_0px_#f59e0b]",
      pillBg: "bg-amber-50/40",
      pillBorder: "border-amber-100 hover:border-amber-300"
    },
    frontend: {
      headerBg: "bg-sky-400",
      shadow: "shadow-[4px_4px_0px_0px_#0ea5e9]",
      pillBg: "bg-sky-50/40",
      pillBorder: "border-sky-100 hover:border-sky-300"
    },
    backend: {
      headerBg: "bg-emerald-400",
      shadow: "shadow-[4px_4px_0px_0px_#10b981]",
      pillBg: "bg-emerald-50/40",
      pillBorder: "border-emerald-100 hover:border-emerald-300"
    },
    ai_ml: {
      headerBg: "bg-purple-400",
      shadow: "shadow-[4px_4px_0px_0px_#8b5cf6]",
      pillBg: "bg-purple-50/40",
      pillBorder: "border-purple-100 hover:border-purple-300"
    },
    tools: {
      headerBg: "bg-rose-400",
      shadow: "shadow-[4px_4px_0px_0px_#f43f5e]",
      pillBg: "bg-rose-50/40",
      pillBorder: "border-rose-100 hover:border-rose-300"
    }
  }

  // Exact brand colors for each tech icon
  const brandColors: Record<string, string> = {
    // Languages
    c: "#a8b9cc",
    cpp: "#00599c",
    python: "#3776ab",
    php: "#777bb4",
    java: "#e41f23",
    dart: "#00b4ab",
    
    // Frontend
    nextjs: "#000000",
    tailwind: "#06b6d4",
    laravel: "#ff2d20",
    symfony: "#000000",
    flutter: "#02569b",
    
    // Backend
    springboot: "#6db33f",
    fastapi: "#009688",
    mongodb: "#47a248",
    
    // AI / ML
    tensorflow: "#ff6f00",
    pytorch: "#ee4c2c",
    openaiapi: "#00a67e",
    numpy: "#013243",
    pandas: "#150458",
    "scikit-learn": "#f7931e",
    
    // Tools
    docker: "#2496ed",
    aws: "#ff9900",
    vercel: "#000000",
    git: "#f05032",
    figma: "#f24e1e"
  }

  return (
    <section id="skills" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative z-10 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 pb-4 border-b border-zinc-950">
          <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-800 font-bold">
            Tooling & Architecture
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillsArr], index) => {
            const cleanedCategory = category
              .replace(/_/g, " & ")
              .replace(/\bai\b/i, "AI")
              .replace(/\bml\b/i, "ML")
              .replace(/^[a-z]/, (c) => c.toUpperCase());

            const style = categoryStyles[category] || {
              headerBg: "bg-zinc-200",
              shadow: "shadow-[4px_4px_0px_0px_#09090b]",
              pillBg: "bg-zinc-50/40",
              pillBorder: "border-zinc-100 hover:border-zinc-300"
            }

            return (
              <div 
                key={category}
                className={`border-2 border-zinc-950 bg-white transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${style.shadow} reveal`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Neobrutalist Category Header with solid background color */}
                <div className={`${style.headerBg} border-b-2 border-zinc-950 px-4 py-2.5 flex items-center justify-between`}>
                  <h3 className="font-mono text-xs uppercase tracking-widest font-black text-zinc-950">
                    {cleanedCategory}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-zinc-950" />
                </div>
                
                {/* Skill Pills Container */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {skillsArr.map((skill) => {
                      const key = skill.toLowerCase().replace(/\s|\./g, "");
                      const Icon = iconMap[key] || Wrench;
                      const iconColor = brandColors[key] || "#6b7280";

                      return (
                        <div 
                          key={skill}
                          className={`flex items-center gap-1.5 rounded border px-2.5 py-1.5 text-xs sm:text-sm text-zinc-800 transition-all duration-200 cursor-default ${style.pillBg} ${style.pillBorder}`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" style={{ color: iconColor }} />
                          <span className="font-sans font-normal tracking-wide">{skill}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
