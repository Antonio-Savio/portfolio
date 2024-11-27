import { useContext } from 'react'
import styles from './hero.module.css'
import Curriculo from '../../assets/curriculo-antonio-savio.pdf'
import { LanguageContext } from '../../contexts/language'
import { ThemeContext } from '../../contexts/theme'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Hero() {
  const { lang, toggleLanguage } = useContext(LanguageContext)
  const { toggleTheme, isDark } = useContext(ThemeContext)
  const translations = {
    pt: {
      position: 'Desenvolvedor Front-end',
      cv: 'Baixar currículo',
      contact: 'Entrar em Contato'
    },

    en: {
      position: 'Front-end Developer',
      cv: 'Download CV',
      contact: 'Contact Me'
    }
  }

  return (
    <section className={`${styles.section} ${isDark ? '' : styles.light}`}>
        <div className={styles.globalButtons}>
          <button className={styles.globalButton} onClick={() => toggleLanguage()}>
            {lang === "pt" ? "EN" : "PT"} 
          </button>

          <button className={styles.globalButton} onClick={() => toggleTheme()}>
            {isDark ? <IoSunnyOutline /> : <IoMoonOutline/>}
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
              <h1>Antonio Sávio</h1>
              <h4>{translations[lang].position}</h4>
              
              <div className={styles.anchors}>
                <a href={Curriculo} download="curriculo-antonio-savio.pdf" className={styles.anchor}>
                  {translations[lang].cv}
                </a>
              
                <a href="mailto:savio.aragao@hotmail.com" className={styles.anchor}>
                  {translations[lang].contact}
                </a>
              </div>
          </div>

          <div className={styles.imgContainer}></div>
        </div>
    </section>
  )
}

export default Hero
