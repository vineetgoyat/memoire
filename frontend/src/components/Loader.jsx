import { motion } from "framer-motion"

function Loader() {

  return (

    <motion.div

      initial={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{ duration: 1 }}

      className="fixed inset-0 z-[99999] overflow-hidden bg-gradient-to-b from-[#050510] via-[#0b0618] to-[#12091f] flex items-center justify-center flex-col"
    >

      {/* Glow Orb 1 */}

      <motion.div

        animate={{

          scale: [1, 1.3, 1],

          opacity: [0.4, 0.8, 0.4]

        }}

        transition={{

          repeat: Infinity,

          duration: 4

        }}

        className="absolute w-80 h-80 bg-pink-500/30 blur-[140px] rounded-full"

      />

      {/* Glow Orb 2 */}

      <motion.div

        animate={{

          scale: [1.2, 1, 1.2],

          opacity: [0.3, 0.7, 0.3]

        }}

        transition={{

          repeat: Infinity,

          duration: 5

        }}

        className="absolute w-96 h-96 bg-purple-500/30 blur-[160px] rounded-full"

      />

      {/* Rotating Ring */}

      <motion.div

        animate={{

          rotate: 360

        }}

        transition={{

          repeat: Infinity,

          duration: 10,

          ease: "linear"

        }}

        className="absolute w-[500px] h-[500px] rounded-full border border-pink-400/10"

      />

      {/* Main Content */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}

        <motion.h1

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-6xl md:text-8xl font-black text-white text-center"
        >

          Memoiré
          <span className="text-pink-400"> 💖</span>

        </motion.h1>

        {/* Subtitle */}

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{

            delay: 0.5,

            duration: 1

          }}

          className="mt-8 text-white/60 text-lg md:text-xl tracking-[6px] uppercase text-center"
        >

          Loading Beautiful Memories ✨

        </motion.p>

        {/* Animated Dots */}

        <motion.div

          className="flex gap-3 mt-10"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: 1 }}
        >

          {[0, 1, 2].map((dot) => (

            <motion.div

              key={dot}

              animate={{

                y: [0, -10, 0]

              }}

              transition={{

                repeat: Infinity,

                duration: 1,

                delay: dot * 0.2

              }}

              className="w-4 h-4 rounded-full bg-pink-400"

            />

          ))}

        </motion.div>

      </div>

    </motion.div>

  )
}

export default Loader