// ============================================================
// App.jsx — Single Page Application root
// ============================================================
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Explore from './components/Explore'
import Survival from './components/Survival'
import Services from './components/Services'
import Clubs from './components/Clubs'
import Records from './components/Records'
import Gallery from './components/Gallery'
import Guidelines from './components/Guidelines'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Ticker from './components/Ticker'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Explore />
        <Survival />
        <Services />
        <Clubs />
        <Records />
        <Gallery />
        <Guidelines />
        <Contact />
      </main>
      <Footer />
      <Ticker />
    </>
  )
}
