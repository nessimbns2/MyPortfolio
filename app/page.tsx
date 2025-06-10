"use client"
import DockerIcon from "@/components/icons/DockerIcon"
import AwsIcon from "@/components/icons/AwsIcon"
import GitIcon from "@/components/icons/GitIcon"
import VercelIcon from "@/components/icons/VercelIcon"
import FigmaIcon from "@/components/icons/FigmaIcon"
import { Code, Database, Brain, Wrench } from "lucide-react"
import { SiDart, SiFlutter } from "react-icons/si";

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { AnimatedBackground } from "@/components/animated-background"
import { FloatingOrbs } from "@/components/floating-orbs"
import { GeometricPatterns } from "@/components/geometric-patterns"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
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
}

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Place this iconMap at the top of the Portfolio function
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

  // --- Skills Carousel logic ---

  function AutoScrollCarouselContent({ skills, iconMap }: { skills: string[]; iconMap: Record<string, any> }) {
    const { useCarousel, CarouselContent, CarouselItem } = require("@/components/ui/carousel");
    const { scrollNext, api } = useCarousel();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
      if (!api) return;
      intervalRef.current = setInterval(() => {
        scrollNext();
      }, 2000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [api, scrollNext]);
    return (
      <CarouselContent className="-ml-4 flex">
        {skills.map((skill, i) => {
          const key = skill.toLowerCase().replace(/\s|\./g, "");
          const Icon = (iconMap as Record<string, any>)[key] || Wrench;
          return (
            <CarouselItem key={skill} className="flex flex-col items-center justify-center p-8 basis-1/6 max-w-[16.66%] min-w-[16.66%]">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 mb-4 shadow-lg">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <span className="text-white/90 text-lg font-semibold mt-2 text-center">{skill}</span>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/portfolio.json")

        if (!response.ok) {
          throw new Error(`Failed to fetch portfolio data: ${response.status}`)
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error("Error loading portfolio data:", error)
        setData(fallbackData)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)

      // Update active section
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
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

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 flex items-center justify-center relative overflow-hidden">
        <AnimatedBackground />
        <FloatingOrbs />
        <div className="flex flex-col items-center space-y-6 z-10">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/20 border-b-purple-500 rounded-full animate-spin animate-reverse"></div>
          </div>
          <div className="text-center">
            <p className="text-white/90 text-xl font-medium mb-2">Loading Portfolio</p>
            <p className="text-white/60 text-sm">Preparing something amazing...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />
      <FloatingOrbs />
      <GeometricPatterns />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-2xl border-b border-white/5 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {data.personal.name}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                    activeSection === item.id
                      ? "text-white bg-white/10 shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-2xl animate-slide-down">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "experience", label: "Experience" },
                  { id: "projects", label: "Projects" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-3 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        name={data.personal.name}
        title={data.personal.title}
        tagline={data.personal.tagline}
        social={data.personal.social}
        onContactClick={() => scrollToSection("contact")}
      />

      {/* About Section */}
      <AboutSection
        description={data.about.description}
        highlights={data.about.highlights}
      />

      {/* Skills Section */}
      <SkillsSection skills={data.skills} iconMap={iconMap} />

      {/* Experience Section */}
      <ExperienceSection experience={data.experience} />

      {/* Projects Section */}
      <ProjectsSection projects={data.projects} />

      {/* Contact Section */}
      <ContactSection
        email={data.personal.email}
        phone={data.personal.phone}
        location={data.personal.location}
      />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/30 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 font-light text-lg">
            © 2024 {data.personal.name}. Crafted with passion and modern technology.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 animate-bounce-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}


