"use client"
import React from "react"

interface AboutSectionProps {
  description: string
  highlights: string[]
}

const AboutSection: React.FC<AboutSectionProps> = ({ description, highlights }) => (
  <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="space-y-8 animate-fade-in-left">
          <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-light">{description}</p>
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                <span className="text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-in-right">
          <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 group overflow-hidden">
            <div className="text-8xl lg:text-9xl opacity-80 group-hover:scale-110 transition-transform duration-700">
              👨‍💻
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection
