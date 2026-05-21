import { motion } from "framer-motion"

function FloatingHearts() {

  const hearts = Array.from({ length: 15 }).map(() => ({

  x: Math.random() * window.innerWidth,

  duration: 8 + Math.random() * 5,

  delay: Math.random() * 5

}))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {hearts.map((heart, index) => (

        <motion.div
          key={index}

          initial={{
            y: "100vh",
            x: heart.x,
            opacity: 0,
            scale: 0.5,
          }}

          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
          }}

          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
          }}

          className="absolute text-pink-300 text-2xl"
        >
          💖
        </motion.div>

      ))}

    </div>
  )
}

export default FloatingHearts