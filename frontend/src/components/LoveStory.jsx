import { motion } from "framer-motion"

function LoveStory() {

  const memories = [
    {
      title: "First Conversation 💌",
      description: "The moment everything started with a simple hello.",
    },
    {
      title: "Late Night Talks 🌙",
      description: "Hours felt like minutes whenever we talked.",
    },
    {
      title: "Beautiful Memories 📸",
      description: "Moments that became part of our universe.",
    },
  ]

  return (
    <section className="min-h-screen bg-[#0f0f1a] px-6 py-24 relative overflow-hidden">

      {/* Section Heading */}
      <div className="text-center mb-20">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Our Beautiful Journey ✨
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/70 max-w-2xl mx-auto text-lg"
        >
          Every memory holds a special place in our hearts and tells a story worth remembering forever 💖
        </motion.p>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {memories.map((memory, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: index * 0.3,
            }}

            whileHover={{
              scale: 1.05,
            }}

            className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
          >

            <h3 className="text-3xl font-bold text-white mb-4">
              {memory.title}
            </h3>

            <p className="text-white/70 leading-relaxed">
              {memory.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}

export default LoveStory