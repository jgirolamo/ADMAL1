const HOROSCOPE_MESSAGES = {
  'Aries': [
    `The fiery energy of Mars guides you today, Aries. Your natural leadership qualities shine brightly, and opportunities for bold action present themselves. Trust your instincts and don't hesitate to take the lead.`,
    `Your warrior spirit is awakened, Aries. Challenges that once seemed daunting now appear as exciting opportunities. Channel your competitive energy into creative pursuits.`,
    `A surge of motivation propels you forward, Aries. Your courage inspires others to take action. Remember that true strength lies in knowing when to advance and when to pause.`
  ],
  'Taurus': [
    `Venus blesses you with stability and sensuality today, Taurus. Focus on creating beauty in your surroundings and nurturing your relationships. Your patience will be rewarded.`,
    `Ground yourself in nature's abundance, Taurus. Material and emotional security are within reach. Trust the slow and steady path you've chosen.`,
    `Your determination is your greatest asset today, Taurus. Build upon solid foundations and watch your efforts flourish. Comfort and luxury are well-deserved rewards.`
  ],
  'Gemini': [
    `Mercury's influence brings intellectual stimulation and communication opportunities, Gemini. Your curiosity is heightened, making this an excellent time for learning and sharing ideas.`,
    `Your mind dances between possibilities, Gemini. Embrace your dual nature and explore multiple paths. Important connections await in unexpected conversations.`,
    `Words flow like magic from your lips today, Gemini. Use your gift of communication to bridge gaps and forge new alliances. Variety is your spice of life.`
  ],
  'Cancer': [
    `The Moon's nurturing energy surrounds you, Cancer. Your emotional intuition is particularly strong today. Focus on creating a safe, comfortable space for yourself and loved ones.`,
    `Your protective shell opens to reveal deep wisdom, Cancer. Trust your gut feelings about people and situations. Home is where your heart heals.`,
    `Emotional tides run high, Cancer. Honor your feelings without being swept away. Your caring nature is a gift to those fortunate enough to receive it.`
  ],
  'Leo': [
    `The Sun's radiant energy empowers you, Leo. Your natural charisma and creativity are at their peak. This is a time to shine and express yourself authentically.`,
    `The spotlight finds you naturally today, Leo. Your generous heart and creative spirit attract admirers. Lead with love and watch others follow.`,
    `Your inner fire burns bright, Leo. Confidence opens doors that hesitation would keep closed. Share your warmth and watch it multiply.`
  ],
  'Virgo': [
    `Mercury's analytical influence helps you organize and perfect, Virgo. Your attention to detail is heightened, making this ideal for completing tasks and improving systems.`,
    `Your discerning eye spots what others miss, Virgo. Use this gift to refine and improve. Health and service to others bring deep satisfaction.`,
    `Precision and purpose guide your actions today, Virgo. Small improvements lead to significant transformations. Your practical magic works wonders.`
  ],
  'Libra': [
    `Venus brings harmony and balance to your day, Libra. Your diplomatic nature helps resolve conflicts and create peace. Seek balance in all areas of life.`,
    `Beauty and justice dance together in your world, Libra. Partnerships flourish under your fair-minded guidance. Create harmony wherever you go.`,
    `Your scales tip toward meaningful connections today, Libra. Art, love, and collaboration are favored. Find balance between giving and receiving.`
  ],
  'Scorpio': [
    `Pluto's transformative energy runs deep, Scorpio. Your intensity and passion are powerful forces today. Trust your intuition and explore life's mysteries.`,
    `Beneath the surface, powerful changes stir, Scorpio. Your ability to see truth empowers you. Embrace transformation as your constant companion.`,
    `Your magnetic presence draws others into your orbit, Scorpio. Use your power wisely. Secrets revealed today lead to profound healing.`
  ],
  'Sagittarius': [
    `Jupiter expands your horizons, Sagittarius. Adventure and learning call to you. Your optimism guides you toward new experiences and broader perspectives.`,
    `The archer's arrow flies true today, Sagittarius. Aim high and trust your trajectory. Philosophy and travel feed your restless soul.`,
    `Freedom and wisdom walk hand in hand for you, Sagittarius. Share your enthusiasm and watch it spark joy in others. The world is your classroom.`
  ],
  'Capricorn': [
    `Saturn's disciplined energy supports your ambitions, Capricorn. Your determination helps you make steady progress toward long-term goals. Leadership comes naturally today.`,
    `The mountain goat climbs ever higher, Capricorn. Your patience and perseverance are legendary. Solid foundations built today support tomorrow's success.`,
    `Authority and responsibility rest comfortably on your shoulders, Capricorn. Your practical wisdom guides important decisions. Legacy is built one step at a time.`
  ],
  'Aquarius': [
    `Uranus sparks innovation and originality, Aquarius. Your unique perspective and humanitarian spirit shine. Break free from convention and embrace your authentic self.`,
    `The water bearer pours forth revolutionary ideas, Aquarius. Connect with your community and work toward collective goals. The future needs your vision.`,
    `Your genius lies in seeing possibilities others cannot imagine, Aquarius. Embrace your eccentricity. Change begins with those brave enough to be different.`
  ],
  'Pisces': [
    `Neptune's mystical energy flows through you, Pisces. Your intuition and creativity are heightened. Trust your dreams and artistic impulses.`,
    `The cosmic fish swims through infinite waters, Pisces. Compassion and empathy guide your path. Allow yourself to flow with life's currents.`,
    `Your connection to the unseen world strengthens, Pisces. Dreams carry important messages. Art and music heal your soul and touch others deeply.`
  ]
}

export function getHoroscopeMessage(sign, date = new Date()) {
  const messages = HOROSCOPE_MESSAGES[sign] || HOROSCOPE_MESSAGES['Aries']
  // Rotate message based on day of year for daily variation
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
  const messageIndex = dayOfYear % messages.length
  return messages[messageIndex]
}

