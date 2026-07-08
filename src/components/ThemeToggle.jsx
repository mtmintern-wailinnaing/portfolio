import React, { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme, themes } = useTheme()

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.value === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex].value)
  }

  const currentTheme = themes.find(t => t.value === theme)

  return (
    <button
      className="theme-toggle-button"
      onClick={cycleTheme}
      aria-label={`Switch to ${currentTheme?.label} mode`}
      title={`Theme: ${currentTheme?.label}`}
    >
      {currentTheme?.icon}
    </button>
  )
}

export default ThemeToggle
