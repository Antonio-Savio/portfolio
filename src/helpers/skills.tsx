import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiReact, SiTypescript, SiCss3, SiTailwindcss, SiStyledcomponents, SiNextdotjs, SiGit, SiPrisma, SiMongodb, SiNodedotjs, SiPostgresql, SiExpress, SiChakraui, SiExpo, SiJest } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

interface Skill {
    nome: string;
    icone: JSX.Element;
}

const skills: Skill[] = [
    {
        nome: "HTML",
        icone: <TiHtml5 />
    },
    {
        nome: "CSS",
        icone: <SiCss3 />
    },
    {
        nome: "JavaScript",
        icone: <SiJavascript />
    },
    {
        nome: "TypeScript",
        icone: <SiTypescript />
    },
    {
        nome: "React",
        icone: <SiReact />
    },
    {
        nome: "Next.js",
        icone: <SiNextdotjs />
    },
    {
        nome: "Node.js",
        icone: <SiNodedotjs />
    },
    {
        nome: "Express.js",
        icone: <SiExpress />
    },
    {
        nome: "PostgreSQL",
        icone: <SiPostgresql />
    },
    {
        nome: "MongoDB",
        icone: <SiMongodb />
    },
    {
        nome: "Prisma",
        icone: <SiPrisma />
    },
    {
        nome: "Firebase",
        icone: <IoLogoFirebase />
    },
    {
        nome: "Expo",
        icone: <SiExpo />
    },
    {
        nome: "Tailwind CSS",
        icone: <SiTailwindcss />
    },
    {
        nome: "Styled-components",
        icone: <SiStyledcomponents />
    },
    {
        nome: "Chakra UI",
        icone: <SiChakraui />
    },
    {
        nome: "Testes unitários",
        icone: <SiJest />
    },
    {
        nome: "Git",
        icone: <SiGit />
    },
]

export default skills;