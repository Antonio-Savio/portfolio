import { useContext, useEffect } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import { ThemeContext } from './contexts/theme'

function App() {
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    document.body.className = isDark ? '' : 'light';
  }, [isDark]);

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
