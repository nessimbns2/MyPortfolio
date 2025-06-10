"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Project {
  name: string
  description: string
  technologies: string[]
  github: string
  demo: string
  showDemo?: boolean
  image: string
  featured: boolean
}

interface ProjectsSectionProps {
  projects: Project[]
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => (
  <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
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
                {project.showDemo && project.demo && project.demo.trim() !== "" && (
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
                )}
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 text-black hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white hover:border-green-400 font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
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
)

export default ProjectsSection
