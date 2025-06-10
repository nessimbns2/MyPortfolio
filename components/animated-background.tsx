"use client"

import { useEffect, useRef } from "react"

interface FloatingBlock {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const blocksRef = useRef<FloatingBlock[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBlocks = () => {
      const blocks: FloatingBlock[] = []
      const blockCount = Math.floor((window.innerWidth * window.innerHeight) / 50000)

      for (let i = 0; i < blockCount; i++) {
        blocks.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.3 + 0.1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
        })
      }
      blocksRef.current = blocks
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blocksRef.current.forEach((block) => {
        // Update position
        block.y -= block.speed
        block.rotation += block.rotationSpeed

        // Reset block when it goes off screen
        if (block.y < -block.size) {
          block.y = canvas.height + block.size
          block.x = Math.random() * canvas.width
        }

        // Draw block
        ctx.save()
        ctx.translate(block.x, block.y)
        ctx.rotate((block.rotation * Math.PI) / 180)
        ctx.fillStyle = `rgba(59, 130, 246, ${block.opacity})`
        ctx.fillRect(-block.size / 2, -block.size / 2, block.size, block.size)
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createBlocks()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createBlocks()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
