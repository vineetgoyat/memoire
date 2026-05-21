import { FaMoon, FaSun } from "react-icons/fa"

function ThemeToggle({ darkMode, setDarkMode }) {

  return (

    <button

      onClick={() => setDarkMode(!darkMode)}

      className={`fixed top-24 right-6 z-50 w-14 h-14 rounded-full backdrop-blur-xl border flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 ${
        
        darkMode

          ? "bg-white/10 border-white/20 text-white"

          : "bg-white/80 border-black/10 text-black"

      }`}
    >

      {

        darkMode

          ? <FaSun />

          : <FaMoon />

      }

    </button>

  )
}

export default ThemeToggle