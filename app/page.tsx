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
                {data.personal.name}
              </h1>

              <div className="relative mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6 font-light tracking-wide">
                  {data.personal.title}
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                {data.personal.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 animate-fade-in-up delay-300">
              <Button
                onClick={() => scrollToSection("contact")}
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
                { href: data.personal.social.github, icon: Github, label: "GitHub", color: "hover:text-gray-300" },
                {
                  href: data.personal.social.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                { href: data.personal.social.twitter, icon: Twitter, label: "Twitter", color: "hover:text-cyan-400" },
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

      {/* About Section */}
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
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed font-light">{data.about.description}</p>

              <div className="space-y-6">
                {data.about.highlights.map((highlight, index) => (
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

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(data.skills).map(([category, skills], index) => (
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
                    {skills.map((skill, skillIndex) => {
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

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-12">
            {data.experience.map((exp, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 shadow-xl hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold shadow-lg animate-pulse">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-xl font-bold group-hover:text-blue-200 transition-colors duration-300">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-white/70 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 text-white/80 text-xs font-medium hover:bg-white/10 hover:scale-110 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                    >
                      <Link href={project.demo} aria-label={`View ${project.name} demo`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/20 text-black hover:bg-white/10 hover:border-white/30 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
                    >
                      <Link href={project.github} aria-label={`View ${project.name} source code`}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              {
                "I'm always interested in new opportunities and exciting projects. Let's connect and build something amazing together!"
              }
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                label: "Email",
                value: data.personal.email,
                color: "from-blue-500 to-cyan-500",
                hoverColor: "hover:shadow-blue-500/25",
              },
              {
                icon: Phone,
                label: "Phone",
                value: data.personal.phone,
                color: "from-green-500 to-emerald-500",
                hoverColor: "hover:shadow-green-500/25",
              },
              {
                icon: MapPin,
                label: "Location",
                value: data.personal.location,
                color: "from-purple-500 to-pink-500",
                hoverColor: "hover:shadow-purple-500/25",
              },
            ].map(({ icon: Icon, label, value, color, hoverColor }, index) => (
              <Card
                key={label}
                className={`group bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl ${hoverColor} hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-white font-bold mb-3 text-lg group-hover:text-blue-200 transition-colors duration-300">
                    {label}
                  </p>
                  <p className="text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300">
                    {value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            <Link href={`mailto:${data.personal.email}`} aria-label="Send email">
              <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Send Message
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </Link>
          </Button>
        </div>
      </section>

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


