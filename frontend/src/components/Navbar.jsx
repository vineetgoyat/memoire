import { useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"

function Navbar({ darkMode }) {

  const [isOpen, setIsOpen] = useState(false)

  return (

    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b transition duration-500 ${
        darkMode
          ? "bg-white/10 border-white/20"
          : "bg-white/70 border-black/10 shadow-lg"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h1
          className={`text-2xl font-bold ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >
          Memoiré 💫
        </h1>

        {/* Desktop Menu */}

        <ul
          className={`hidden md:flex gap-8 font-medium ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >

          <li>

            <a
              href="#home"
              className="cursor-pointer hover:text-pink-400 transition duration-300"
            >
              Home
            </a>

          </li>

          <li>

            <a
              href="#memories"
              className="cursor-pointer hover:text-pink-400 transition duration-300"
            >
              Memories
            </a>

          </li>

          <li>

            <a
              href="#timeline"
              className="cursor-pointer hover:text-pink-400 transition duration-300"
            >
              Timeline
            </a>

          </li>

        </ul>

        {/* Mobile Menu Button */}

        <button

          onClick={() => setIsOpen(!isOpen)}

          className={`md:hidden text-2xl ${
            darkMode
              ? "text-white"
              : "text-black"
          }`}
        >

          {

            isOpen

              ? <FaTimes />

              : <FaBars />

          }

        </button>

      </div>

      {/* Mobile Menu */}

      {

        isOpen && (

          <div
            className={`md:hidden backdrop-blur-xl transition duration-500 ${
              darkMode
                ? "bg-black/30"
                : "bg-white/80"
            }`}
          >

            <ul
              className={`flex flex-col items-center gap-6 py-6 font-medium ${
                darkMode
                  ? "text-white"
                  : "text-black"
              }`}
            >

              <li>

                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition duration-300"
                >
                  Home
                </a>

              </li>

              <li>

                <a
                  href="#memories"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition duration-300"
                >
                  Memories
                </a>

              </li>

              <li>

                <a
                  href="#timeline"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-400 transition duration-300"
                >
                  Timeline
                </a>

              </li>

            </ul>

          </div>

        )

      }

    </nav>

  )
}

export default Navbar