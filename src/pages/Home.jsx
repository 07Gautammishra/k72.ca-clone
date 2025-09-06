import HomeBottomText from "../components/home/HomeBottomText"
import HomeHeroText from "../components/home/HomeHeroText"
import HomeVideo from "../components/home/homeVideo"

const Home = () => {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed ">
        <HomeVideo/>
      </div>
      <div className="relative h-screen w-screen flex flex-col justify-between pt-5 overflow-hidden">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home
