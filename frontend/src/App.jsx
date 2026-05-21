import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MusicPlayer from "./components/MusicPlayer"
import AddMemory from "./components/AddMemory"
import DynamicMemories from "./components/DynamicMemories"
import Timeline from "./components/Timeline"
import CustomCursor from "./components/CustomCursor"
import FloatingHearts from "./components/FloatingHearts"
import Loader from "./components/Loader"
import ThemeToggle from "./components/ThemeToggle"
import LoveLetter from "./components/LoveLetter"
import ScrollProgress from "./components/ScrollProgress"
import Footer from "./components/Footer"

function App() {

  const [loading, setLoading] = useState(true)

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false)

    }, 3000)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {

    return <Loader />

  }

  return (

    <div

      className={`relative overflow-hidden transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-b from-[#050510] via-[#0b0618] to-[#12091f]"
          : "bg-gradient-to-b from-pink-100 via-rose-50 to-white"
      }`}

    >

      {/* Background Glow */}

      {/* Glow 1 */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/30 blur-[140px] rounded-full animate-pulse"></div>

      {/* Glow 2 */}

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 blur-[140px] rounded-full animate-pulse"></div>

      {/* Glow 3 */}

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-fuchsia-500/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* Main Content */}

      <div className="relative z-10">

        <Navbar darkMode={darkMode}/>

        <ScrollProgress />

        <CustomCursor />

        <FloatingHearts />

        <MusicPlayer />

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Hero darkMode={darkMode}/>

        <AddMemory darkMode={darkMode} />

        <DynamicMemories darkMode={darkMode} />

        <Timeline darkMode={darkMode} />

        <LoveLetter darkMode={darkMode} />

        <Footer darkMode={darkMode} />

      </div>

    </div>

  )
}

export default App