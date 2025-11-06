const HOROSCOPE_MESSAGES = {
  'Aries': `The fiery energy of Mars guides you today, Aries. Your natural leadership qualities shine brightly, and opportunities for bold action present themselves. Trust your instincts and don't hesitate to take the lead. Your passion and determination will inspire those around you. Remember to channel your energy constructively and avoid impulsive decisions.`,
  
  'Taurus': `Venus blesses you with stability and sensuality today, Taurus. Focus on creating beauty in your surroundings and nurturing your relationships. Your practical nature helps you make sound decisions. Take time to enjoy life's simple pleasures - good food, nature, and meaningful connections. Your patience will be rewarded.`,
  
  'Gemini': `Mercury's influence brings intellectual stimulation and communication opportunities, Gemini. Your curiosity is heightened, making this an excellent time for learning and sharing ideas. Conversations flow easily, and you may find yourself connecting with interesting people. Stay flexible and open to new perspectives.`,
  
  'Cancer': `The Moon's nurturing energy surrounds you, Cancer. Your emotional intuition is particularly strong today. Focus on creating a safe, comfortable space for yourself and loved ones. Trust your feelings and allow yourself to be vulnerable. Home and family matters take priority, and your caring nature brings comfort to others.`,
  
  'Leo': `The Sun's radiant energy empowers you, Leo. Your natural charisma and creativity are at their peak. This is a time to shine and express yourself authentically. People are drawn to your warmth and enthusiasm. Don't be afraid to take center stage - your talents deserve recognition.`,
  
  'Virgo': `Mercury's analytical influence helps you organize and perfect, Virgo. Your attention to detail is heightened, making this ideal for completing tasks and improving systems. Focus on health and wellness routines. Your practical approach to problem-solving will yield excellent results.`,
  
  'Libra': `Venus brings harmony and balance to your day, Libra. Your diplomatic nature helps resolve conflicts and create peace. Focus on partnerships and relationships - both personal and professional. Your sense of beauty and justice guides you toward fair solutions. Seek balance in all areas of life.`,
  
  'Scorpio': `Pluto's transformative energy runs deep, Scorpio. Your intensity and passion are powerful forces today. This is a time for deep reflection and meaningful transformation. Trust your intuition and don't shy away from exploring life's mysteries. Your ability to see beneath the surface serves you well.`,
  
  'Sagittarius': `Jupiter expands your horizons, Sagittarius. Adventure and learning call to you. Your optimism and philosophical nature guide you toward new experiences and broader perspectives. Travel, whether physical or mental, brings growth. Share your wisdom and enthusiasm with others.`,
  
  'Capricorn': `Saturn's disciplined energy supports your ambitions, Capricorn. Your determination and practical approach help you make steady progress toward long-term goals. Focus on building solid foundations for future success. Your patience and perseverance will be rewarded. Leadership comes naturally today.`,
  
  'Aquarius': `Uranus sparks innovation and originality, Aquarius. Your unique perspective and humanitarian spirit shine. This is a time for breaking free from convention and embracing your authentic self. Connect with like-minded individuals and work toward collective goals. Your forward-thinking ideas inspire change.`,
  
  'Pisces': `Neptune's mystical energy flows through you, Pisces. Your intuition and creativity are heightened, and you may feel more connected to the spiritual realm. Trust your dreams and artistic impulses. Compassion and empathy guide your interactions. Allow yourself to flow with life's currents rather than fighting them.`
}

export function getHoroscopeMessage(sign) {
  return HOROSCOPE_MESSAGES[sign] || HOROSCOPE_MESSAGES['Aries']
}

