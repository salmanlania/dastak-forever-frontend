import BestSeller from '../components/BestSeller'
import CategoryGrid from '../components/CategoryGrid'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import MiniAbout from '../components/MiniAbout'
import ParallaxBanner from '../components/ParallaxBanner'
import Testimonials from '../components/Testimonials'
import InstagramFeed from './InstagramFeed'
import BrandAssurance from '../components/BrandAssurance'
import Newsletter  from './Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <CategoryGrid />
      <ParallaxBanner />
      <BestSeller />
      <MiniAbout />
      <Testimonials />
      <InstagramFeed />
      <BrandAssurance />
      <Newsletter />
    </div>
  )
}

export default Home
