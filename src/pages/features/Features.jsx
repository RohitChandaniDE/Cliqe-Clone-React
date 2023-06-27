import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Bioseite from '../../components/bioSeiteFeatures/Bioseite'
import Losung from '../../components/losungfeatures/Losung'
import Weiterefeatures from '../../components/weiterefeatures/Weiterefeatures'
import Accordion from '../../components/accordion/Accordion'
import Accordionfeatures from '../../components/accordionfeatures/Accordionfeatures'
import Socials from '../../components/social/Socials'
import Carousel from '../../components/carousel/Carousel'
import { Counter } from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'

const Features = () => {
  return (
    <div>
        <Navbar  />
        <Bioseite />
        <Losung />
        <Weiterefeatures />
        <Accordion />
        <Accordionfeatures />
        <Socials />
        <Carousel />
        <Counter />
        <Footer />

    </div>
  )
}

export default Features