"use client"
import DockerIcon from "@/components/icons/DockerIcon"
import AwsIcon from "@/components/icons/AwsIcon"
import GitIcon from "@/components/icons/GitIcon"
import VercelIcon from "@/components/icons/VercelIcon"
import FigmaIcon from "@/components/icons/FigmaIcon"
import { Code, Database, Brain, Wrench } from "lucide-react"
import { SiDart, SiFlutter } from "react-icons/si";

import { useEffect, useState } from "react"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, ArrowUp } from "lucide-react"
import Link from "next/link"

import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import CredentialsSection from "@/components/sections/CredentialsSection"
import ContactSection from "@/components/sections/ContactSection"

import VueIcon from "@/components/icons/VueIcon";
import NextjsIcon from "@/components/icons/NextjsIcon";
import HtmlIcon from "@/components/icons/HtmlIcon";
import CssIcon from "@/components/icons/CssIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import FastapiIcon from "@/components/icons/FastapiIcon";
import SpringBootIcon from "@/components/icons/SpringBootIcon";
import MongodbIcon from "@/components/icons/MongodbIcon";
import SqlIcon from "@/components/icons/SqlIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import PhpIcon from "@/components/icons/PhpIcon";
import TensorflowIcon from "@/components/icons/TensorflowIcon";
import PytorchIcon from "@/components/icons/PytorchIcon";
import ScikitLearnIcon from "@/components/icons/ScikitLearnIcon";
import NumpyIcon from "@/components/icons/NumpyIcon";
import PandasIcon from "@/components/icons/PandasIcon";
import JavascriptIcon from "@/components/icons/JavascriptIcon";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import JavaIcon from "@/components/icons/JavaIcon";
import CsharpIcon from "@/components/icons/CsharpIcon";
import CIcon from "@/components/icons/CIcon";
import CppIcon from "@/components/icons/CppIcon";
import GoIcon from "@/components/icons/GoIcon";
import RustIcon from "@/components/icons/RustIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import AngularIcon from "@/components/icons/AngularIcon";
import SvelteIcon from "@/components/icons/SvelteIcon";
import ThreejsIcon from "@/components/icons/ThreejsIcon";
import NodejsIcon from "@/components/icons/NodejsIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import PostgresqlIcon from "@/components/icons/PostgresqlIcon";
import OpenaiIcon from "@/components/icons/OpenaiIcon";
import HuggingfaceIcon from "@/components/icons/HuggingfaceIcon";
import LangchainIcon from "@/components/icons/LangchainIcon";
import SymfonyIcon from "@/components/icons/SymfonyIcon";
import LaravelIcon from "@/components/icons/LaravelIcon";
import { fallbackData } from "@/lib/data"

interface PortfolioData {
  personal: {
    name: string
    title: string
    tagline: string
    email: string
    phone: string
    location: string
    website: string
    social: {
      github: string
      linkedin: string
      twitter: string
    }
  }
  about: {
    description: string
    highlights: string[]
  }
  skills: {
    languages: string[]
    frontend: string[]
    backend: string[]
    ai_ml: string[]
    tools: string[]
  }
  experience: Array<{
    company: string
    position: string
    duration: string
    description: string
    achievements: string[]
  }>
  projects: Array<{
    name: string
    description: string
    technologies: string[]
    github: string
    demo: string
    showDemo?: boolean
    image: string
    featured: boolean
  }>
  education?: Array<{
    institution: string
    degree: string
    location: string
    duration: string
  }>
  certifications?: Array<{
    name: string
    issuer: string
    date: string
  }>
}

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [isLoaderActive, setIsLoaderActive] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const iconMap: Record<string, React.ComponentType<any>> = {
    vue: VueIcon,
    nextjs: NextjsIcon,
    php: PhpIcon,
    html: HtmlIcon,
    css: CssIcon,
    tailwind: TailwindIcon,
    javascript: JavascriptIcon,
    typescript: TypescriptIcon,
    python: PythonIcon,
    java: JavaIcon,
    csharp: CsharpIcon,
    c: CIcon,
    cpp: CppIcon,
    go: GoIcon,
    rust: RustIcon,
    react: ReactIcon,
    angular: AngularIcon,
    svelte: SvelteIcon,
    "tailwind css": TailwindIcon,
    threejs: ThreejsIcon,
    nodejs: NodejsIcon,
    "node.js": NodejsIcon,
    express: ExpressIcon,
    fastapi: FastapiIcon,
    springboot: SpringBootIcon,
    postgresql: PostgresqlIcon,
    mongodb: MongodbIcon,
    tensorflow: TensorflowIcon,
    pytorch: PytorchIcon,
    openaiapi: OpenaiIcon,
    huggingFace: HuggingfaceIcon,
    langchain: LangchainIcon,
    "scikit-learn": ScikitLearnIcon,
    numpy: NumpyIcon,
    pandas: PandasIcon,
    docker: DockerIcon,
    aws: AwsIcon,
    vercel: VercelIcon,
    git: GitIcon,
    figma: FigmaIcon,
    symfony: SymfonyIcon,
    laravel: LaravelIcon,
    dart: SiDart,
    flutter: SiFlutter,
  };

  // Fetch portfolio content and show the boot loader only once per session
  useEffect(() => {
    const sessionLoaderKey = "portfolioLoaderShown"
    const shouldSkipLoader = window.sessionStorage.getItem(sessionLoaderKey) === "true"

    let dataLoaded = false
    let timerDone = shouldSkipLoader
    let pendingJsonData: PortfolioData | null = null

    const checkLoadingState = () => {
      if (dataLoaded && timerDone) {
        setData(pendingJsonData)
        setIsLoaderActive(false)
      }
    }

    const fetchData = async () => {
      try {
        const response = await fetch("/data/portfolio.json")
        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data: ${response.status}`)
        }
        pendingJsonData = await response.json()
      } catch (error) {
        console.error("Error loading portfolio data:", error)
        pendingJsonData = fallbackData
      } finally {
        dataLoaded = true
        checkLoadingState()
      }
    }

    const timer = setTimeout(() => {
      timerDone = true
      window.sessionStorage.setItem(sessionLoaderKey, "true")
      checkLoadingState()
    }, shouldSkipLoader ? 0 : 1700)

    fetchData()

    return () => clearTimeout(timer)
  }, [])

  // Scroll reveal trigger
  useEffect(() => {
    if (!data) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, { threshold: 0.05 })

    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [data])

  // Track active scroll section
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      const sections = ["hero", "experience", "credentials", "projects", "about", "skills", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!data || isLoaderActive) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Animated Initials Box */}
        <div className="w-16 h-16 flex items-center justify-center bg-zinc-950 text-white font-mono text-xl font-black uppercase shadow-[4px_4px_0px_0px_rgba(9,9,11,0.15)] animate-bounce mb-4">
          NB
        </div>

        {/* Name Title */}
        <h1 className="font-sans font-black text-lg tracking-widest text-zinc-950 uppercase mb-6">
          NESSIM BARAKET
        </h1>

        {/* Retro Neobrutalist Loader Box */}
        <div className="border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(9,9,11,1)] w-full max-w-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-zinc-800">
              System Booting
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Progress Bar Container */}
          <div className="border-2 border-zinc-950 h-5 w-full bg-zinc-100 overflow-hidden relative">
            <div className="h-full bg-sky-400 border-r-2 border-zinc-950 animate-progress-fill" />
          </div>

          {/* Status Message */}
          <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider flex justify-between">
            <span>Shippers Active</span>
            <span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    )
  }

  const sectionsList = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "credentials", label: "Credentials" },
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "skills", label: "Stack" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden relative bg-[#fafafa] text-zinc-900 selection:bg-zinc-200">

      {/* Sticky Header Navigation matching Karol Binkowski's clean header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-950 bg-white h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 select-none text-zinc-950 font-sans font-black text-sm tracking-wider uppercase hover:opacity-85 focus:outline-none"
            aria-label={`${data.personal.name} Home`}
          >
            <span className="w-8 h-8 flex items-center justify-center bg-zinc-950 text-white font-mono text-[11px] font-black uppercase">NB</span>
            <span className="tracking-widest">{data.personal.name}</span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {sectionsList.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`text-[10px] font-mono font-bold uppercase tracking-widest transition-colors focus:outline-none ${activeSection === sec.id ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
                  }`}
              >
                {sec.label}
              </button>
            ))}
            {/* Call to action booking button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-[10px] font-bold text-zinc-950 bg-sky-400 border-2 border-zinc-950 px-4 py-2 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all ml-2"
            >
              BOOK A CALL →
            </button>
          </nav>

          {/* Mobile nav toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center md:hidden border-2 border-zinc-950 rounded bg-white hover:bg-zinc-50 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4 text-zinc-950" /> : <Menu className="h-4 w-4 text-zinc-950" />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="absolute top-20 left-0 w-full border-b-2 border-zinc-950 bg-white shadow-lg md:hidden">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {sectionsList.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`block w-full text-left py-3 px-3 text-xs font-mono font-bold uppercase tracking-wider border-b border-zinc-100 last:border-0 transition-colors ${activeSection === sec.id ? "text-zinc-950 font-black" : "text-zinc-500 hover:text-zinc-950"
                    }`}
                >
                  {sec.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center mt-4 py-2.5 bg-sky-400 text-zinc-950 border-2 border-zinc-950 text-[10px] font-mono font-bold rounded-none shadow-[2px_2px_0px_0px_rgba(9,9,11,1)]"
              >
                BOOK A CALL →
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Sections */}
      <main id="main" className="flex-1 mt-16">

        {/* Hero Section */}
        <HeroSection
          name={data.personal.name}
          title={data.personal.title}
          tagline={data.personal.tagline}
          social={data.personal.social}
          onContactClick={() => scrollToSection("contact")}
        />

        {/* Experience Section */}
        <ExperienceSection experience={data.experience} />

        {/* Credentials Section */}
        <CredentialsSection
          education={data.education || []}
          certifications={data.certifications || []}
        />

        {/* Projects Section */}
        <ProjectsSection projects={data.projects} />

        {/* About Section */}
        <AboutSection
          description={data.about.description}
          highlights={data.about.highlights}
        />

        {/* Skills Section */}
        <SkillsSection skills={data.skills} iconMap={iconMap} />

        {/* Contact Section */}
        <ContactSection
          email={data.personal.email}
          phone={data.personal.phone}
          location={data.personal.location}
        />
      </main>

      {/* Structured Blueprint Footer matching karolbinkow.ski */}
      <footer className="py-16 px-4 sm:px-6 border-t border-zinc-200 bg-[#f7f7f8] relative z-10">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-12 px-4">

          <div className="md:col-span-6 space-y-4">
            <span className="font-sans font-bold text-base text-zinc-900 block">
              {data.personal.name}
            </span>
            <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-sm">
              Software engineer & builder. I build reliable backend services, train precise models, and ship responsive mobile interfaces.
            </p>
            <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-wider">
              © 2026 {data.personal.name}. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">Pages</span>
            <div className="flex flex-col gap-2 text-sm font-mono">
              {sectionsList.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left text-zinc-500 hover:text-zinc-900 transition-colors focus:outline-none"
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 font-semibold block">Socials</span>
            <div className="flex flex-col gap-2 text-sm font-mono">
              <a href={data.personal.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                GitHub →
              </a>
              <a href={data.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                LinkedIn →
              </a>
              <a href={`mailto:${data.personal.email}`} className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Email →
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Minimal Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2.5 bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-950 rounded hover:border-zinc-500 transition-all duration-300 shadow-sm focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
