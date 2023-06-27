import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import KostenlosPricing from '../../components/kostenlosPricing/KostenlosPricing'
import Pricesection from '../../components/pricesection/Pricesection'
import Faqfeatures from '../../components/faqFeatures/Faqfeatures'
import { Counter } from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'

const Pricing = () => {
  return (
    <div>
       <Navbar />
       <KostenlosPricing />
       <Pricesection />
       <Faqfeatures />
       <Counter />
       <Footer />

    </div>
  )
}

export default Pricing