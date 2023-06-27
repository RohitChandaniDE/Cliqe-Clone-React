import { Link } from 'react-router-dom'
import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='container mx-auto pb-4 sticky top-0 z-50 bg-white'>
 <section>
  <nav className="flex justify-center sm:gap-[25px] gap-[150px] pt-2 cursor-pointer">
    <a href="/">
    <div className="logo flex mr-[200px]">
      <img className="xl:w-40 xl:h-10 w-28 mt-3.5 sm:pt-0" src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png" alt="logo" />
    </div>
    </a>
    
    <div className="hidden sm:flex font-sans text-xl font-medium gap-10 2xl:mr-[100px] xl:mr-[250px] lg:mr-[100px] mr-[70px]">
      <a href="/features"><li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Features</li></a>
      {/* <Link to="/features"><li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Features</li></Link> */}
      <a href="/pricing"><li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Pricing</li></a>
      <a href="/brands"><li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Für Brands</li></a>
      <li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Über uns</li>
      <a href="/blog-de"><li className="hover:text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Blog</li></a>
    </div>
    {/* <Link className="hidden sm:flex font-sans text-xl font-medium" to="/login">
      <li className="text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Login</li>
    </Link> */}
    <a className="hidden sm:flex font-sans text-xl font-medium" href="/login">
      <li className="text-[#0508A6] list-none xl:text-l lg:text-base text-xs pt-5">Login</li>
    </a>

    <div className="hamburger inline-block cursor-pointer p-1 pt-7 sm:hidden">
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
        <div className="line h-0.5 w-6 my-1 bg-black"></div>
      </div>
    <div>
    <a href="/signup">
      <button className="text-white font-bold mt-[10px] 2xl:px-7 lg:px-5 px-3 2xl:py-3 lg:py-2 bg-[#1919BC] 2xl:text-base lg:text-base text-sm rounded-[12px] text-center sm:ml-2
          hover:opacity-80 shadow-lg duration-150" type="button">Registrieren</button>
    </a>
    </div>
    
      
  </nav>
</section>
    </div>
  )
}

export default Navbar