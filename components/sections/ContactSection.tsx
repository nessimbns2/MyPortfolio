"use client"
import React, { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

interface ContactSectionProps {
  email: string
  phone: string
  location: string
}

const ContactSection: React.FC<ContactSectionProps> = ({ email, phone, location }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    
    setTimeout(() => {
      setIsSending(false)
      setSent(true)
      
      const mailtoUrl = `mailto:${email}?subject=Project Collaboration - ${formData.name}&body=${encodeURIComponent(
        `Hi Nessim,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      )}`
      
      window.location.href = mailtoUrl
      
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setSent(false)
      }, 3000)
    }, 800)
  }

  return (
    <section id="contact" className="py-8 md:py-12 relative z-10 bg-[#f7f7f8] border-b border-zinc-200">
      <div className="max-w-6xl mx-auto w-full space-y-12 px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 pb-4 border-b border-zinc-200">
          <span className="w-2.5 h-2.5 bg-sky-500 inline-block flex-shrink-0" />
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-800 font-bold">
            Connection & Collab
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <p className="text-zinc-700 font-sans font-normal leading-relaxed text-sm sm:text-base">
              Book a call or send a direct email. No pitch deck—just your problem and whether I'm the right engineer to build your software.
            </p>

            <div className="space-y-4 font-mono text-xs sm:text-sm text-zinc-700">
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-2.5 text-zinc-700 hover:text-sky-600 transition-colors group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-sky-500 transition-colors" />
                <span>{email}</span> <span>→</span>
              </a>

              <a 
                href={`tel:${phone.replace(/\s+/g, "")}`} 
                className="flex items-center gap-2.5 text-zinc-700 hover:text-sky-600 transition-colors group"
              >
                <Phone className="w-4 h-4 text-zinc-400 group-hover:text-sky-500 transition-colors" />
                <span>{phone}</span> <span>→</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-500">
                <MapPin className="w-4 h-4 text-zinc-400" />
                {location}
              </div>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-zinc-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-zinc-900 rounded px-4 py-3 text-sm focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-zinc-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-zinc-900 rounded px-4 py-3 text-sm focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-zinc-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-zinc-900 rounded px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending || sent}
                className="w-full border-2 border-zinc-950 bg-sky-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold py-3 px-4 shadow-[2px_2px_0px_0px_rgba(9,9,11,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50"
              >
                {isSending ? (
                  <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                ) : sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Send message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection
