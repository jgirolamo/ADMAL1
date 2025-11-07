import React from 'react'
import './AstrologicalFrame.css'

const FRAME_SYMBOLS = [
  '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
  '☀️', '🌙', '☿️', '♀️', '♂️', '♃', '♄', '⭐', '✨', '🌟'
]

function AstrologicalFrame() {
  return (
    <div className="astrological-frame">
      {/* Top frame */}
      <div className="frame-top">
        <div className="frame-corner top-left">
          <div className="corner-ornament">✦</div>
        </div>
        <div className="frame-top-content">
          {FRAME_SYMBOLS.slice(0, 8).map((symbol, index) => (
            <span key={`top-${index}`} className="frame-symbol" style={{ '--delay': `${index * 0.2}s` }}>
              {symbol}
            </span>
          ))}
        </div>
        <div className="frame-corner top-right">
          <div className="corner-ornament">✦</div>
        </div>
      </div>

      {/* Left frame */}
      <div className="frame-left">
        {FRAME_SYMBOLS.slice(8, 14).map((symbol, index) => (
          <span key={`left-${index}`} className="frame-symbol vertical" style={{ '--delay': `${index * 0.2}s` }}>
            {symbol}
          </span>
        ))}
      </div>

      {/* Right frame */}
      <div className="frame-right">
        {FRAME_SYMBOLS.slice(14, 20).map((symbol, index) => (
          <span key={`right-${index}`} className="frame-symbol vertical" style={{ '--delay': `${index * 0.2}s` }}>
            {symbol}
          </span>
        ))}
      </div>

      {/* Bottom frame */}
      <div className="frame-bottom">
        <div className="frame-corner bottom-left">
          <div className="corner-ornament">✦</div>
        </div>
        <div className="frame-bottom-content">
          {FRAME_SYMBOLS.slice(0, 8).map((symbol, index) => (
            <span key={`bottom-${index}`} className="frame-symbol" style={{ '--delay': `${index * 0.2}s` }}>
              {symbol}
            </span>
          ))}
        </div>
        <div className="frame-corner bottom-right">
          <div className="corner-ornament">✦</div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="frame-line frame-line-top"></div>
      <div className="frame-line frame-line-bottom"></div>
      <div className="frame-line frame-line-left"></div>
      <div className="frame-line frame-line-right"></div>
    </div>
  )
}

export default AstrologicalFrame

