import { useContext, useEffect } from 'react';
import styles from './aboutme.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LanguageContext } from '../../contexts/language';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutMeTranslations{
    title: string;
    desc: string;
}

interface Translations{
    pt: AboutMeTranslations;
    en: AboutMeTranslations;
}

function AboutMe(){
    const { lang } = useContext(LanguageContext)
    const translations: Translations = {
        pt: {
            title: 'Sobre mim',
            desc: 'Sou estudante de Análise e Desenvolvimento de Sistemas, atualmente no 5º período, com 2 anos de experiência em projetos pessoais de desenvolvimento web front-end. Foco em criar soluções que combinam design responsivo com interfaces funcionais, intuitivas e envolventes. Sou comprometido com o aprendizado contínuo e a solução de problemas.'
        },
        en: {
            title: 'About me',
            desc: 'I am a Systems Analysis and Development student, currently in the 5th semester, with 2 years of experience in personal web development projects. I focus on creating solutions that combine responsive design with functional, intuitive, and engaging interfaces. I am committed to continuous learning and problem-solving.'
        }
    }

    const controls = useAnimation();
    const { ref, inView } = useInView({
        // triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return(
        <motion.section 
            className={styles.section} 
            id='sobre'
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
            }}
        >
            <h1>{translations[lang].title}</h1>
            <p>
                {translations[lang].desc}
            </p>

            <div className={styles.social}>
                <div>
                    <a 
                        href="https://www.linkedin.com/in/antonio-savio/"
                        target='_blank'
                        rel="noopener noreferrer"
                        className={styles.contact}
                    >
                        <FaLinkedin/>
                    </a>
                    Linkedin
                </div>

                <div>
                    <a 
                        href="https://github.com/Antonio-Savio"
                        target='_blank'
                        rel="noopener noreferrer"
                        className={styles.contact}
                    >
                        <FaGithub/>
                    </a>
                    GitHub
                </div>

                <div>
                    <a href="mailto:savio.aragao@hotmail.com" className={styles.contact}>
                        <IoMailOutline/>
                    </a>
                    E-mail
                </div>

                <div>
                    <a 
                        href="https://api.whatsapp.com/send?phone=5579998073502"
                        target='_blank'
                        rel="noopener noreferrer"
                        className={styles.contact}
                    >
                        <FaWhatsapp/>
                    </a>
                    Whatsapp
                </div>
            </div>
        </motion.section>
    )
}

export default AboutMe;