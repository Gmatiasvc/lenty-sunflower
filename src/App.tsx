import { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[var(--color-bg-1)]/80 border-b border-[var(--color-text-6)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tighter theme-text-1 hover:opacity-80 transition-opacity"
            >
              GV<span className="theme-text-2">.</span>
            </a>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#hero"
                className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors"
                data-i18n="nav_home"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors"
                data-i18n="nav_about"
              >
                Acerca de
              </a>
              <a
                href="#skills"
                className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors"
                data-i18n="nav_skills"
              >
                Habilidades
              </a>
              <a
                href="#career"
                className="text-sm font-medium theme-text-main hover:theme-text-1 transition-colors"
                data-i18n="nav_career"
              >
                Carrera
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-full border border-[var(--color-text-1)] theme-text-1 font-semibold hover:bg-[var(--color-text-1)] hover:text-[var(--color-bg-1)] transition-all"
                data-i18n="nav_contact"
              >
                Contáctame
              </a>
            </div>
          </div>

          {/* <!-- Mobile Menu Button --> */}
          <div className="md:hidden">
            <button
              id="menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md theme-text-main hover:text-white focus:outline-none"
            >
              <i data-lucide="menu" className="w-8 h-8"></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Menu Panel --> */}
      <div
        id="menu-panel"
        className="hidden md:hidden absolute w-full theme-bg-2 border-b border-[var(--color-text-6)] shadow-xl"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#hero"
            className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-[var(--color-bg-1)]"
            data-i18n="nav_home"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-[var(--color-bg-1)]"
            data-i18n="nav_about"
          >
            Acerca de
          </a>
          <a
            href="#skills"
            className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-[var(--color-bg-1)]"
            data-i18n="nav_skills"
          >
            Habilidades
          </a>
          <a
            href="#career"
            className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-[var(--color-bg-1)]"
            data-i18n="nav_career"
          >
            Carrera
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium theme-text-main hover:bg-[var(--color-bg-1)]"
            data-i18n="nav_contact"
          >
            Contáctame
          </a>
        </div>
      </div>
    </nav>
  );
};



function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div>
      <Navbar/>
      <main>

      </main>
    </div>
  )
}

export default App;
