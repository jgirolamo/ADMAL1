import React, { useMemo } from 'react'
import './SacredGeometryBackground.css'

function SacredGeometryBackground() {
  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5
    }))
  }, [])

  // Generate shooting stars
  const shootingStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      delay: i * 8 + Math.random() * 5,
      duration: 1 + Math.random() * 0.5,
      top: Math.random() * 50,
      left: Math.random() * 30
    }))
  }, [])

  return (
    <div className="sacred-geometry-bg">
      {/* Animated stars */}
      <div className="stars-container">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Shooting stars */}
      <div className="shooting-stars-container">
        {shootingStars.map(star => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}
      </div>

      {/* Flower of Life pattern */}
      <svg className="geometry-pattern flower-of-life" viewBox="0 0 400 400">
        <defs>
          <radialGradient id="flowerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0.08)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
          </radialGradient>
          <pattern id="flowerPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="60" cy="20" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="20" cy="60" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="60" cy="60" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="40" cy="20" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
            <circle cx="40" cy="60" r="18" fill="none" stroke="rgba(255, 215, 0, 0.06)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowerPattern)"/>
        <circle cx="200" cy="200" r="180" fill="url(#flowerGradient)"/>
      </svg>

      {/* Metatron's Cube - enhanced */}
      <svg className="geometry-pattern metatrons-cube" viewBox="0 0 300 300">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#glow)">
          <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(147, 112, 219, 0.08)" strokeWidth="1"/>
          <circle cx="150" cy="50" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          <circle cx="63" cy="100" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          <circle cx="237" cy="100" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          <circle cx="63" cy="200" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          <circle cx="237" cy="200" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          <circle cx="150" cy="250" r="50" fill="none" stroke="rgba(147, 112, 219, 0.06)" strokeWidth="1"/>
          {/* Connecting lines */}
          <line x1="150" y1="50" x2="63" y2="100" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="150" y1="50" x2="237" y2="100" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="63" y1="100" x2="63" y2="200" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="237" y1="100" x2="237" y2="200" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="63" y1="200" x2="150" y2="250" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="237" y1="200" x2="150" y2="250" stroke="rgba(147, 112, 219, 0.05)" strokeWidth="0.5"/>
          <line x1="63" y1="100" x2="237" y2="200" stroke="rgba(147, 112, 219, 0.03)" strokeWidth="0.5"/>
          <line x1="237" y1="100" x2="63" y2="200" stroke="rgba(147, 112, 219, 0.03)" strokeWidth="0.5"/>
        </g>
      </svg>

      {/* Zodiac wheel outline */}
      <svg className="geometry-pattern zodiac-wheel" viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255, 215, 0, 0.03)" strokeWidth="1"/>
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255, 215, 0, 0.02)" strokeWidth="1"/>
        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255, 215, 0, 0.02)" strokeWidth="1"/>
        {/* 12 divisions */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 - 90) * Math.PI / 180
          const x1 = 200 + 120 * Math.cos(angle)
          const y1 = 200 + 120 * Math.sin(angle)
          const x2 = 200 + 180 * Math.cos(angle)
          const y2 = 200 + 180 * Math.sin(angle)
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(255, 215, 0, 0.03)" strokeWidth="0.5"/>
          )
        })}
      </svg>

      {/* Nebula clouds */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Overlay gradient */}
      <div className="geometry-overlay"></div>
    </div>
  )
}

export default SacredGeometryBackground
