import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Promo from './components/Promo'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Featured />
        <Promo />
      </main>
      <Footer />
    </>
  )
}
