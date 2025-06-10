"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from "react"

interface Experience {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

interface ExperienceSectionProps {
  experience: Experience[]
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => (
  <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="space-y-12">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="group bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/8 hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-white text-2xl lg:text-3xl font-bold group-hover:text-blue-200 transition-colors duration-300">
                    {exp.position}
                  </CardTitle>
                  <CardDescription className="text-blue-400 text-xl font-semibold">{exp.company}</CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="border-white/20 text-white/80 font-medium px-4 py-2 text-sm self-start bg-white/5 backdrop-blur-sm"
                >
                  {exp.duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 mb-8 leading-relaxed text-lg">{exp.description}</p>
              <div className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="group/item flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-3 group-hover:item:scale-150 transition-transform duration-300"></div>
                    <span className="text-white/70 group-hover/item:text-white/90 leading-relaxed transition-colors duration-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default ExperienceSection
