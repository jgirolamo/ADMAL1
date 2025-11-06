import React, { useState, useEffect } from 'react'
import './App.css'
import HoroscopeMessage from './components/HoroscopeMessage'
import SkyInformation from './components/SkyInformation'
import ZodiacSigns from './components/ZodiacSigns'
import { getCurrentZodiacSign, getMoonPhase } from './utils/astrology'

function App() {
  const [selectedSign, setSelectedSign] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    // Update date every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const currentSign = getCurrentZodiacSign(currentDate)

  return (
    <div className="app">
      <header className="app-header">
        <h1>✨ Astro Diary ✨</h1>
        <p className="subtitle">Discover the cosmic wisdom of the universe</p>
      </header>

      <main className="app-main">
        <div className="content-grid">
          <div className="main-content">
            <HoroscopeMessage 
              selectedSign={selectedSign || currentSign}
              currentSign={currentSign}
            />
            <SkyInformation currentDate={currentDate} />
          </div>
          
          <aside className="sidebar">
            <ZodiacSigns 
              selectedSign={selectedSign}
              onSignSelect={setSelectedSign}
              currentSign={currentSign}
            />
          </aside>
        </div>
      </main>

      <footer className="app-footer">
        <p>🌙 May the stars guide your path 🌙</p>
      </footer>
    </div>
  )
}

export default App

