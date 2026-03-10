import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Stats from './components/Stats'
import Features from './components/Features'
import Workflow from './components/Workflow'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Stats />
      <Features />
      <Workflow />
      <CTA />
      <Footer />
    </main>
  )
}
