import data from './data/portfolio'
import useSiteEffects from './hooks/useSiteEffects'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const IDS = data.nav.map((n) => n.toLowerCase())

export default function App() {
  const active = useSiteEffects(IDS)
  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
