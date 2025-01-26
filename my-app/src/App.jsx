import CardCarousel from "./components/Cardscarousel"
import CategorySection from "./components/CategorySection"
import MayBetsCategoriesAndTable from "./components/Categorytable"
import Footer from "./components/Footer"
import BettingAnalytics from "./components/Graph"
import HeroSection from "./components/Herosection"
import IconBar from "./components/IconBar"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <div className="px-4 lg:px-6 bg-[#0B1428] bg-fixed z-50"><Navbar/>
    <HeroSection/>
    <IconBar/>
    <CardCarousel/>
    <CategorySection/>
    <MayBetsCategoriesAndTable/>
    <Footer/>
{/* <BettingAnalytics/>     */}
      </div>
    </>
  )
}

export default App
