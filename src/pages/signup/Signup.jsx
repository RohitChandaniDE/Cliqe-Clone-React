import React from 'react'

const Signup = () => {
  return (
    <div className='container mx-auto multicolorbackground h-[929px]' >

    <section className='flex justify-center gap-[50px]'>

   <main className='bg-white h-[685px] w-[520px] rounded-lg shodow-2xl mt-[100px]'>
       <a href="/"> 
       <div className="logo pt-10 pl-16">
       <img className="xl:w-40 xl:h-10 w-28 sm:pt-0" src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png" alt="logo" />
       </div>
       </a>
       <div className='bg-[#E9D4FF] w-[50px] h-5 rounded-[100px] ml-[230px] mt-[-28px] mb-6' >
         <h6 className="text-[#6B23AA]  2xl:text-[12px] xl:text-5xl lg:text-3xl pt-[4px] text-2xl pl-2.5 text-center sm:text-justify">BETA</h6>
       </div>
       <h1 className='text-black font-bold text-[35px] pl-[65px] font-sans mb-1' >Sign up to cliqe for free</h1>
       <a href="/login">
       <p className='pl-[65px] text-[#6163B1] font-bold cursor-pointer text-sm pb-7' >or go to login</p>
       </a>
       <h1 className='text-[13px] font-bold text-black pl-[65px] pb-1'>Your Bio-Link</h1>

       <input className='pt-[2.5px] pb-[1px] ml-[148.5px] hover:bg-[#EFF6FF] w-[286.5px] rounded-r-md border border-gray-400 hover:border hover:border-blue-900 pl-2' type="number" name="number" id="number" placeholder = "username"/>
       <div className="w-[85px] rounded-l-md h-[30px] mt-[-30px] border border-gray-400 text-gray-400 ml-[65px] pl-[5px] bg-[#F9FAFB] mb-6">
        <h3 className='text-base pl-1 pt-[2px]' >cliqe.bio/</h3>
       </div>
        
       <h1 className='text-[13px] font-bold text-black pl-[65px] pb-1'>Email address</h1>
<input className='pt-[2.5px] ml-[65px] w-[371px] rounded-md pb-[1px] hover:bg-[#EFF6FF] border border-gray-400 hover:border hover:border-blue-900 pl-2 mb-6' type="email" name="email" id="email" />

<h1 className='text-[13px] font-bold text-black pl-[65px] pb-1'>Phone number</h1>

<select className="w-[85px] rounded-l-md h-[30.5px] border border-gray-400 ml-[65px] pl-[5px] ">
<option>DE +49</option>
<option>DE +49</option>
<option>AT +43</option>
<option>CH +41</option>
<option>BD +880</option>
<option>BE +32</option>
<option>CA +1</option>
<option>DK +45</option>
<option>FR +33</option>
<option>GR +30</option>
<option>IS +354</option>
<option>NL +31</option>
<option>NO +47</option>
<option>PT +351</option>
<option>ZA +27</option>
<option>ES +34</option>
<option>SE +46</option>
<option>GB +44</option>
<option>US +1</option>
</select>

<input className='pt-[2.5px] pb-[2px] rounded-r-md border hover:bg-[#EFF6FF] border-gray-400 hover:border hover:border-blue-900 pl-2' type="number" name="number" id="number" />
<button className="btnn px-2 pt-[7.5px] pb-[6px] mb-4 ml-1 rounded-md text-white text-[12px] bg-gray-400">GET CODE</button>

<div>
<h1 className='text-[14px] pt-3 cursor-pointer font-bold text-black pl-[65px] pb-1'>Confirmation code</h1>
</div>
<input className='pt-[2.5px] ml-[65px] w-[371px] rounded-md pb-[1px] hover:bg-[#EFF6FF] border border-gray-400 pl-2 mb-1' type="number" name="number" id="number" />
<h1 className='text-[14px] pt-3 cursor-pointer font-bold text-black pl-[65px] pb-4'>Referral Code ></h1>
<button className="btnn px-2 pt-[10px] pb-[7px] ml-[65px] w-[371px] rounded-md text-white text-[15px] bg-gray-400 mb-5">Get started</button> 
<p className='cursor-pointer text-gray-500 text-[10.1px] pl-[65px]' >By clicking Get Started you agree to Cliqe's Terms and Conditions and confirm you <br /> have read our Privacy Notice.</p>  

</main>

   <main>
   <img src="https://cliqe.bio/_next/image?url=%2Flogin-bg.png&w=1920&q=75"/>
   </main>

    </section>

    </div>
  )
}

export default Signup

