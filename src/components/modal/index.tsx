import { Projects } from "../../helpers/projects"
import styles from './modal.module.css'
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps{
    prop: Projects;
    lang: 'pt' | 'en';
    onClose: () => void;
    darkMode: boolean;
}

export function Modal({ prop, lang, onClose, darkMode }: ModalProps){

    return (
        <main className={styles.background}>
            <div className={styles.modalOverlay} onClick={onClose}></div>

            <div className={`${styles.container} ${darkMode ? '' : styles.light}`}>
                <button onClick={onClose}><IoCloseSharp/></button>
                <h1>{prop.title[lang]}</h1>
                <img src={prop.imgSrc} alt={prop.title[lang]} />
                <p>{prop.description[lang]}</p>
                <div className={styles.technologies}>
                    {prop.techs.map((tech, id) => (
                        <span key={id}>{tech}</span>
                    ))}
                </div>
                <div className={styles.links} onClick={(e) => e.stopPropagation()}>
                    <a 
                        href={prop.deploy}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        {lang === 'pt' ? 'Visualizar' : 'Deploy'}
                    </a>
                    <a 
                        href={prop.repo}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        {lang === 'pt' ? 'Repositório' : 'Repository'}
                    </a>
                </div>
            </div>
        </main>
    )
}