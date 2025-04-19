'use client'

import { useEffect, useRef } from 'react'

export function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const total = 100
    for (let i = 0; i < total; i++) {
      const star = document.createElement('div')
      const size = Math.random() * 2 + 1
      const blur = Math.random() * 3 + 1

      star.className = 'star'
      star.style.width = `${size}px`
      star.style.height = `${size}px`
      star.style.top = `${Math.random() * 100}%`
      star.style.left = `${Math.random() * 100}%`
      star.style.filter = `blur(${blur}px)`
      star.style.animationDuration = `${30 + Math.random() * 30}s`
      star.style.animationDelay = `${Math.random() * 10}s`

      container.appendChild(star)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    />
  )
}
