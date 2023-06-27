import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='container mx-auto multicolorbackground h-[929px]'>
     
     <section className='flex justify-center gap-[50px] ' >
     <main className='bg-white h-[480px] w-[520px] rounded-lg shodow-2xl mt-[200px]'>
      <a href="/">
       <div className="logo pt-10 pl-16">
       <img className="xl:w-40 xl:h-10 w-28 sm:pt-0" src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/63a1e1ceb4ace16396c01065_cliqe%20logo-p-500.png" alt="logo" />
       </div>
       </a>
       <div className='bg-[#E9D4FF] w-[50px] h-5 rounded-[100px] ml-[230px] mt-[-28px] mb-6' >
         <h6 className="text-[#6B23AA]  2xl:text-[12px] xl:text-5xl lg:text-3xl pt-[4px] text-2xl pl-2.5 text-center sm:text-justify">BETA</h6>
       </div>
       <h1 className='text-black font-bold text-[35px] pl-[65px] font-sans mb-1' >Log in to cliqe</h1>
       <a href="/signup">
       <p className='pl-[65px] text-[#6163B1] font-bold cursor-pointer text-sm pb-6' >or go to signup</p>
       </a>
       <h1 className='text-[13px] font-bold text-black pl-[65px] pb-1'>Phone number</h1>
      
      <select className="w-[85px] rounded-l-md h-[30px] border border-gray-400 ml-[65px] pl-[5px] ">
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

     <input className='pt-[2.5px] pb-[1px] rounded-r-md hover:bg-[#EFF6FF] border border-gray-400 hover:border hover:border-blue-900 pl-2' type="number" name="number" id="number" />
     {/* The button to open modal */}
     <label htmlFor="my_modal_6" className="btnn px-2 pt-[10px] pb-[7px] ml-1 rounded-md text-white text-[12px] bg-gray-400">GET CODE</label>

     {/* Put this part before </body> tag */}
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />

    <div className="modal">
     <div className="modal-box">
     <h3 className="font-bold text-lg">Hey, thank you for your interest in cliqe!</h3>
     <p className="py-1">Go to the sign up first and you can login next time.</p>
     <div className="modal-action" >
     <a href="/signup" htmlFor="my_modal_6"  className="btnn bg-white font-bold text-[#6163B1] border border-gray-300 px-2 pt-[10px] pb-[7px] rounded-md">Go to Sign Up</a>
     </div>
     </div>
    </div>

    <div>
    <h1 className='text-[14px] pt-3 cursor-pointer font-bold text-black pl-[65px] pb-1'>Confirmation code</h1>
    </div>
    <input className='pt-[2.5px] ml-[65px] w-[371px] rounded-md pb-[1px] hover:bg-[#EFF6FF] border border-gray-400 hover:border hover:border-blue-900 pl-2 mb-6' type="number" name="number" id="number" />
    
    <p className='cursor-pointer text-gray-500 text-[11.5px] pl-[65px] mb-6' >You signed up with email and password before?</p>
      
    <button className="btnn px-2 pt-[10px] pb-[7px] ml-[65px] w-[371px] rounded-md text-white text-[15px] bg-gray-400">Login</button> 

    </main>

    <main>
     <img src="https://cliqe.bio/_next/image?url=%2Flogin-bg.png&w=1920&q=75"/>
    </main>
     </section>

    </div>
  )
}

export default Login