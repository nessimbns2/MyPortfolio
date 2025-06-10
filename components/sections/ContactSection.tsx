"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import React from "react"

interface ContactSectionProps {
  email: string
  phone: string
  location: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ email, phone, location }) => (
  <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
        <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          {"I'm always interested in new opportunities and exciting projects. Let's connect and build something amazing together!"}
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Mail,
            label: "Email",
            value: email,
            color: "from-blue-500 to-cyan-500",
            hoverColor: "hover:shadow-blue-500/25",
          },
          {
            icon: Phone,
            label: "Phone",
            value: phone,
            color: "from-green-500 to-emerald-500",
            hoverColor: "hover:shadow-green-500/25",
          },
          {
            icon: MapPin,
            label: "Location",
            value: location,
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
        <Link href={`mailto:${email}`} aria-label="Send email">
          <Mail className="w-6 h-6 mr-3 group-hover:animate-bounce" />
          Send Message
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </Link>
      </Button>
    </div>
  </section>
)

export default ContactSection
