import CardCarousel from "./components/Cardscarousel"
import CategorySection from "./components/CategorySection"
import HeroSection from "./components/Herosection"
import IconBar from "./components/IconBar"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <div className="px-6 z-50">
    <Navbar/>
    <HeroSection/>
    <IconBar/>
    <CardCarousel/>
    <CategorySection/>
      <h1 className='text-red-500'>hello</h1>
      </div>
    </>
  )
}

export default App
