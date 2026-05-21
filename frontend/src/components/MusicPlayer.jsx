import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaPause, FaPlay } from "react-icons/fa"

import romanticMusic from "../assets/music/romantic.mp3"

function MusicPlayer() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {

    if (isPlaying) {
      audioRef.current.pause()
    } 
    
    else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <>
    
      {/* Audio */}
      <audio ref={audioRef} loop>
        <source src={romanticMusic} type="audio/mp3" />
      </audio>

      {/* Floating Button */}
      <motion.button

        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

        onClick={toggleMusic}

        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white flex items-center justify-center shadow-2xl"
      >

        {isPlaying ? <FaPause /> : <FaPlay />}

      </motion.button>

    </>
  )
}

export default MusicPlayer