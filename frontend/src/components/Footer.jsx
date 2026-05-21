function Footer({ darkMode }) {

  return (

    <footer
      className={`py-10 text-center border-t transition duration-500 ${
        darkMode
          ? "bg-[#070710] border-white/10 text-white/60"
          : "bg-white border-black/10 text-black/60"
      }`}
    >

      <h2 className="text-2xl font-bold mb-4">
        Memoiré 💫
      </h2>

      <p className="text-sm">
       A cinematic memory journal crafted with creativity and modern web technologies 💫
      </p>

      <p className="mt-4 text-xs">
        Built using MERN Stack • Framer Motion • GSAP • Tailwind CSS
      </p>

      <p className="mt-6 text-xs opacity-70">
       © 2026 Memoiré. All rights reserved.
      </p>

    </footer>

  )
}

export default Footer