import { motion } from "framer-motion"

function LoveLetter({ darkMode }) {

  return (

    <motion.section

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      className={`relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden transition duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#080811] to-[#120b1f]"
          : "bg-gradient-to-b from-pink-100 via-rose-50 to-white"
      }`}
    >

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Letter Card */}

      <motion.div

        initial={{ opacity: 0, scale: 0.8 }}

        whileInView={{ opacity: 1, scale: 1 }}

        transition={{
          duration: 1,
        }}

        className={`relative z-10 max-w-4xl backdrop-blur-xl rounded-[40px] p-10 md:p-16 shadow-2xl border transition duration-500 ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-white/70 border-black/10"
        }`}
      >

        {/* Heading */}

        <motion.h2

          initial={{ opacity: 0, y: -30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            delay: 0.3,
            duration: 1,
          }}

          className={`text-5xl md:text-6xl font-bold text-center mb-10 ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          A Letter From My Heart 💌
        </motion.h2>

        {/* Letter Content */}

        <motion.p

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{
            delay: 0.8,
            duration: 1.5,
          }}

          className={`text-lg md:text-2xl leading-loose text-center ${
            darkMode
              ? "text-white/80"
              : "text-black/70"
          }`}
        >

          Every memory carries emotion, meaning and a story worth preserving 💫

          Memoiré was designed to transform moments into a cinematic digital experience —
          blending aesthetics, storytelling and technology into one immersive platform ✨

          From peaceful sunsets to unforgettable journeys,
          every memory deserves to live forever 🌌

        </motion.p>

      </motion.div>

    </motion.section>

  )
}

export default LoveLetter