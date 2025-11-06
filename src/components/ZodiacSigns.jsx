import React from 'react'
import './ZodiacSigns.css'

const ZODIAC_SIGNS = [
  { name: 'Aries', emoji: '♈', element: 'Fire', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', emoji: '♉', element: 'Earth', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', emoji: '♊', element: 'Air', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', emoji: '♋', element: 'Water', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', emoji: '♌', element: 'Fire', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', emoji: '♍', element: 'Earth', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', emoji: '♎', element: 'Air', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', emoji: '♏', element: 'Water', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', emoji: '♐', element: 'Fire', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', emoji: '♑', element: 'Earth', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', emoji: '♒', element: 'Air', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', emoji: '♓', element: 'Water', dates: 'Feb 19 - Mar 20' }
]

function ZodiacSigns({ selectedSign, onSignSelect, currentSign }) {
  const getElementColor = (element) => {
    const colors = {
      'Fire': '#ff6b6b',
      'Earth': '#51cf66',
      'Air': '#74c0fc',
      'Water': '#339af0'
    }
    return colors[element] || '#fff'
  }

  return (
    <div className="zodiac-signs-card">
      <h2>🌟 Zodiac Signs</h2>
      <p className="zodiac-subtitle">Select a sign to view its message</p>
      
      <div className="zodiac-grid">
        {ZODIAC_SIGNS.map((sign) => {
          const isSelected = selectedSign === sign.name
          const isCurrent = currentSign === sign.name
          
          return (
            <button
              key={sign.name}
              className={`zodiac-sign-item ${isSelected ? 'selected' : ''} ${isCurrent ? 'current' : ''}`}
              onClick={() => onSignSelect(sign.name)}
              style={{
                borderColor: isSelected ? getElementColor(sign.element) : 'rgba(255, 255, 255, 0.2)',
                background: isSelected 
                  ? `linear-gradient(135deg, ${getElementColor(sign.element)}40, ${getElementColor(sign.element)}20)`
                  : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="sign-emoji">{sign.emoji}</div>
              <div className="sign-info">
                <p className="sign-name">{sign.name}</p>
                <p className="sign-element" style={{ color: getElementColor(sign.element) }}>
                  {sign.element}
                </p>
                <p className="sign-dates">{sign.dates}</p>
              </div>
              {isCurrent && !isSelected && (
                <span className="current-indicator">●</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ZodiacSigns

