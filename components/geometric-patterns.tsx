"use client"

export function GeometricPatterns() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {/* Corner geometric elements */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute inset-0 border-l-2 border-t-2 border-blue-500/20 animate-pulse" />
        <div className="absolute top-4 left-4 w-4 h-4 border border-blue-400/40 rotate-45 animate-spin-slow" />
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute inset-0 border-r-2 border-t-2 border-purple-500/20 animate-pulse delay-500" />
        <div className="absolute top-4 right-4 w-6 h-6 border border-purple-400/40 animate-pulse" />
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <div className="absolute inset-0 border-l-2 border-b-2 border-cyan-500/20 animate-pulse delay-1000" />
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-cyan-400/40 rotate-45 animate-bounce-slow" />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute inset-0 border-r-2 border-b-2 border-pink-500/20 animate-pulse delay-1500" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-2 border-pink-400/40 rounded-full animate-ping-slow" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
