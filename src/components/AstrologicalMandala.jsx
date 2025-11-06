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

function AstrologicalMandala({ currentDate }) {
  const planetaryPositions = getPlanetaryPositions()
  
  // Calculate angle for each zodiac sign (30 degrees apart)
  const getAngle = (index) => (index * 30) - 90 // Start from top
  
  // Find which sign each planet is in
  const planetsInSigns = planetaryPositions.map(planet => ({
    ...planet,
    signIndex: ZODIAC_SIGNS.indexOf(planet.sign)
  }))

  return (
    <div className="mandala-container">
      <div className="mandala-wrapper">
        {/* Outer ring - Zodiac signs */}
        <div className="mandala-ring zodiac-ring">
          {ZODIAC_SIGNS.map((sign, index) => {
            const angle = getAngle(index)
            const isActive = planetsInSigns.some(p => p.signIndex === index)
            return (
              <div
                key={sign}
                className={`zodiac-point ${isActive ? 'active' : ''}`}
                style={{
                  transform: `rotate(${angle}deg) translateY(-180px) rotate(-${angle}deg)`
                }}
              >
                <div className="zodiac-symbol">{ZODIAC_EMOJIS[sign]}</div>
                <div className="zodiac-label">{sign}</div>
              </div>
            )
          })}
        </div>

        {/* Middle ring - Planets */}
        <div className="mandala-ring planet-ring">
          {planetsInSigns.map((planet, index) => {
            const angle = getAngle(planet.signIndex)
            return (
              <div
                key={planet.name}
                className="planet-point"
                style={{
                  transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`
                }}
                title={`${planet.name} in ${planet.sign}`}
              >
                <div className="planet-symbol">{planet.emoji}</div>
                <div className="planet-label">{planet.name}</div>
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

