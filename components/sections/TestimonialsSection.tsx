"use client"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote: "Nessim demonstrated outstanding technical skills during his internship. He was instrumental in developing modular Spring Boot features and building responsive Flutter interfaces. A highly self-driven and fast learner.",
      author: "Pradeep Joseph",
      role: "Lead Developer",
      company: "CubeIT Solutions"
    },
    {
      quote: "Highly methodical and passionate about solving complex algorithmic challenges. His work on our fleet operations platform support backend was clean, well-documented, and delivered ahead of schedule.",
      author: "Sarathy PB",
      role: "Senior Backend Engineer",
      company: "Fleet Logistics Group"
    },
    {
      quote: "A brilliant collaborator with a strong analytical focus. Nessim's ability to research, implement, and optimize machine learning models for recommendations is top-notch. He brings great energy to the team.",
      author: "Tina Nixon",
      role: "Project Advisor",
      company: "Tunisia Tech Institute"
    }
  ]

  return (
    <section id="testimonials" className="py-24 md:py-32 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="eyebrow">[ Praise & Endorsements ]</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[1.04] tracking-tight max-w-3xl">
            Trusted by mentors and industry professionals.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 duration-300 reveal"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Decorative accent element */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div>
                {/* Large decorative quotation mark */}
                <span className="font-display text-primary text-6xl leading-none select-none opacity-20 block mb-2">“</span>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed italic mb-8 font-light">
                  {t.quote}
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 mt-auto">
                <p className="font-semibold text-zinc-100 text-sm tracking-wide">{t.author}</p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {t.role} <span className="text-primary/70">@ {t.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
