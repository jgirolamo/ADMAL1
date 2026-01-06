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
  const knownNewMoon = new Date('2025-12-30') // Recent new moon for accuracy
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

export function getPlanetaryPositions(date = new Date()) {
  // More accurate planetary positions
  const sunSign = getCurrentZodiacSign(date)
  const moonPhase = getMoonPhase(date)

  // Approximate planetary positions (simplified but more realistic)
  // In reality, each planet has different orbital periods
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
  const signs = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
                 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']

  // Mercury orbits faster, stays close to Sun (within 1-2 signs)
  const mercuryOffset = Math.floor(Math.sin(dayOfYear * 0.1) * 1.5)
  const sunIndex = signs.indexOf(sunSign)
  const mercurySign = signs[(sunIndex + mercuryOffset + 12) % 12]

  // Venus also stays close to Sun (within 2 signs)
  const venusOffset = Math.floor(Math.sin(dayOfYear * 0.05) * 2)
  const venusSign = signs[(sunIndex + venusOffset + 12) % 12]

  // Mars moves through zodiac in ~2 years
  const marsSign = signs[Math.floor(dayOfYear / 61) % 12]

  // Jupiter moves through zodiac in ~12 years (1 sign per year)
  const jupiterSign = signs[(date.getFullYear() + 5) % 12]

  // Saturn moves through zodiac in ~29 years
  const saturnSign = signs[Math.floor((date.getFullYear() - 2020) / 2.4) % 12]

  // Moon sign changes every ~2.5 days
  const moonSign = signs[Math.floor(dayOfYear / 2.5) % 12]

  return [
    { name: 'Sun', emoji: '☀️', sign: sunSign },
    { name: 'Moon', emoji: '🌙', sign: moonSign },
    { name: 'Mercury', emoji: '☿️', sign: mercurySign },
    { name: 'Venus', emoji: '♀️', sign: venusSign },
    { name: 'Mars', emoji: '♂️', sign: marsSign },
    { name: 'Jupiter', emoji: '♃', sign: jupiterSign },
    { name: 'Saturn', emoji: '♄', sign: saturnSign }
  ]
}

// Get zodiac element
export function getZodiacElement(sign) {
  const elements = {
    'Aries': 'Fire', 'Leo': 'Fire', 'Sagittarius': 'Fire',
    'Taurus': 'Earth', 'Virgo': 'Earth', 'Capricorn': 'Earth',
    'Gemini': 'Air', 'Libra': 'Air', 'Aquarius': 'Air',
    'Cancer': 'Water', 'Scorpio': 'Water', 'Pisces': 'Water'
  }
  return elements[sign] || 'Unknown'
}

// Get zodiac modality
export function getZodiacModality(sign) {
  const modalities = {
    'Aries': 'Cardinal', 'Cancer': 'Cardinal', 'Libra': 'Cardinal', 'Capricorn': 'Cardinal',
    'Taurus': 'Fixed', 'Leo': 'Fixed', 'Scorpio': 'Fixed', 'Aquarius': 'Fixed',
    'Gemini': 'Mutable', 'Virgo': 'Mutable', 'Sagittarius': 'Mutable', 'Pisces': 'Mutable'
  }
  return modalities[sign] || 'Unknown'
}

// Get lucky numbers for today
export function getLuckyNumbers(sign, date = new Date()) {
  const baseNumbers = {
    'Aries': [1, 9], 'Taurus': [2, 6], 'Gemini': [3, 5],
    'Cancer': [2, 7], 'Leo': [1, 4], 'Virgo': [5, 6],
    'Libra': [6, 9], 'Scorpio': [8, 9], 'Sagittarius': [3, 9],
    'Capricorn': [4, 8], 'Aquarius': [4, 7], 'Pisces': [3, 7]
  }
  const base = baseNumbers[sign] || [1, 7]
  const dayMod = date.getDate()

  return [
    base[0],
    base[1],
    (base[0] + dayMod) % 49 + 1,
    (base[1] * dayMod) % 49 + 1
  ].sort((a, b) => a - b)
}

