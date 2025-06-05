"use client"

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Smaller floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400/30 rounded-full animate-float-delayed" />
    </div>
  )
}
