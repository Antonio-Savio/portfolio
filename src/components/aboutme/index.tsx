import { useContext, useEffect } from 'react';
import styles from './aboutme.module.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { LanguageContext } from '../../contexts/language';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AboutMeTranslations{
    title: string;
    desc: JSX.Element;
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
            desc: (<>
                <p>
                    Olá! Sou Antonio Sávio, <strong>Desenvolvedor Full-Stack</strong> com 2 anos de experiência e formação em <strong>Análise e Desenvolvimento de Sistemas</strong>. Tenho um foco especial no front-end, mas atuo na construção completa de projetos.
                </p>
                <ul>
                    Minha expertise técnica abrange:
                    <li><strong>Front-end:</strong> Criação de interfaces web modernas, responsivas e intuitivas com <strong>TypeScript, React e Next.js</strong>.</li>
                    <li><strong>Back-end:</strong> Desenvolvimento de APIs e lógicas de negócio robustas e eficientes utilizando <strong>Node.js, TypeScript, PostgreSQL e MongoDB</strong>.</li>
                </ul>
                <p>
                    Sou apaixonado por transformar ideias em produtos digitais funcionais, centrados na experiência do usuário. Estou em constante aprendizado, sempre buscando inovações para enfrentar desafios e entregar valor real através do código.
                </p>
            </>)
        },
        en: {
            title: 'About me',
            desc: (<>
                <p>
                    Hello! I'm Antonio Sávio, a <strong>Web Developer</strong> with a degree in <strong>Systems Analysis and Development</strong> and 2 years of experience building full-stack projects, specializing in the front-end.
                </p>
                <p>
                    I develop modern, high-performance web applications using <strong>TypeScript</strong>, <strong>Next.js</strong>, and <strong>React</strong> to create intuitive and responsive interfaces. On the back-end, I work with <strong>Node.js</strong>, <strong>PostgreSQL</strong>, and <strong>MongoDB</strong> to ensure robust and efficient logic.
                </p>
                <p>
                    My passion is transforming ideas into functional, user-centric digital products, effectively connecting design and technology.
                </p>
                <p>
                    I am constantly learning, always seeking innovations to tackle challenges and deliver real value through code.
                </p>
            </>)
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
            
            <div className={styles.desc}>{translations[lang].desc}</div>

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