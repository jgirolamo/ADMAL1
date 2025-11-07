import React from 'react'
import './SacredGeometryBackground.css'

function SacredGeometryBackground() {
  return (
    <div className="sacred-geometry-bg">
      {/* Flower of Life pattern */}
      <svg className="geometry-pattern flower-of-life" viewBox="0 0 400 400">
        <defs>
          <pattern id="flowerPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="75" cy="25" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="25" cy="75" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="75" cy="75" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="50" cy="25" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="50" cy="75" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="25" cy="50" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
            <circle cx="75" cy="50" r="20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flowerPattern)"/>
      </svg>

      {/* Metatron's Cube */}
      <svg className="geometry-pattern metatrons-cube" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="150" cy="50" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="75" cy="125" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="225" cy="125" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="75" cy="175" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="225" cy="175" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <circle cx="150" cy="250" r="50" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="150" y1="50" x2="75" y2="125" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="150" y1="50" x2="225" y2="125" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="75" y1="125" x2="75" y2="175" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="225" y1="125" x2="225" y2="175" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="75" y1="175" x2="150" y2="250" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
        <line x1="225" y1="175" x2="150" y2="250" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"/>
      </svg>

      {/* Hexagonal grid */}
      <svg className="geometry-pattern hex-grid" viewBox="0 0 200 200">
        <defs>
          <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)"/>
      </svg>

      {/* Golden ratio spiral */}
      <svg className="geometry-pattern spiral" viewBox="0 0 200 200">
        <path d="M 100,100 A 20,20 0 0,1 120,100 A 30,30 0 0,1 90,130 A 50,50 0 0,1 150,80 A 80,80 0 0,1 20,180" 
              fill="none" stroke="rgba(255, 215, 0, 0.05)" strokeWidth="1"/>
      </svg>

      {/* Overlay gradient */}
      <div className="geometry-overlay"></div>
    </div>
  )
}

export default SacredGeometryBackground


