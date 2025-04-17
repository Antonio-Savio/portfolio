import { useContext } from 'react';
import { LanguageContext } from '../../contexts/language';
import styles from './footer.module.css'
import { FaArrowUp } from "react-icons/fa6";

function Footer(){
    const { lang } = useContext(LanguageContext)

    return(
        <footer className={styles.footer}>
            <p>
                {lang === 'pt' ? '2024 © Todos os direitos reservados - Antonio Sávio' : '2024 © All rights reserved - Antonio Sávio'}
            </p>
            <a href="#header" title={lang === 'pt' ? "Ir para o topo" : "Go to the top"}>
                <FaArrowUp/>
            </a>
        </footer>
    )
}

export default Footer;