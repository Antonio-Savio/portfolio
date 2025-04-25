import { useState } from "react";
import { Projects } from "../../helpers/projects"
import styles from './modal.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";

interface ModalProps{
    prop: Projects;
    lang: 'pt' | 'en';
    onClose: () => void;
    darkMode: boolean;
}

export function Modal({ prop, lang, onClose, darkMode }: ModalProps){
    const [loading, setLoading] = useState(true)

    function handleLoadGif(){
        setLoading(false)
    }

    return (
        <main className={styles.background}>
            <div className={styles.modalOverlay} onClick={onClose}></div>

            <div className={`${styles.container} ${darkMode ? '' : styles.light}`}>
                <button onClick={onClose}><IoCloseSharp/></button>
                <h1>{prop.title[lang]}</h1>
                {prop.video ? (
                    <video controls width="100%">
                        <source src={prop.video} type="video/webm" />
                    </video>
                ): (
                    <div className={styles.imgContainer}>
                        <img 
                            src={prop.imgSrc} 
                            alt={prop.title[lang]} 
                            onLoad={handleLoadGif}
                            style={{ visibility: loading ? 'hidden' : 'visible' }}
                        />

                        {loading && prop.imgSrc && (
                            <div className={loading ? styles.load : ''}>
                                {lang === 'pt' ? 'Carregando GIF...' : 'Loading GIF...'}
                                <FaSpinner className={styles.loadIcon} />
                            </div>
                        )}
                    </div>
                )}

                <section className={styles.desc}>
                    {prop.description[lang]}
                </section>
                <ul className={styles.technologies}>
                    {prop.techs.map((tech, id) => (
                        <li key={id}>{tech}</li>
                    ))}
                </ul>
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