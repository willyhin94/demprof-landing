import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Why from '@/components/Why'
import Process from '@/components/Process'
import Calculator from '@/components/Calculator'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Guarantees from '@/components/Guarantees'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import { getPortfolioProjects } from '@/data/portfolio'

export default async function Home() {
  const portfolioProjects = await getPortfolioProjects()

  return (
    <div>
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio projects={portfolioProjects} />
        <Why />
        <Process />
        <Calculator />
        <Pricing />
        <Reviews />
        <Guarantees />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
