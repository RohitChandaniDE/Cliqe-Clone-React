import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import BlogherosectionDE from '../../components/blogherosectionDE/BlogherosectionDE'
import CreatorblogDE from '../../components/creatorblogDE/CreatorblogDE'
import { FilterblogDE } from '../../components/filterblogDE/FilterblogDE'
import { Counter } from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <BlogherosectionDE />
      <CreatorblogDE />
      <FilterblogDE />
      <Counter />
      <Footer />

    </div>
  )
}

export default Blog