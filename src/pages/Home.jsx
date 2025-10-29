import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsletterBox from '../components/NewsletterBox'
import ParallaxBanner from '../components/ParallaxBanner'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <ParallaxBanner />
      <BestSeller />
      {/* <NewsletterBox /> */}
    </div>
  )
}

export default Home
