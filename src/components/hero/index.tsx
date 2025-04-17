import { useContext } from 'react'
import styles from './hero.module.css'
import Curriculo from '../../assets/curriculo-antonio-savio.pdf'
import ProfilePic from '../../assets/profile.webp'
import { LanguageContext } from '../../contexts/language'
import { ThemeContext } from '../../contexts/theme'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

function Hero() {
  const { lang, toggleLanguage } = useContext(LanguageContext)
  const { toggleTheme, isDark } = useContext(ThemeContext)
  const translations = {
    pt: {
      position: 'Desenvolvedor Full-Stack',
      cv: 'Baixar Full-Stack',
      contact: 'Entrar em Contato'
    },

    en: {
      position: 'Full-Stack Developer',
      cv: 'Download CV',
      contact: 'Contact Me'
    }
  }

  return (
    <section className={`${styles.section} ${isDark ? '' : styles.light}`}>
        <div className={styles.globalButtons}>
          <button 
            className={styles.globalButton} 
            onClick={() => toggleLanguage()}
            title={lang === 'pt' ? 'Mudar para inglês' : 'Toggle language to portuguese'}
          >
            {lang === "pt" ? "EN" : "PT"} 
          </button>

          <button 
            className={styles.globalButton} 
            onClick={() => toggleTheme()}
            title={lang === 'pt' ? 'Alterar tema' : 'Toggle theme'}
          >
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

          <div className={styles.imgContainer}>
            <img src={ProfilePic} alt="Foto de perfil" width='270px' height='270px' />
          </div>
        </div>
    </section>
  )
}

export default Hero
