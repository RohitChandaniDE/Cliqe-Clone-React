import React from 'react'
import "./blog.css"

const BlogherosectionDE = () => {
  return (
    <div className='container mx-auto' >

     {/* Einblicke section */}
      <section className='h-[300px] bgcblog font-bold ' >
      <h3 className='text-center text-[#1919BC] pt-10 pb-2' >cliqe Blog</h3>
      <h1 className='text-black font-bold text-center text-5xl pb-4' >Einblicke & Themen</h1>
      <p className='text-center text-gray-500 leading-5 text-[16px] font-medium pb-4' >Erfahre mehr zu verschiedenen Content Creator-Themen wie Industrie- <br />Einblicke, Trends, Best Practices, unser Produkt und vieles mehr!</p>
      <button className="text-white font-bold mt-[10px] 2xl:px-5 lg:px-5 px-3 2xl:py-2 lg:py-2 bg-[#06D5F7] 2xl:text-sm lg:text-base 
        text-sm rounded-[12px] text-center sm:ml-[680px]" type="button">Deutsch</button>

        <a href="/blog-en">
        <button className="text-gray-500 font-bold mt-[10px] 2xl:px-5 lg:px-5 px-3 2xl:py-2 lg:py-2 bg-[#F5F5F5] 2xl:text-sm lg:text-base text-sm rounded-[12px] text-center sm:ml-3" type="button">Englisch</button>
        </a>

       <img className='w-20 ml-[50px] mt-[-200px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6407293e81d444761346ee96_10-p-500.png" />
       <img className='w-20 float-right mr-[50px] mt-[40px]' src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/640728cdf769b8047749561a_Founder%20Bubble%20Tie%CC%82n%20blue-p-500.png"/>
       </section>

    </div>
  )
}

export default BlogherosectionDE