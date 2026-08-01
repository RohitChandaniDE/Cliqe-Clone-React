import React, { useState } from 'react'
import "./Navbar.css"

const links = [
  { label: 'Features',   href: '/features' },
  { label: 'Pricing',    href: '/pricing'  },
  { label: 'Für Brands', href: '/brands'   },
  { label: 'Über uns',   href: '#'         },
  { label: 'Blog',       href: '/blog-de'  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='w-full sticky top-0 z-50 bg-white'>

      <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12'>
        <nav className='flex items-center justify-between h-16 lg:h-20'>

          <a href="/" className='flex-shrink-0'>
            <img
              className='w-28 lg:w-36 h-auto'
              src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png"
              alt="cliqe"
            />
          </a>

          {/* desktop links — lg: not sm:, they need ~1024px to fit */}
          <ul className='hidden lg:flex items-center gap-7 xl:gap-10 font-sans font-medium'>
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} className='text-base hover:text-[#0508A6] duration-150'>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className='hidden lg:flex items-center gap-5 xl:gap-7'>
            <a href="/login" className='text-[#0508A6] font-medium text-base hover:opacity-70 duration-150'>
              Login
            </a>
            <a href="/signup">
              <button
                className="text-white font-bold px-5 xl:px-7 py-2.5 bg-[#1919BC] text-base
                           rounded-xl shadow-lg hover:opacity-80 duration-150
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1919BC]"
                type="button">
                Registrieren
              </button>
            </a>
          </div>

          {/* hamburger — now actually wired up, and animates to an X */}
          <button
            onClick={() => setOpen(!open)}
            aria-label='Menü öffnen'
            aria-expanded={open}
            className='lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#1919BC] rounded'
            type='button'>
            <span className={`block h-0.5 w-6 bg-[#1919BC] duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[#1919BC] my-1.5 duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-[#1919BC] duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>

        </nav>
      </div>

      {/* mobile drawer — max-height so it slides instead of popping */}
      <div className={`lg:hidden overflow-hidden bg-white border-t border-gray-100
                       transition-[max-height] duration-300 ease-in-out
                       ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className='px-4 sm:px-6 py-5 flex flex-col gap-4'>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}
                 onClick={() => setOpen(false)}
                 className='block text-base font-medium hover:text-[#0508A6]'>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/login" onClick={() => setOpen(false)}
               className='block text-base font-medium text-[#0508A6]'>
              Login
            </a>
          </li>
          <li>
            <a href="/signup" onClick={() => setOpen(false)}>
              <button className="w-full text-white font-bold px-5 py-3 bg-[#1919BC]
                                 text-base rounded-xl shadow-lg hover:opacity-80 duration-150"
                      type="button">
                Registrieren
              </button>
            </a>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Navbar