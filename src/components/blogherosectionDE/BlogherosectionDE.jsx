import React from 'react'
import "./blog.css"

const BlogherosectionDE = () => {
  return (
    <div className='w-full bgcblog overflow-hidden'>

      <section className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 font-bold'>

        <img className='hidden lg:block absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 w-20 pointer-events-none'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/6407293e81d444761346ee96_10-p-500.png"
             alt="" aria-hidden="true" />
        <img className='hidden lg:block absolute right-8 xl:right-12 top-1/2 translate-y-4 w-20 pointer-events-none'
             src="https://uploads-ssl.webflow.com/638a2cc04cd844a36eb3c00a/640728cdf769b8047749561a_Founder%20Bubble%20Tie%CC%82n%20blue-p-500.png"
             alt="" aria-hidden="true" />

        <div className='max-w-2xl mx-auto text-center'>
          <h3 className='text-[#1919BC] pb-2'>cliqe Blog</h3>
          <h1 className='text-black font-bold text-3xl sm:text-4xl lg:text-5xl pb-4'>
            Einblicke &amp; Themen
          </h1>
          <p className='text-gray-500 leading-5 text-[16px] font-medium pb-6'>
            Erfahre mehr zu verschiedenen Content Creator-Themen wie Industrie- <br className='hidden lg:inline' />
            Einblicke, Trends, Best Practices, unser Produkt und vieles mehr!
          </p>

          <div className='flex justify-center gap-3'>
            <button className="text-white font-bold px-5 py-2 bg-[#06D5F7] text-sm rounded-[12px]" type="button">
              Deutsch
            </button>
            <a href="/blog-en">
              <button className="text-gray-500 font-bold px-5 py-2 bg-[#F5F5F5] text-sm rounded-[12px]" type="button">
                Englisch
              </button>
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}

export default BlogherosectionDE