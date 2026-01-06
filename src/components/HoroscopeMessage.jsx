import React from 'react'
import './HoroscopeMessage.css'
import { getHoroscopeMessage } from '../utils/messages'
import { getZodiacElement, getZodiacModality, getLuckyNumbers } from '../utils/astrology'

function HoroscopeMessage({ selectedSign, currentSign }) {
  const message = getHoroscopeMessage(selectedSign)
  const isCurrentSign = selectedSign === currentSign
  const element = getZodiacElement(selectedSign)
  const modality = getZodiacModality(selectedSign)
  const luckyNumbers = getLuckyNumbers(selectedSign)

  const elementEmojis = {
    'Fire': '🔥', 'Earth': '🌍', 'Air': '💨', 'Water': '💧'
  }

  return (
    <div className="horoscope-card">
      <div className="card-header">
        <h2>{selectedSign} Daily Message</h2>
        {isCurrentSign && <span className="current-badge">Current Sign</span>}
      </div>
      <div className="card-content">
        <div className="sign-traits">
          <span className="trait element">{elementEmojis[element]} {element}</span>
          <span className="trait modality">{modality}</span>
        </div>
        <div className="message-text">
          {message}
        </div>
        <div className="message-footer">
          <p className="zodiac-dates">{getZodiacDates(selectedSign)}</p>
          <p className="lucky-numbers">Lucky Numbers: {luckyNumbers.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}

function getZodiacDates(sign) {
  const dates = {
    'Aries': 'March 21 - April 19',
    'Taurus': 'April 20 - May 20',
    'Gemini': 'May 21 - June 20',
    'Cancer': 'June 21 - July 22',
    'Leo': 'July 23 - August 22',
    'Virgo': 'August 23 - September 22',
    'Libra': 'September 23 - October 22',
    'Scorpio': 'October 23 - November 21',
    'Sagittarius': 'November 22 - December 21',
    'Capricorn': 'December 22 - January 19',
    'Aquarius': 'January 20 - February 18',
    'Pisces': 'February 19 - March 20'
  }
  return dates[sign] || ''
}

export default HoroscopeMessage

