import { motion } from "framer-motion"

function Timeline({ darkMode }) {

  const timelineData = [

  {

    year: "The Beginning ✨",

    description: "An idea to preserve memories in a beautiful digital experience.",

  },

  {

    year: "Creative Exploration 🎨",

    description: "Designing cinematic visuals and immersive interactions.",

  },

  {

    year: "Building The Platform 💻",

    description: "Combining frontend creativity with backend functionality.",

  },

  {

    year: "Memoiré 💫 Launch 🚀",

    description: "Transforming memories into timeless digital stories.",

  },

]

  return (

    <motion.section

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ duration: 1 }}

      viewport={{ once: true }}

      id="timeline"
      className={`relative py-32 px-6 overflow-hidden transition duration-500 ${
        darkMode
          ? "bg-[#080811]"
          : "bg-gradient-to-b from-pink-100 via-rose-50 to-white"
      }`}
    >

      {/* Heading */}

      <div className="text-center mb-24">

        <motion.h2

          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className={`text-5xl md:text-6xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          The Journey ✨
        </motion.h2>

        <motion.p

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}

          transition={{ delay: 0.3, duration: 1 }}

          className={`max-w-2xl mx-auto text-lg ${
            darkMode ? "text-white/70" : "text-black/70"
          }`}
        >
          Every chapter of our journey became a memory worth keeping forever 💖
        </motion.p>

      </div>

      {/* Timeline */}

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}

        <div
          className={`absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2 ${
            darkMode
              ? "bg-pink-400/30"
              : "bg-pink-400/50"
          }`}
        ></div>

        {

          timelineData.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}

              className={`relative mb-24 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              {/* Card */}

              <div
                className={`w-full md:w-[45%] rounded-[30px] p-8 border backdrop-blur-xl shadow-2xl hover:scale-105 transition duration-500 ${
                  darkMode
                    ? "bg-white/10 border-white/20"
                    : "bg-white/70 border-black/10"
                }`}
              >

                <h3
                  className={`text-3xl font-bold mb-4 ${
                    darkMode
                      ? "text-pink-300"
                      : "text-pink-600"
                  }`}
                >
                  {item.year}
                </h3>

                <p
                  className={`leading-relaxed ${
                    darkMode
                      ? "text-white/70"
                      : "text-black/70"
                  }`}
                >
                  {item.description}
                </p>

              </div>

              {/* Circle */}

              <div
                className="absolute left-1/2 top-10 transform -translate-x-1/2 w-6 h-6 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.9)] z-20"
              ></div>

            </motion.div>

          ))

        }

      </div>

    </motion.section>

  )
}

export default Timeline