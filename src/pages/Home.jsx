import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import ParallaxBanner from '../components/ParallaxBanner'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <ParallaxBanner />
      <BestSeller />
    </div>
  )
}

export default Home
