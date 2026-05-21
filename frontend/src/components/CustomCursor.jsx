import { useEffect, useState } from "react"

function CustomCursor() {

  const [position, setPosition] = useState({

    x: 0,
    y: 0

  })

  const [ringPosition, setRingPosition] = useState({

    x: 0,
    y: 0

  })

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({

        x: e.clientX,
        y: e.clientY

      })

    }

    window.addEventListener("mousemove", moveCursor)

    return () => {

      window.removeEventListener("mousemove", moveCursor)

    }

  }, [])

  useEffect(() => {

    const animateRing = () => {

      setRingPosition((prev) => ({

        x: prev.x + (position.x - prev.x) * 0.15,

        y: prev.y + (position.y - prev.y) * 0.15

      }))

    }

    const interval = setInterval(animateRing, 16)

    return () => clearInterval(interval)

  }, [position])

  return (

    <>

      {/* Outer Ring */}

      <div

        className="fixed top-0 left-0 w-14 h-14 rounded-full border border-pink-400/40 backdrop-blur-sm pointer-events-none z-[9998] transition-transform duration-75"

        style={{

          transform: `translate(${ringPosition.x - 28}px, ${ringPosition.y - 28}px)`

        }}

      />

      {/* Main Cursor */}

      <div

        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-pink-400 shadow-[0_0_30px_rgba(244,114,182,1)] pointer-events-none z-[9999]"

        style={{

          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`

        }}

      />

    </>

  )
}

export default CustomCursor