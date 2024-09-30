import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiReact, SiTypescript, SiCss3, SiTailwindcss, SiStyledcomponents, SiVite, SiFirebase, SiGit } from "react-icons/si";

interface Skill {
    id: number;
    nome: string;
    icone: JSX.Element;
}

const skills: Skill[] = [
    {
        id: 1,
        nome: "HTML",
        icone: <TiHtml5 />
    },
    {
        id: 2,
        nome: "CSS",
        icone: <SiCss3 />
    },
    {
        id: 3,
        nome: "JavaScript",
        icone: <SiJavascript />
    },
    {
        id: 4,
        nome: "React",
        icone: <SiReact />
    },
    {
        id: 5,
        nome: "TypeScript",
        icone: <SiTypescript />
    },
    {
        id: 6,
        nome: "Tailwind CSS",
        icone: <SiTailwindcss />
    },
    {
        id: 7,
        nome: "Styled-components",
        icone: <SiStyledcomponents />
    },
    {
        id: 8,
        nome: "Vite",
        icone: <SiVite />
    },
    {
        id: 9,
        nome: "Firebase",
        icone: <SiFirebase />
    },
    {
        id: 10,
        nome: "Git",
        icone: <SiGit />
    },
]

export default skills;