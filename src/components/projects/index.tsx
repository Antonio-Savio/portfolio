import styles from './projects.module.css'
import projects from '../../helpers/projects';
import { useContext, useEffect } from 'react';
import { LanguageContext } from '../../contexts/language';
import { ThemeContext } from '../../contexts/theme';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Projects(){
    const { lang } = useContext(LanguageContext)
    const { isDark } = useContext(ThemeContext)

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return(
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
                {projects.map( (project) => (
                    <li className={styles.list} key={project.id}>
                        <img src={project.imgSrc} alt={project.title[lang]} />
                        <h4>{project.title[lang]}</h4>
                        <p>{project.description[lang]}</p>
                        <p className={styles.technologies}>
                            {project.techs.map((tech, id) => (
                                <span key={id}>{tech}</span>
                            ))}
                        </p>
                        <div className={styles.links}>
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
                    </li>
                ))}
            </ul>
        </motion.section>
    )
}

export default Projects