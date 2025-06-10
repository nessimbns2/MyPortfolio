"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench } from "lucide-react"
import React from "react"

interface SkillsSectionProps {
  skills: Record<string, string[]>
  iconMap: Record<string, React.ComponentType<any>>
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, iconMap }) => (
  <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillsArr], index) => (
          <Card
            key={category}
            className="group bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-white text-xl font-semibold group-hover:text-blue-200 transition-colors duration-300">
                {category.replace("_", " & ").replace("ai_ml", "AI & ML")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skillsArr.map((skill, skillIndex) => {
                  const key = skill.toLowerCase().replace(/\s|\./g, "");
                  const Icon = iconMap[key] || Wrench;
                  return (
                    <div key={skill} className="relative flex flex-col items-center group/skill">
                      <Icon
                        className="w-10 h-10 text-white cursor-pointer transition-transform duration-200 group-hover/skill:scale-125"
                        style={{ animationDelay: `${index * 100 + skillIndex * 50}ms` }}
                      />
                      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-12 z-20 px-2 py-1 rounded bg-black/90 text-white text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default SkillsSection
