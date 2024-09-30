import styles from './footer.module.css'
import { FaArrowUp } from "react-icons/fa6";

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>2024 © All rights reserved - Antonio Sávio</p>
            <a href="#header" title='Go to the top'>
                <FaArrowUp/>
            </a>
        </footer>
    )
}

export default Footer;