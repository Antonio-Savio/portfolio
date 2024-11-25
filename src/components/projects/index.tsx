import styles from './projects.module.css'
import projects from '../../helpers/projects';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts/language';
import { ThemeContext } from '../../contexts/theme';
import { Modal } from '../modal';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects(){
    const { lang } = useContext(LanguageContext)
    const { isDark } = useContext(ThemeContext)
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);
    
    return(
        <>
            <motion.section 
                id='projetos'
                className={`${styles.section} ${isDark ? '' : styles.light}`}
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
                }}
            >
                <h1>{lang === 'pt' ? 'Projetos' : 'Projects'}</h1>

                <ul className={styles.container}>
                    {projects.map( (project, index) => (
                        <motion.li 
                            className={styles.list} 
                            key={project.repo}
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            onClick={() => {
                                setSelectedProject(index)
                                setShowModal(true)
                            }}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { delay: index * 0.6, duration: 0.8 } },
                            }}
                        >
                            <img src={project.imgSrc} alt={project.title[lang]} />
                            <h4>{project.title[lang]}</h4>
                            <p className={styles.description}>{project.description[lang]}</p>
                            <p className={styles.technologies}>
                                {project.techs.map((tech, id) => (
                                    <span key={id}>{tech}</span>
                                ))}
                            </p>
                            <div className={styles.links} onClick={(e) => e.stopPropagation()}>
                                <a 
                                    href={project.deploy}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    {lang === 'pt' ? 'Visualizar' : 'Deploy'}
                                </a>
                                <a 
                                    href={project.repo}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    {lang === 'pt' ? 'Repositório' : 'Repository'}
                                </a>
                            </div>

                        </motion.li>
                    ))}
                </ul>
            </motion.section>

            {showModal && (
                <Modal 
                    prop={projects[selectedProject ?? 0]}
                    lang={lang}
                    onClose={() => setShowModal(false)}
                    darkMode={isDark}
                />
            )}
        </>
    )
}


export default Projects