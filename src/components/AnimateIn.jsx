import React, { useEffect, useRef, useState } from 'react'

const AnimateIn = ({ children, delay = 0, duration = 600, className = '', threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`animate-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{
        '--delay': `${delay}ms`,
        '--duration': `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default AnimateIn
