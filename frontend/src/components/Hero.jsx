import { motion } from "framer-motion"

import { Typewriter } from "react-simple-typewriter"

function Hero({ darkMode }) {

  return (

    <motion.section

      initial={{ opacity: 0, scale: 0.95 }}

      animate={{ opacity: 1, scale: 1 }}

      transition={{ duration: 1.2 }}

      
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 transition duration-500 ${
        darkMode
          ? "text-white"
          : "text-black"
      }`}
    >

      {/* Main Heading */}

      <motion.h1

        initial={{ opacity: 0, y: 50 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="text-6xl md:text-8xl font-black leading-tight mb-8"
      >

        Memoiré 
        <span className="text-pink-400"> ✨</span>

      </motion.h1>

      {/* Typewriter */}

      <motion.p

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        transition={{ delay: 0.5, duration: 1 }}

        className={`max-w-2xl text-xl md:text-2xl leading-relaxed ${
          darkMode
            ? "text-white/70"
            : "text-black/70"
        }`}
      >

        <Typewriter

          words={[

            "Preserving moments beautifully 💫",

            "A cinematic digital journal 💫",

            "Where memories become timeless 🌌"

          ]}

          loop={true}

          cursor

          cursorStyle="|"

          typeSpeed={70}

          deleteSpeed={40}

          delaySpeed={2000}

        />

      </motion.p>

    </motion.section>

  )
}

export default Hero