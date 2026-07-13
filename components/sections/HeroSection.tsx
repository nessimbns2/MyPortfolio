"use client"
import React from "react"
import { ArrowRight, ArrowDown } from "lucide-react"

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
  // Karol Binkowski screenshot style "ENGINEER SPEC" data
  const specRows = [
    { label: "BASED", value: "Ariana, TN" },
    { label: "MODE", value: "Remote · Intl" },
    { label: "ENGAGE", value: "Part-time" },
    { label: "STACK", value: "Flutter · React · FastAPI" },
    { label: "STATUS", value: "Available", isStatus: true }
  ]

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Main Grid: Headline/Description on Left, Spec Card on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

          {/* Left Column: Eyebrow, Giant Headline, Description, Actions */}
          <div className="md:col-span-7 space-y-6 animate-hero-slide-up">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-900 font-bold">
                SOFTWARE ENGINEER
              </span>
            </div>

            {/* Giant Neobrutalist Headline */}
            <h1 className="font-sans font-black text-5xl sm:text-7xl text-zinc-950 uppercase tracking-tighter leading-[0.9] flex flex-col">
              <span>YOU HAVE</span>
              <span>SOMETHING.</span>
              <span className="mt-1">
                <span className="bg-sky-400 text-zinc-950 px-3 py-1 inline-block">
                  I SHIP IT.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-zinc-800 font-sans text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              You have a software idea, an ML prototype, or an application that's stuck. I find what's blocking it and ship the fix — then explain every decision clearly.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="font-mono text-sm font-bold text-zinc-950 bg-sky-400 border-2 border-zinc-950 px-6 py-3 shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all focus:outline-none"
              >
                BOOK A CALL →
              </button>
              <a
                href="#projects"
                className="font-mono text-sm font-bold text-zinc-950 bg-white border-2 border-zinc-950 px-6 py-3 shadow-[3px_3px_0px_0px_rgba(9,9,11,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center gap-1.5"
              >
                SEE THE WORK ↓
              </a>
            </div>
          </div>

          {/* Right Column: Neobrutalist "ENGINEER SPEC" Card */}
          <div className="md:col-span-5 animate-spec-slide-in">
            <div className="border-2 border-zinc-950 bg-white shadow-[4px_4px_0px_0px_rgba(9,9,11,1)]">
              {/* Card Header */}
              <div className="bg-sky-400 border-b-2 border-zinc-950 px-4 py-3 flex items-center justify-between">
                <span className="font-mono text-sm font-black uppercase tracking-wider text-zinc-950">
                  ENGINEER SPEC
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-950 animate-pulse" />
              </div>

              {/* Card Body Rows */}
              <div className="divide-y divide-zinc-200">
                {specRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center px-4 py-3.5 font-mono text-xs leading-none">
                    {/* Label */}
                    <div className="col-span-4 text-zinc-400 font-bold uppercase tracking-wider">
                      {row.label}
                    </div>
                    {/* Value */}
                    <div className="col-span-8 text-zinc-800 font-bold flex items-center gap-1.5">
                      {row.isStatus ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                          <span>{row.value}</span>
                        </>
                      ) : (
                        <span>{row.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
