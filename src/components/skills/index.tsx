import { useContext, useEffect } from "react"
import skills from "../../helpers/skills"
import styles from './skills.module.css'
import { LanguageContext } from "../../contexts/language"
import { ThemeContext } from "../../contexts/theme"
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills(){
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

    return (
        <motion.section 
            className={`${styles.section} ${isDark ? '' : styles.light}`} 
            id="habilidades"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
            }}
        >
            <h1>
                {lang === 'pt' ? 'Habilidades' : 'Skills'}
            </h1>
            <p>{lang === 'pt' ? 'Habilidades Técnicas' : 'Hard Skills'}</p>

            <ul className={styles.container}>
                {skills.map( (skill, index) => (
                    <li key={index} className={styles.skill}>
                        <div className={styles.icon}>{skill.icone}</div>
                        <div className={styles.nome}>{skill.nome}</div>
                    </li>
                ))}
            </ul>
        </motion.section>
    )
}

export default Skills