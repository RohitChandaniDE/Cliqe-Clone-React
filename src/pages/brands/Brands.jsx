import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Creatornbrands from '../../components/creatornbrands/Creatornbrands'
import Counterbrands from '../../components/counterbrands/Counterbrands'
import Cliqebrands from '../../components/cliqebrands/Cliqebrands'
import Vorteilbrands from '../../components/vorteilbrands/Vorteilbrands'
import { Counter } from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'


const Brands = () => {
  return (
    <div>
      <Navbar />
      <Creatornbrands />
      <Counterbrands />
      <Cliqebrands />
      <Vorteilbrands />
      <Counter />
      <Footer />

    </div>
  )
}

export default Brands