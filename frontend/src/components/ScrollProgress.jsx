import { useEffect, useState } from "react"

function ScrollProgress() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =

        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const progress = (scrollPosition / totalHeight) * 100

      setScroll(progress)

    }

    window.addEventListener("scroll", handleScroll)

    return () => {

      window.removeEventListener("scroll", handleScroll)

    }

  }, [])

  return (

    <div className="fixed top-0 left-0 w-full h-[5px] z-[99999] bg-transparent">

      <div

        className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 shadow-[0_0_20px_rgba(244,114,182,1)] transition-all duration-150"

        style={{

          width: `${scroll}%`

        }}

      />

    </div>

  )
}

export default ScrollProgress