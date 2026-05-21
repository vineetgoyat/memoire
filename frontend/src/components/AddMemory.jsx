import { useState } from "react"
import { motion } from "framer-motion"

function AddMemory({ darkMode }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append("title", title)
      formData.append("description", description)
      formData.append("image", image)
      formData.append("date", date)

      const response = await fetch("https://memoire-3uc3.onrender.com/add-memory", {

        method: "POST",
        body: formData

      })

      const data = await response.json()

      alert(data.message)

    }

    catch (error) {

      alert("Upload Failed 😭")

    }

  }

  return (

    <motion.section

      id="home"

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 1 }}

      viewport={{ once: true }}

      className="min-h-screen bg-transparent flex items-center justify-center px-6 py-20"
    >

      <div
        className={`w-full max-w-2xl rounded-[40px] p-10 border backdrop-blur-xl shadow-2xl transition duration-500 ${
          darkMode
            ? "bg-white/10 border-white/20"
            : "bg-white/70 border-black/10"
        }`}
      >

        <h2
          className={`text-5xl font-bold text-center mb-10 ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >

          Add New Memory ✨

        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Memory Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-black/10 text-black"
            }`}
          />

          <textarea
            placeholder="Memory Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={`w-full p-4 rounded-2xl border outline-none h-40 ${
              darkMode
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-black/10 text-black"
            }`}
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className={`w-full p-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-black/10 text-black"
            }`}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={`w-full p-4 rounded-2xl border outline-none ${
              darkMode
                ? "bg-white/10 border-white/20 text-white"
                : "bg-white border-black/10 text-black"
            }`}
          />

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-pink-500 text-white text-lg font-semibold hover:bg-pink-600 transition"
          >

            Save Memory ✨

          </button>

        </form>

      </div>

    </motion.section>

  )
}

export default AddMemory