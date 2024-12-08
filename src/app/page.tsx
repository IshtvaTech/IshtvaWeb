import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
