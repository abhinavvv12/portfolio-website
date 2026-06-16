import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        <h1 className="text-xl md:text-2xl font-bold">
          Abhinav Raparthi
        </h1>

        <ul className="hidden md:flex gap-8 text-zinc-400">
          <li>
            <a href="#" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800">

          <ul className="flex flex-col items-center gap-6 py-6">

            <li>
              <a href="#" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;