import { useState } from "react"
import { motion } from "framer-motion"

function SecretLogin({ setIsAuthenticated }) {

  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {

  e.preventDefault()

  try {

    const response = await fetch("http://localhost:2000/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        password
      })

    })

    const data = await response.json()

    if (data.success) {

  setIsAuthenticated(true)

} 
    
    else {

      setError(data.message)

    }

  }

  catch (error) {

    setError("Server Error 😭")

  }

}

  return (
    <section className="min-h-screen bg-[#070710] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Login Card */}
      <motion.div

        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 1 }}

        className="relative z-10 w-full max-w-lg bg-white/10 border border-white/20 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl"
      >

        {/* Heading */}
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          Private Access 🔐
        </h2>

        <p className="text-white/70 text-center mb-10">
          Enter the secret password to unlock our universe 💖
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="password"
            placeholder="Enter Secret Password..."
            value={password}

            onChange={(e) => {
              setPassword(e.target.value)
              setError("")
            }}

            className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-pink-400 transition"
          />

          {error && (
            <p className="text-red-400 text-center">
              {error}
            </p>
          )}

          <motion.button

            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}

            type="submit"

            className="w-full py-4 rounded-2xl bg-pink-500 text-white font-semibold text-lg shadow-2xl hover:bg-pink-600 transition"
          >
            Unlock Memories ✨
          </motion.button>

        </form>

      </motion.div>

    </section>
  )
}

export default SecretLogin