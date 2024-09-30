import { useState, useContext } from 'react';
import styles from './header.module.css'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LanguageContext } from '../../contexts/language';
import { ThemeContext } from '../../contexts/theme';

interface HeaderTranslations{
    port: string;
    about: string;
    skills: string;
    project: string;
}

interface Translation{
    pt: HeaderTranslations;
    en: HeaderTranslations;
}

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { lang } = useContext(LanguageContext)
    const { isDark } = useContext(ThemeContext)
    const translations: Translation = {
        pt: {
            port: 'Portfólio',
            about: 'Sobre mim',
            skills: 'Habilidades',
            project: 'Projetos'
        },

        en: {
            port: 'Portfolio',
            about: 'About me',
            skills: 'Skills',
            project: 'Projects'
        }
    }

    return (
        <header className={styles.header} id='header'>
            <a href="/">{translations[lang].port}</a>

            {isOpen ? (
                <IoMdClose onClick={() => setIsOpen(prev => !prev)} />
            ): (
                <RiMenu3Fill onClick={() => setIsOpen(prev => !prev)} />
            )}

            <div 
                className={`${styles.navigation} ${isDark ? '' : styles.light} ${isOpen ? styles.opened : ''}`}
                onClick={() => setIsOpen(false)}
            >
                <a href="#sobre">{translations[lang].about}</a>
                <a href="#habilidades">{translations[lang].skills}</a>
                <a href="#projetos">{translations[lang].project}</a>
            </div>
        </header>
    )
  }
  
  export default Header