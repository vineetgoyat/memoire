import { useEffect, useState, useRef } from "react"

import { motion } from "framer-motion"

import gsap from "gsap"

function DynamicMemories({ darkMode }) {

  const [memories, setMemories] = useState([])

  const [selectedMemory, setSelectedMemory] = useState(null)

  const cardsRef = useRef([])

  useEffect(() => {

    fetchMemories()

    gsap.fromTo(

      cardsRef.current,

      {
        opacity: 0,
        y: 100
      },

      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2
      }

    )

  }, [])

  const fetchMemories = async () => {

    try {

      const response = await fetch("http://localhost:2000/memories")

      const data = await response.json()

      setMemories(data.memories.reverse())

    }

    catch (error) {

      console.log("Failed To Fetch Memories 😭")

    }

  }

  return (

    <motion.section

      initial={{ opacity: 0, y: 100 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}
      
      viewport={{ once: true }}

      id="memories"
      className={`min-h-screen px-6 py-20 transition duration-500 ${
        darkMode
          ? "bg-[#070710]"
          : "bg-gradient-to-b from-pink-100 via-rose-50 to-white"
      }`}
    >

      {/* Heading */}

      <h2
        className={`text-5xl md:text-6xl font-bold text-center mb-16 ${
          darkMode
            ? "text-white"
            : "text-black"
        }`}
      >
        Beautiful Memories 💖
      </h2>

      {

        memories.length === 0 ? (

          <p
            className={`text-center text-xl ${
              darkMode
                ? "text-white/60"
                : "text-black/60"
            }`}
          >
            No Memories Yet 😭
          </p>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {

              memories.map((memory, index) => (

                <div

                  key={memory._id}

                  ref={(el) => (cardsRef.current[index] = el)}

                  onClick={() => setSelectedMemory(memory)}

                  className={`rounded-[30px] overflow-hidden backdrop-blur-xl border hover:scale-105 transition duration-500 shadow-2xl cursor-pointer ${
                    darkMode
                      ? "bg-white/10 border-white/20"
                      : "bg-white/70 border-black/10"
                  }`}
                >

                  {/* Image */}

                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-72 object-cover"
                  />

                  {/* Content */}

                  <div className="p-6">

                    <h3
                      className={`text-3xl font-bold mb-4 ${
                        darkMode
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {memory.title}
                    </h3>

                    <p
                      className={`leading-relaxed mb-6 ${
                        darkMode
                          ? "text-white/70"
                          : "text-black/70"
                      }`}
                    >
                      {memory.description}
                    </p>

                    <p
                      className={`font-semibold ${
                        darkMode
                          ? "text-pink-400"
                          : "text-pink-600"
                      }`}
                    >
                      {memory.date}
                    </p>

                  </div>

                </div>

              ))

            }

          </div>

        )

      }

      {/* Modal Popup */}

      {

        selectedMemory && (

          <div

            onClick={() => setSelectedMemory(null)}

            className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-[100] p-6"
          >

            <div

              onClick={(e) => e.stopPropagation()}

              className={`max-w-4xl w-full rounded-[40px] overflow-hidden shadow-2xl border ${
                darkMode
                  ? "bg-[#0f0f1a] border-white/20"
                  : "bg-white border-black/10"
              }`}
            >

              {/* Image */}

              <img
                src={selectedMemory.image}
                alt={selectedMemory.title}
                className="w-full h-[500px] object-cover"
              />

              {/* Content */}

              <div className="p-8">

                <h2
                  className={`text-4xl font-bold mb-4 ${
                    darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {selectedMemory.title}
                </h2>

                <p
                  className={`text-lg leading-relaxed mb-6 ${
                    darkMode
                      ? "text-white/70"
                      : "text-black/70"
                  }`}
                >
                  {selectedMemory.description}
                </p>

                <p
                  className={`font-semibold ${
                    darkMode
                      ? "text-pink-400"
                      : "text-pink-600"
                  }`}
                >
                  {selectedMemory.date}
                </p>

              </div>

            </div>

          </div>

        )

      }

    </motion.section>

  )
}

export default DynamicMemories