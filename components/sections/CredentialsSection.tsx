"use client"
import React from "react"
import { Award, GraduationCap, MapPin, Calendar } from "lucide-react"

interface EducationItem {
  institution: string
  degree: string
  location: string
  duration: string
}

interface CertificationItem {
  name: string
  issuer: string
  date: string
}

interface CredentialsSectionProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

export default function CredentialsSection({ education, certifications }: CredentialsSectionProps) {
  return (
    <section id="credentials" className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 pb-4 border-b border-zinc-900">
          <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-800 font-bold">
            Academics & Credentials
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          
          {/* Left Column: Education */}
          <div className="md:col-span-7 space-y-8 pb-8 md:pb-0">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-600 font-bold pb-1.5 border-b border-sky-100">
              <GraduationCap className="w-4 h-4 text-sky-500" />
              Education History
            </h3>

            <div className="space-y-8 divide-y divide-zinc-100">
              {education && education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="reveal space-y-1.5 first:pt-0 pt-6 group"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="font-mono text-xs text-zinc-400 tracking-wider">
                    {edu.duration}
                  </span>
                  <h4 className="font-sans font-black text-base sm:text-lg text-zinc-950 leading-tight group-hover:text-sky-600 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-zinc-600 font-normal">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-xs uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="md:col-span-5 space-y-8 pt-8 md:pt-0 md:pl-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-600 font-bold pb-1.5 border-b border-purple-100">
              <Award className="w-4 h-4 text-purple-500" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications && certifications.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(56,189,248,0.7)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none reveal"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <h4 className="font-sans font-bold text-sm sm:text-base text-zinc-950 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-sky-600 mt-1.5 font-mono uppercase tracking-wider font-bold">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1.5 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
