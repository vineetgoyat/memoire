import FloatingHearts from "./FloatingHearts"
import { motion } from "framer-motion"

function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 relative overflow-hidden">
    <FloatingHearts />

<div className="absolute top-20 left-20 w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

<div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
      <div className="relative z-10 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
        >
          Welcome To Our Story ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto"
        >
          A private universe filled with memories, emotions, love and beautiful moments 💖
        </motion.p>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
>

  <button className="px-8 py-4 rounded-full bg-white text-pink-600 font-semibold text-lg hover:scale-105 transition duration-300 shadow-2xl hover:shadow-pink-500/40">
    Explore Memories 💖
  </button>

  <button className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold text-lg backdrop-blur-md hover:bg-white/10 transition duration-300">
    Our Timeline ✨
  </button>

</motion.div>
      </div>
    <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
  }}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl"
>
  ↓
</motion.div>
    </section>
  )
}

export default HeroSection