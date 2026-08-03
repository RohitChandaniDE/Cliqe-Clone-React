import React from 'react'
import "../login/Login.css"

const countryCodes = ['DE +49','AT +43','CH +41','BD +880','BE +32','CA +1','DK +45','FR +33','GR +30','IS +354','NL +31','NO +47','PT +351','ZA +27','ES +34','SE +46','GB +44','US +1'];

const Signup = () => {
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

        <h1 className='text-black font-bold text-[26px] sm:text-[35px] font-sans mb-1'>
          Sign up to cliqe for free
        </h1>
        <a href="/login">
          <p className='text-[#6163B1] font-bold cursor-pointer text-sm pb-7'>or go to login</p>
        </a>

        <label className='block text-[13px] font-bold text-black pb-1'>Your Bio-Link</label>
        <div className='flex mb-6'>
          <div className="flex items-center rounded-l-md h-[38px] border border-gray-400
                          text-gray-400 px-2 bg-[#F9FAFB] flex-shrink-0">
            <h3 className='text-base'>cliqe.bio/</h3>
          </div>
          <input className='flex-1 min-w-0 h-[38px] hover:bg-[#EFF6FF] rounded-r-md
                            border-y border-r border-gray-400 hover:border-blue-900 pl-2'
                 type="text" placeholder="username" />
        </div>

        <label className='block text-[13px] font-bold text-black pb-1'>Email address</label>
        <input className='w-full h-[38px] rounded-md hover:bg-[#EFF6FF] border border-gray-400
                          hover:border-blue-900 pl-2 mb-6' type="email" />

        <label className='block text-[13px] font-bold text-black pb-1'>Phone number</label>
        <div className='flex mb-6'>
          <select className="rounded-l-md h-[38px] border border-gray-400 px-1 bg-white flex-shrink-0">
            {countryCodes.map((c, i) => <option key={i}>{c}</option>)}
          </select>
          <input className='flex-1 min-w-0 h-[38px] hover:bg-[#EFF6FF] border-y border-gray-400
                            hover:border-blue-900 pl-2' type="number" />
          <button className="btnn px-3 rounded-r-md text-white text-[12px] bg-gray-400
                             whitespace-nowrap flex-shrink-0">
            GET CODE
          </button>
        </div>

        <label className='block text-[14px] font-bold text-black pb-1'>Confirmation code</label>
        <input className='w-full h-[38px] rounded-md hover:bg-[#EFF6FF] border border-gray-400
                          pl-2 mb-4' type="number" />

        <label className='block text-[14px] font-bold text-black pb-4'>Referral Code</label>
        <button className="btnn w-full py-2.5 rounded-md text-white text-[15px] bg-gray-400 mb-5">
          Get started
        </button>

        <p className='cursor-pointer text-gray-500 text-[10.1px]'>
          By clicking Get Started you agree to Cliqe's Terms and Conditions and confirm you
          have read our Privacy Notice.
        </p>

      </main>
    </div>
  )
}

export default Signup

