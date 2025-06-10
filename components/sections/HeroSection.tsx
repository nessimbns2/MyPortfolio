"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react"

interface HeroSectionProps {
  name: string
  title: string
  tagline: string
  social: {
    github: string
    linkedin: string
    twitter: string
  }
  onContactClick: () => void
}

export default function HeroSection({ name, title, tagline, social, onContactClick }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center text-6xl border border-white/10">
                  🤖
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse"></div>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight animate-text-shimmer">
              {name}
            </h1>

            <div className="relative mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6 font-light tracking-wide">
                {title}
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              {tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up delay-300">
            <Button
              onClick={onContactClick}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/20 text-black font-semibold px-10 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-8 animate-fade-in-up delay-500">
            {[
              { href: social.github, icon: Github, label: "GitHub", color: "hover:text-gray-300" },
              { href: social.linkedin, icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
              { href: social.twitter, icon: Twitter, label: "Twitter", color: "hover:text-cyan-400" },
            ].map(({ href, icon: Icon, label, color }) => (
              <Link
                key={label}
                href={href}
                className={`group text-white/60 ${color} transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950`}
                aria-label={`Visit ${label} profile`}
              >
                <Icon className="w-7 h-7 group-hover:animate-pulse" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
