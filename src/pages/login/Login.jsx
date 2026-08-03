import React from 'react'
import "./Login.css"

const countryCodes = ['DE +49','AT +43','CH +41','BD +880','BE +32','CA +1','DK +45','FR +33','GR +30','IS +354','NL +31','NO +47','PT +351','ZA +27','ES +34','SE +46','GB +44','US +1'];

const Login = () => {
  return (
    <div className='w-full min-h-screen multicolorbackground
                    flex items-center justify-center px-4 py-12'>

      <main className='bg-white w-full max-w-[520px] rounded-lg shadow-2xl p-8 sm:p-12'>

        <div className='flex items-center gap-3 mb-6'>
          <a href="/">
            <img className="w-28 xl:w-40 h-auto"
                 src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png"
                 alt="logo" />
          </a>
          <div className='bg-[#E9D4FF] rounded-[100px] px-2.5 py-0.5'>
            <h6 className="text-[#6B23AA] text-[12px]">BETA</h6>
          </div>
        </div>

        <h1 className='text-black font-bold text-[28px] sm:text-[35px] font-sans mb-1'>
          Log in to cliqe
        </h1>
        <a href="/signup">
          <p className='text-[#6163B1] font-bold cursor-pointer text-sm pb-6'>or go to signup</p>
        </a>

       
        <label className='block text-[13px] font-bold text-black pb-1'>Phone number</label>
        <div className='flex mb-6'>
          <select className="rounded-l-md h-[38px] border border-gray-400 px-1 bg-white flex-shrink-0">
            {countryCodes.map((c, i) => <option key={i}>{c}</option>)}
          </select>
          <input className='flex-1 min-w-0 h-[38px] hover:bg-[#EFF6FF] border-y border-gray-400
                            hover:border-blue-900 pl-2' type="number" />
          <label htmlFor="my_modal_6"
                 className="btnn flex items-center px-3 rounded-r-md text-white text-[12px]
                            bg-gray-400 cursor-pointer whitespace-nowrap flex-shrink-0">
            GET CODE
          </label>
        </div>

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hey, thank you for your interest in cliqe!</h3>
            <p className="py-1">Go to the sign up first and you can login next time.</p>
            <div className="modal-action">
              <a href="/signup"
                 className="btnn bg-white font-bold text-[#6163B1] border border-gray-300 px-3 py-2 rounded-md">
                Go to Sign Up
              </a>
            </div>
          </div>
        </div>

        <label className='block text-[14px] font-bold text-black pb-1'>Confirmation code</label>
        <input className='w-full h-[38px] rounded-md hover:bg-[#EFF6FF] border border-gray-400
                          hover:border-blue-900 pl-2 mb-6' type="number" />

        <p className='cursor-pointer text-gray-500 text-[11.5px] mb-6'>
          You signed up with email and password before?
        </p>

        <button className="btnn w-full py-2.5 rounded-md text-white text-[15px] bg-gray-400">
          Login
        </button>

      </main>
    </div>
  )
}

export default Login