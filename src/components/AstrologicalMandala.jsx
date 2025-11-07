import React from 'react'
import './AstrologicalMandala.css'
import { getPlanetaryPositions } from '../utils/astrology'

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

const ZODIAC_EMOJIS = {
  'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋',
  'Leo': '♌', 'Virgo': '♍', 'Libra': '♎', 'Scorpio': '♏',
  'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓'
}

const ZODIAC_ELEMENTS = {
  'Aries': 'Fire', 'Taurus': 'Earth', 'Gemini': 'Air', 'Cancer': 'Water',
  'Leo': 'Fire', 'Virgo': 'Earth', 'Libra': 'Air', 'Scorpio': 'Water',
  'Sagittarius': 'Fire', 'Capricorn': 'Earth', 'Aquarius': 'Air', 'Pisces': 'Water'
}

const getElement = (sign) => ZODIAC_ELEMENTS[sign] || ''

function AstrologicalMandala({ currentDate }) {
  const planetaryPositions = getPlanetaryPositions()
  
  // Calculate angle for each zodiac sign (30 degrees apart)
  const getAngle = (index) => (index * 30) - 90 // Start from top
  
  // Generate stable degrees for zodiac signs (0-29 degrees within each sign)
  const getZodiacDegree = (index) => {
    const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    const stableDegree = (dayOfYear + index * 7) % 30 // 0-29 degrees, stable per day
    return stableDegree
  }
  
  // Generate stable degrees for planets (0-29 degrees within their sign)
  const getPlanetDegree = (planetIndex) => {
    const dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    const stableDegree = (dayOfYear + planetIndex * 11) % 30 // 0-29 degrees, stable per day
    return stableDegree
  }
  
  // Find which sign each planet is in
  let planetsInSigns = planetaryPositions.map((planet, index) => ({
    ...planet,
    signIndex: ZODIAC_SIGNS.indexOf(planet.sign),
    degree: getPlanetDegree(index),
    angle: getAngle(ZODIAC_SIGNS.indexOf(planet.sign))
  }))
  
  // Detect and adjust overlapping planets
  const MIN_ANGLE_DIFF = 15 // Minimum degrees between planets to avoid overlap
  planetsInSigns = planetsInSigns.map((planet, index) => {
    let adjustedAngle = planet.angle
    let adjustedRadius = -120 // Base radius for planets
    
    // Check for overlaps with other planets
    for (let i = 0; i < planetsInSigns.length; i++) {
      if (i === index) continue
      const otherPlanet = planetsInSigns[i]
      let angleDiff = Math.abs(adjustedAngle - otherPlanet.angle)
      if (angleDiff > 180) angleDiff = 360 - angleDiff
      
      // If too close, adjust angle slightly
      if (angleDiff < MIN_ANGLE_DIFF && angleDiff > 0) {
        // Adjust angle away from the other planet
        const adjustment = (MIN_ANGLE_DIFF - angleDiff) / 2
        if (adjustedAngle < otherPlanet.angle) {
          adjustedAngle -= adjustment
        } else {
          adjustedAngle += adjustment
        }
        // Normalize angle to 0-360
        adjustedAngle = ((adjustedAngle % 360) + 360) % 360
      }
      
      // If same sign, adjust radius slightly
      if (planet.signIndex === otherPlanet.signIndex && i < index) {
        adjustedRadius -= 5 // Move slightly inward
      }
    }
    
    return {
      ...planet,
      adjustedAngle,
      adjustedRadius
    }
  })

  return (
    <div className="mandala-container">
      <div className="mandala-wrapper">
        {/* Outer ring - Zodiac signs */}
        <div className="mandala-ring zodiac-ring">
          {ZODIAC_SIGNS.map((sign, index) => {
            const angle = getAngle(index)
            const isActive = planetsInSigns.some(p => p.signIndex === index)
            const signDegree = getZodiacDegree(index)
            return (
              <div
                key={sign}
                className={`zodiac-point ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`
                }}
              >
                <div className="zodiac-symbol">{ZODIAC_EMOJIS[sign]}</div>
                <div className="zodiac-details">
                  <div className="detail-line detail-degree">{signDegree}°</div>
                  <div className="detail-line detail-name">{sign}</div>
                  <div className="detail-line detail-element">{getElement(sign)}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Middle ring - Planets */}
        <div className="mandala-ring planet-ring">
          {planetsInSigns.map((planet, index) => {
            const angle = planet.adjustedAngle || getAngle(planet.signIndex)
            const radius = planet.adjustedRadius || -120
            return (
              <div
                key={planet.name}
                className="planet-point"
                style={{
                  transform: `rotate(${angle}deg) translateY(${radius}px) rotate(-${angle}deg)`,
                  zIndex: 10 + index
                }}
                title={`${planet.name} in ${planet.sign}`}
              >
                <div className="planet-symbol">{planet.emoji}</div>
                <div className="planet-details">
                  <div className="detail-line detail-degree">{planet.degree}°</div>
                  <div className="detail-line detail-name">{planet.name}</div>
                  <div className="detail-line detail-sign">{planet.sign}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Center - Sun symbol */}
        <div className="mandala-center">
          <div className="center-sun">☀️</div>
          <div className="center-label">Cosmic Center</div>
        </div>

        {/* Decorative circles */}
        <div className="mandala-circle circle-1"></div>
        <div className="mandala-circle circle-2"></div>
        <div className="mandala-circle circle-3"></div>
      </div>
    </div>
  )
}

export default AstrologicalMandala

