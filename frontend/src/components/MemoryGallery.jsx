import { motion } from "framer-motion"

import memory1 from "../assets/images/memory1.png"
import memory2 from "../assets/images/memory2.png"
import memory3 from "../assets/images/memory3.png"
import memory4 from "../assets/images/memory4.png"

function MemoryGallery() {

  const memories = [
    {
      image: memory1,
      title: "Beautiful Moments 💖",
    },
    {
      image: memory2,
      title: "Dreamy Nights 🌙",
    },
    {
      image: memory3,
      title: "Endless Feelings ✨",
    },
    {
      image: memory4,
      title: "Our Little Universe 🌌",
    },
  ]

  return (
    <section className="relative bg-[#070710] py-32 px-6 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-20">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Memory Gallery 📸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          A collection of moments that became unforgettable chapters of our story 💖
        </motion.p>

      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {memories.map((memory, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}

            whileHover={{
              scale: 1.05,
            }}

            className="relative rounded-3xl overflow-hidden group shadow-2xl"
          >

            {/* Image */}
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-[450px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-500"></div>

            {/* Text */}
            <div className="absolute bottom-6 left-6 z-10">

              <h3 className="text-2xl font-bold text-white">
                {memory.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default MemoryGallery