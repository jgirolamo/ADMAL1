export function getCurrentZodiacSign(date = new Date()) {
  const month = date.getMonth() + 1 // 1-12
  const day = date.getDate() // 1-31

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius'
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces'
  
  return 'Aries' // fallback
}

export function getMoonPhase(date = new Date()) {
  // Simplified moon phase calculation based on days since known new moon
  // This is a simplified version - for accuracy, you'd use a proper astronomical library
  const knownNewMoon = new Date('2024-01-11')
  const daysSinceNewMoon = Math.floor((date - knownNewMoon) / (1000 * 60 * 60 * 24))
  const lunarCycle = 29.53 // days in a lunar cycle
  const phase = (daysSinceNewMoon % lunarCycle) / lunarCycle

  if (phase < 0.03 || phase > 0.97) {
    return {
      phase: 'New Moon',
      emoji: '🌑',
      description: 'A time for new beginnings and setting intentions. The darkness holds infinite potential.'
    }
  } else if (phase < 0.22) {
    return {
      phase: 'Waxing Crescent',
      emoji: '🌒',
      description: 'The moon grows, bringing energy for growth and expansion. Plant seeds of intention.'
    }
  } else if (phase < 0.28) {
    return {
      phase: 'First Quarter',
      emoji: '🌓',
      description: 'Half illuminated, this is a time for decision-making and taking action.'
    }
  } else if (phase < 0.47) {
    return {
      phase: 'Waxing Gibbous',
      emoji: '🌔',
      description: 'Nearly full, the energy builds. Refine your goals and prepare for manifestation.'
    }
  } else if (phase < 0.53) {
    return {
      phase: 'Full Moon',
      emoji: '🌕',
      description: 'Peak illumination. Release what no longer serves you and celebrate achievements.'
    }
  } else if (phase < 0.72) {
    return {
      phase: 'Waning Gibbous',
      emoji: '🌖',
      description: 'The light begins to fade. Reflect on lessons learned and express gratitude.'
    }
  } else if (phase < 0.78) {
    return {
      phase: 'Last Quarter',
      emoji: '🌗',
      description: 'Half waning, focus on forgiveness and letting go of what holds you back.'
    }
  } else {
    return {
      phase: 'Waning Crescent',
      emoji: '🌘',
      description: 'The final phase before renewal. Rest, reflect, and prepare for the next cycle.'
    }
  }
}

export function getPlanetaryPositions() {
  // Simplified planetary positions - in a real app, you'd use an astronomical API
  // This provides a general representation
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
                 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
  
  // Generate positions based on current date (simplified)
  const date = new Date()
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
  
  return [
    { name: 'Sun', emoji: '☀️', sign: signs[dayOfYear % 12] },
    { name: 'Moon', emoji: '🌙', sign: signs[(dayOfYear + 2) % 12] },
    { name: 'Mercury', emoji: '☿️', sign: signs[(dayOfYear + 1) % 12] },
    { name: 'Venus', emoji: '♀️', sign: signs[(dayOfYear + 3) % 12] },
    { name: 'Mars', emoji: '♂️', sign: signs[(dayOfYear + 4) % 12] },
    { name: 'Jupiter', emoji: '♃', sign: signs[(dayOfYear + 5) % 12] },
    { name: 'Saturn', emoji: '♄', sign: signs[(dayOfYear + 6) % 12] }
  ]
}

