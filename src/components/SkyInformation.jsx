import React from 'react'
import './SkyInformation.css'
import { getMoonPhase, getPlanetaryPositions } from '../utils/astrology'
import AstrologicalMandala from './AstrologicalMandala'

function SkyInformation({ currentDate }) {
  const moonPhase = getMoonPhase(currentDate)
  const planetaryPositions = getPlanetaryPositions()

  return (
    <div className="sky-info-card">
      <h2>🌌 Sky Information</h2>
      
      <div className="info-section">
        <div className="mandala-section">
          <h3>🌀 Cosmic Mandala</h3>
          <AstrologicalMandala currentDate={currentDate} />
        </div>

        <div className="moon-phase">
          <h3>🌙 Moon Phase</h3>
          <div className="moon-display">
            <div className={`moon-icon ${moonPhase.phase.toLowerCase().replace(' ', '-')}`}>
              {moonPhase.emoji}
            </div>
            <div className="moon-details">
              <p className="phase-name">{moonPhase.phase}</p>
              <p className="phase-description">{moonPhase.description}</p>
            </div>
          </div>
        </div>

        <div className="planetary-positions">
          <h3>🪐 Planetary Positions</h3>
          <div className="planets-grid">
            {planetaryPositions.map((planet, index) => (
              <div key={index} className="planet-item">
                <span className="planet-emoji">{planet.emoji}</span>
                <div className="planet-info">
                  <p className="planet-name">{planet.name}</p>
                  <p className="planet-sign">{planet.sign}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sky-conditions">
          <h3>⭐ Current Sky Conditions</h3>
          <div className="conditions-list">
            <div className="condition-item">
              <span className="condition-label">Visibility:</span>
              <span className="condition-value">Excellent</span>
            </div>
            <div className="condition-item">
              <span className="condition-label">Stellar Activity:</span>
              <span className="condition-value">Moderate</span>
            </div>
            <div className="condition-item">
              <span className="condition-label">Cosmic Energy:</span>
              <span className="condition-value">Harmonious</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkyInformation

