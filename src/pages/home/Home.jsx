import Navbar from "../../components/navbar/Navbar"
import Herosection from "../../components/herosection/Herosection"
import Leidenschaft from '../../components/leidenschaft/Leidenschaft'
import Cliqe from '../../components/cliqe/Cliqe'
import RangeSlider from '../../components/rangeslider/RangeSlider'
import Features from '../../components/features/Features'
import Accordion from '../../components/accordion/Accordion'
import Socials from '../../components/social/Socials'
import Carousel from '../../components/carousel/Carousel'
import Creator from '../../components/creator/Creator'
import { Counter }  from '../../components/counter/Counter'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
    <Navbar />
    <Herosection />
    <Leidenschaft />
    <Cliqe />
    <RangeSlider />
    <Features />
    <Accordion />
    <Socials />
    <Carousel />
    <Creator />
    <Counter />
    <Footer />
    
    </div>
  )
}

export default Home