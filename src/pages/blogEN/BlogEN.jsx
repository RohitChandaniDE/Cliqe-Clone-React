import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BlogherosectionEN from '../../components/blogherosectionEN/BlogherosectionEN'
import CreatorblogEN from '../../components/creatorblogEN/CreatorblogEN'
import FilterblogEN from '../../components/filterblogEN/FilterblogEN'
import { Counter } from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'

const BlogEN = () => {
  return (
    <div>
     <Navbar />
     <BlogherosectionEN />
     <CreatorblogEN />
     <FilterblogEN />
     <Counter />
     <Footer />

    </div>
  )
}

export default BlogEN