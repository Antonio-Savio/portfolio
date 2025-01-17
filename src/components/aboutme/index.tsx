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
            desc: 'Sou Antonio Sávio, desenvolvedor web apaixonado por transformar ideias em soluções práticas através da programação. Como estudante de Análise e Desenvolvimento de Sistemas no 5º período e com 2 anos de experiência em projetos de desenvolvimento web full-stack, com ênfase em front-end, foco em integrar softwares funcionais e eficientes a uma interface intuitiva e responsiva, buscando uma boa experiência de usuário. Valorizo o aprendizado contínuo e a solução de problemas, sempre buscando inovar e aprimorar minhas habilidades a cada novo projeto.'
        },
        en: {
            title: 'About me',
            desc: 'I am Antonio Sávio, a web developer passionate about transforming ideas into practical solutions through programming. As a student of Systems Analysis and Development in my 5th semester, with 2 years of experience in full-stack web development projects, with an emphasis on front-end, I focus on integrating functional and efficient software with an intuitive and responsive interface, aiming to provide a great user experience. I value continuous learning and problem-solving, always seeking to innovate and enhance my skills with each new project.'
        }
    }

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
            
            <p>{translations[lang].desc}</p>

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