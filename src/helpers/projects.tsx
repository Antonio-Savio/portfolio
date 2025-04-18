import { SiReact, SiTypescript, SiCss3, SiTailwindcss, SiStyledcomponents, SiNodedotjs, SiPostgresql, SiExpress, SiNextdotjs, SiPrisma, SiExpo, SiMongodb, SiChakraui, SiJest } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import WeatherGif from '../assets/animated-images/desktop-weather.webp'
import PokedexGif from '../assets/animated-images/desktop-pokedex.webp'
import CriptoGif from '../assets/animated-images/desktop-version-criptoapp.webp'
import SushiGif from '../assets/animated-images/shiawase-sushi.webp'
import WebImoveisGif from '../assets/animated-images/webimoveis.webp'
import PopcornguideGif from '../assets/animated-images/popcornguide.webp'
import GatinhosGif from '../assets/animated-images/gatinhos-cajueiros.webp'
import AdvGif from '../assets/animated-images/advcontrol.webp'
import delicatessenGif from '../assets/animated-images/arte-del-gusto.webp'
import BeautyManagerGif from '../assets/animated-images/beauty-manager.webp'

import BeautyManagerVideo from '../assets/videos/beautymanager-video.webm'
import delicatessenVideo from '../assets/videos/arte-del-gusto-video.webm'

import WeatherFrame from '../assets/images/weather_first_frame.png'
import PokedexFrame from '../assets/images/pokedex_first_frame.png'
import CriptoFrame from '../assets/images/criptoapp_first_frame.png'
import SushiFrame from '../assets/images/shiawase-sushi_first_frame.png'
import WebImoveisFrame from '../assets/images/first_frame_webimoveis.png'
import PopcornFrame from '../assets/images/popcornguide_first_frame.png'
import GatinhosFrame from '../assets/images/gatinhos_first_frame.png'
import AdvFrame from '../assets/images/advcontrol_first_frame.png'
import delicatessenFrame from '../assets/images/arte-del-gusto_first_frame.png'
import BeautyManagerFrame from '../assets/images/beauty-manager_first_frame.png'


interface Translations{
    pt: string;
    en: string;
}

interface RichTranslations {
    pt: string | JSX.Element;
    en: string | JSX.Element;
}

export interface Projects{
    first_frame: string;
    imgSrc: string;
    video?: string;
    title: Translations;
    description: RichTranslations;
    techs: JSX.Element[];
    deploy: string;
    repo: string;
}

const projects: Projects[] = [
    {
        first_frame: BeautyManagerFrame,
        imgSrc: BeautyManagerGif,
        video: BeautyManagerVideo,
        title: {
            pt: "BeautyManager: SaaS para Gestão de Salões de Beleza",
            en: "BeautyManager: SaaS for Beauty Salon Management"
        },
        description: {
            pt: (<>
                Sistema <strong>SaaS</strong> (Software as a Service) <strong>full-stack</strong> desenvolvido para otimizar a gestão de salões de beleza. O projeto abrange:
                <ul>
                    <li>
                        <a href="https://github.com/Antonio-Savio/beautyManager-back-end" target="_blank" rel="noopener noreferrer">
                            <strong>Back-end robusto: </strong>
                        </a> 
                        Implementação da API RESTful com Node.js/Express, gerenciamento de autenticação e autorização via JWT, integração segura com a API de pagamentos <strong>Stripe</strong> para gestão de assinaturas, e persistência de dados com PostgreSQL e Prisma ORM.
                    </li>
                    <li>
                        <a href="https://github.com/Antonio-Savio/beautyManager-front-end" target="_blank" rel="noopener noreferrer">
                            <strong>Front-end intuitivo: </strong> 
                        </a>
                        Interface administrativa construída com Next.js e Chakra UI, permitindo aos proprietários gerenciar agendamentos, clientes, serviços oferecidos e planos de assinatura de forma eficiente.
                    </li>
                </ul>
                Com TypeScript aplicado no back-end e front-end para maior robustez e manutenibilidade, o projeto foca na escalabilidade, segurança e experiência do usuário para um ambiente de negócios real.
            </>),
            en: (<>
                <strong>Full-stack SaaS</strong> (Software as a Service) system developed to optimize beauty salon management. The project encompasses:
                <ul>
                    <li>
                        <a href="https://github.com/Antonio-Savio/beautyManager-back-end" target="_blank" rel="noopener noreferrer">
                            <strong>Robust Back-end: </strong> 
                        </a>
                        RESTful API implementation using Node.js/Express, managed authentication and authorization via JWT, securely integrated with the <strong>Stripe</strong> payments API for subscription management, and handled data persistence with PostgreSQL and Prisma ORM.
                    </li>
                        
                    <li>
                        <a href="https://github.com/Antonio-Savio/beautyManager-front-end" target="_blank" rel="noopener noreferrer">
                            <strong>Intuitive Front-end: </strong> 
                        </a>
                        Administrative interface built with Next.js and Chakra UI, enabling owners to efficiently manage appointments, clients, offered services, and subscription plans.
                    </li>
                </ul>
                With TypeScript applied to the back-end and front-end for greater robustness and maintainability, the project focus on scalability, security, and user experience for a real-world business environment.
            </>)
        },
        techs: [<SiNodedotjs/>, <SiExpress/>, <SiNextdotjs/>, <SiTypescript/>, <SiPostgresql/>, <SiPrisma/>, <SiChakraui/>],
        deploy: "https://beauty-manager-front-end.vercel.app",
        repo: "https://github.com/Antonio-Savio/beautyManager-front-end"
    },

    {
        first_frame: delicatessenFrame,
        imgSrc: delicatessenGif,
        video: delicatessenVideo,
        title: {
            pt: "Arte del Gusto: Sistema de Gestão Integrado para Delicatessen",
            en: "Arte del Gusto: Integrated Management System for Delicatessen"
        },
        description: {
            pt: (<>
                Ecossistema <strong>web e mobile completo</strong> desenvolvido para a gestão de uma delicatessen. A solução é composta por três aplicações integradas:

                <ul>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-back-end" target="_blank" rel="noopener noreferrer">
                            <strong>API Back-end: </strong>
                        </a> 
                        Construída com Node.js/Express e PostgreSQL/Prisma, responsável pela lógica de negócios, autenticação e centralização dos dados.
                    </li>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-front-end" target="_blank" rel="noopener noreferrer">
                            <strong>Front-end (painel web): </strong> 
                        </a> 
                        Interface administrativa para cadastro de produtos, categorias e controle de pedidos em tempo real. Construída em Next.js/Tailwind.
                    </li>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-mobile" target="_blank" rel="noopener noreferrer">
                            <strong>Aplicativo móvel: </strong>
                        </a>
                        Utilizado por atendentes/garçons para registrar pedidos de forma prática e ágil. O aplicativo é multiplataforma e foi desenvolvido com React Native/Expo.
                    </li>
                </ul>

                Utilizando TypeScript de forma consistente em todas as frentes (back-end, painel web e aplicativo mobile) para garantir tipagem e qualidade do código, o sistema foi pensado para otimizar o fluxo de trabalho, melhorar o atendimento e centralizar a gestão do estabelecimento.
            </>),
            en: (<>
                <strong>Complete web and mobile</strong> ecosystem developed for managing a delicatessen. The solution is composed of three integrated applications:
              
                <ul>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-back-end" target="_blank" rel="noopener noreferrer">
                            <strong>Back-end API: </strong> 
                        </a>
                        Built with Node.js/Express and PostgreSQL/Prisma, responsible for business logic, authentication, and centralized data management.
                    </li>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-front-end" target="_blank" rel="noopener noreferrer">
                            <strong>Front-end (web dashboard): </strong> 
                        </a>
                        Administrative interface for managing products, categories, and real-time order tracking. Developed using Next.js/Tailwind.
                    </li>
                    <li>
                        <a href="https://github.com/Antonio-Savio/Arte-del-Gusto-mobile" target="_blank" rel="noopener noreferrer">
                            <strong>Mobile application: </strong> 
                        </a>    
                        Used by attendants/waiters to quickly and easily register orders. The app is multiplatform and was developed with React Native/Expo.
                    </li>
                </ul>
              
                Using TypeScript consistently through all fronts (back-end, web panel and mobile application) to ensure typing and code quality, the system was designed to optimize workflow, enhance customer service, and centralize business management.
              </>)
        },
        techs: [<SiNodedotjs/>, <SiExpress/>, <SiNextdotjs/>, <SiTypescript/>, <SiPostgresql/>, <SiPrisma/>, <SiTailwindcss/>, <SiReact/>, <SiExpo/>],
        deploy: "https://artedelgustodelicatessen.vercel.app",
        repo: "https://github.com/Antonio-Savio/Arte-del-Gusto-front-end"
    },

    {
        first_frame: AdvFrame,
        imgSrc: AdvGif,
        title: {
            pt: "Plataforma de Gestão Jurídica",
            en: "Plataforma de Gestão Jurídica"
        },
        description: {
            pt: <>
                AdvControl é uma aplicação web <strong>full-stack</strong> desenvolvida para otimizar o fluxo de trabalho de advogados. Utiliza Next.js no front-end e back-end (API routes), com MongoDB e Prisma para persistência de dados, e NextAuth.js para <strong>login social com o Google</strong>. Entre as funcionalidades, destacam-se:
                <ul>
                    <li>Cadastro e gerenciamento de dados de clientes e demandas jurídicas.</li>
                    <li>Atualização de status processuais de forma prática e organizada.</li>
                    <li>Filtros avançados (por status, categoria e prazo) para facilitar a busca por processos.</li>
                    <li>Segurança garantida com autenticação e rotas protegidas.</li>
                </ul>
          </>
          ,
            en: <>
                AdvControl is a <strong>full-stack</strong> web application developed to optimize the workflow of lawyers. It uses Next.js for both front-end and back-end (API routes), with MongoDB and Prisma for data persistence, and NextAuth.js for <strong>Google social login</strong>. Key features include:
                <ul>
                    <li>Registration and management of client data and legal cases.</li>
                    <li>Efficient updating of case status in an organized manner.</li>
                    <li>Advanced filters (by status, category and deadline) to easily search for legal processes.</li>
                    <li>Data security through authentication and protected routes.</li>
                </ul>
          </>          
        },
        techs: [<SiNextdotjs/>, <SiTypescript/>, <SiMongodb/>, <SiPrisma/>, <SiTailwindcss/>],
        deploy: "https://advcontrol.vercel.app",
        repo: "https://github.com/Antonio-Savio/advControl"
    },

    {
        first_frame: GatinhosFrame,
        imgSrc: GatinhosGif,
        title: {
            pt: "Website para Projeto Voluntário",
            en: "Website for Volunteer Project"
        },
        description: {
            pt: <>
                Projeto freelance sem fins lucrativos para apoiar uma iniciativa voluntária, o
                <a href="https://www.instagram.com/gatinhoscajueiros" target="_blank" rel="noopener noreferrer">
                    <strong> Gatinhos Cajueiros</strong>
                </a>, que visa a alimentação, castração e adoção de gatos. O site é totalmente gerenciável por meio de um <strong>Sistema para Gerenciamento de Conteúdo (CMS)</strong>. Foi desenvolvido com Next.js, TypeScript e a API do Cosmic CMS, com foco em performance e manutenibilidade. Outros destaques:
                <ul>
                    <li><strong>Responsivo:</strong> Layout adaptável com menu hambúrguer em dispositivos móveis.</li>
                    <li><strong>SEO otimizado:</strong> Uso de metadados dinâmicos via Next.js para melhor indexação.</li>
                    <li><strong>Testes unitários:</strong> Implementados com React Testing Library para garantir estabilidade das funcionalidades.</li>
                    <li><strong>Geração Estática (SSG):</strong> Páginas geradas estaticamente com revalidação automática após um intervalo definido.</li>
                </ul>
            </>,
            en: (<>
                Nonprofit freelance project developed to support a volunteer initiative, 
                <a href="https://www.instagram.com/gatinhoscajueiros" target="_blank" rel="noopener noreferrer">
                    <strong> Gatinhos Cajueiros</strong>
                </a>, 
                which focuses on feeding, neutering, and helping cats get adopted. The website is fully manageable by a <strong>Content Management System (CMS)</strong>. It was built using Next.js, TypeScript, and the Cosmic CMS API, with a focus on performance and maintainability. Another highlights:
                <ul>
                    <li><strong>Responsive design:</strong> Adaptive layout with a hamburger menu for mobile devices.</li>
                    <li><strong>SEO optimized:</strong> Dynamic metadata implementation using Next.js for better indexing.</li>
                    <li><strong>Unit testing:</strong> Ensured through React Testing Library to maintain functional reliability.</li>
                    <li><strong>Static Site Generation (SSG):</strong> Pages are statically generated with automatic revalidation after a defined interval.</li>
                </ul>
            </>)
              
        },
        techs: [<SiNextdotjs/>, <SiTypescript/>, <SiCss3/>, <SiJest/>],
        deploy: "https://gatinhos-cajueiros.vercel.app",
        repo: "https://github.com/Antonio-Savio/gatinhosCajueiros"
    },

    {
        first_frame: WebImoveisFrame,
        imgSrc: WebImoveisGif,
        title: {
            pt: "WebImóveis: Marketplace Imobiliário",
            en: "WebImóveis: Real Estate Marketplace"
        },
        description: {
            pt: <>
                Plataforma <strong>marketplace full-stack</strong> desenvolvida em React e Firebase, onde você pode encontrar um imóvel, ou anunciar o seu para venda ou aluguel. Destaques da aplicação:
                <ul>
                    <li><strong>Filtros avançados:</strong> Permite busca por cidade com filtros intuitivos (Aluguel/Venda, Nº de Quartos, Banheiros, Vagas, Faixa de Preço).</li>
                    <li><strong>Página de Detalhes Imersiva:</strong> Exibe um slider de imagens do imóvel e link direto para contato com o proprietário via WhatsApp.</li>
                    <li><strong>Dashboard Exclusivo:</strong> Acesso restrito a usuários autenticados para cadastro, gerenciamento (exclusão) de seus próprios anúncios.</li>
                    <li><strong>Formulário Robusto:</strong> Página completa para cadastro de imóveis, com múltiplos inputs, validações, máscaras para valores monetários e telefones, além de upload de imagens (JPG/PNG).</li>
                    <li><strong>Infraestrutura back-end:</strong> Utilização do Firebase <i>Authentication</i> para login e cadastro de usuários, <i>Storage</i> para armazenar imagens dos imóveis e <i>Firestore</i> como banco de dados NoSQL.</li>
                </ul>
            </>
          ,
            en: <>
                <strong>Full-stack marketplace</strong> platform developed in React and Firebase, where you can find a real estate, or advertise yours for sale or rent. Application highlights:
                <ul>
                    <li><strong>Advanced Filters:</strong> Enables search by city combined with intuitive filters (Rent/Sale, Number of Bedrooms, Bathrooms, Parking Spaces, Price Range).</li>
                    <li><strong>Immersive Property Page:</strong> Features an image slider and a direct contact link to the property owner via WhatsApp.</li>
                    <li><strong>Exclusive Dashboard:</strong> Only authenticated users can access the admin panel to create and manage (delete) their own listings.</li>
                    <li><strong>Robust Form:</strong> A complete property registration page with multiple inputs, validations, monetary and phone masks, and image upload support (JPG/PNG).</li>
                    <li><strong>Back-end Infrastructure:</strong> Uses Firebase <i>Authentication</i> for user login and registration, <i>Storage</i> for property image hosting, and <i>Firestore</i> as a NoSQL database.</li>
                </ul>
          </>
          
        },
        techs: [<SiReact/>, <SiTypescript/>, <SiTailwindcss/>, <IoLogoFirebase/>],
        deploy: "https://webimoveis.vercel.app",
        repo: "https://github.com/Antonio-Savio/WebImoveis"
    },

    {
        first_frame: PopcornFrame,
        imgSrc: PopcornguideGif,
        title: {
            pt: "Plataforma de filmes",
            en: "Movies Website"
        },
        description: {
            pt: (<>
                PopcornGuide é uma <strong>Plataforma web interativa</strong> desenvolvida para explorar filmes em destaque, construída com Next.js e Tailwind CSS. Funcionalidades incluem:
                <ul>
                    <li><strong>Consumo de API</strong> externa (TMDB) para listagem dinâmica de filmes.</li>
                    <li><strong>Autenticação social</strong> (Google/Twitter via NextAuth.js) para salvar e gerenciar listas de filmes favoritos.</li>
                    <li><strong>Salvar em favoritos:</strong> usuários autenticados podem adicionar filmes na lista de favoritos. O armazenamento foi feito pelo Firebase <i>Firestore</i>.</li>
                    <li><strong>Paginação</strong> eficiente (20 filmes por página) para navegação otimizada.</li>
                    <li><strong>Busca por título</strong> para encontrar filmes específicos rapidamente.</li>
                    <li><strong>SEO otimizado</strong> com uso de metadados dinâmicos para melhor ranquamento nos motores de busca.</li>
                </ul>
            </>),
            en: (<>
                PopcornGuide is an <strong>Interactive web platform</strong> developed for exploring trending movies, built with Next.js and Tailwind CSS. Features include:
                <ul>
                    <li><strong>Consumption of external API</strong> (TMDB) for dynamic movie listings.</li>
                    <li><strong>Social authentication</strong> (Google/Twitter via NextAuth.js) allowing users to save and manage favorite movie lists.</li>
                    <li><strong>Save to Favorites:</strong> Authenticated users can add movies to their favorites list. Storage is done by Firebase <i>Firestore</i>.</li>
                    <li>Efficient <strong>pagination</strong> (20 movies per page) for optimized browsing.</li>
                    <li><strong>Title search</strong> functionality to quickly find specific movies.</li>
                    <li><strong>SEO optimized</strong> with the use of dynamic metadata for better ranking in search engines.</li>
                </ul>
            </>)
        },
        techs: [<SiNextdotjs/>, <SiTypescript/>, <IoLogoFirebase/>, <SiTailwindcss/>],
        deploy: "https://popcorn-guide.vercel.app",
        repo: "https://github.com/Antonio-Savio/PopcornGuide"
    },
    
    {
        first_frame: CriptoFrame,
        imgSrc: CriptoGif,
        title: {
            pt: "Criptoapp: Rastreador de Mercado de Criptomoedas",
            en: "Criptoapp: Cryptocurrency Market Tracker"
        },
        description: {
            pt: "Aplicação front-end em React para visualização de dados do mercado de criptomoedas. Consome API externa para exibir informações em tabela, com funcionalidades interativas de ordenação (por valor de mercado, preço, variação 24h, volume) e busca por nome.",
            en: "A front-end application built with React for visualizing cryptocurrency market data. Consumes an external API to display information in a table format, featuring interactive sorting (by market cap, price, 24h change, volume) and search-by-name functionalities."
        },
        techs: [<SiReact/>, <SiTypescript/>, <SiCss3/>],
        deploy: "https://criptoapp-ten.vercel.app/",
        repo: "https://github.com/Antonio-Savio/criptoapp"
    },
    
    {
        first_frame: WeatherFrame,
        imgSrc: WeatherGif,
        title: {
            pt: "Aplicativo Web de Clima",
            en: "Weather Web App"
        },
        description: {
            pt: "Aplicação React que consome a API OpenWeather para fornecer dados meteorológicos. Permite ao usuário pesquisar por localidade (cidade, estado, país) e exibe condições atuais, previsão por intervalos de 3 horas e opção de alternar unidades de temperatura (Celsius/Fahrenheit).",
            en: "A React application consuming the OpenWeather API to provide meteorological data. Allows users to search by location (city, state, country) and displays current conditions, 3-hour interval forecasts, and an option to toggle temperature units (Celsius/Fahrenheit)."
        },
        techs: [<SiReact/>, <SiTailwindcss/>],
        deploy: "https://weather-web-app-black-three.vercel.app/",
        repo: "https://github.com/Antonio-Savio/weather-web-app"
    },

    {
        first_frame: SushiFrame,
        imgSrc: SushiGif,
        title: {
            pt: "Landing Page",
            en: "Landing Page"
        },
        description: {
            pt: "Desenvolvimento de uma landing page responsiva e visualmente atraente para um restaurante de sushi, utilizando React e Styled Components. Inclui design adaptável para dispositivos móveis (com menu hambúrguer) e integração com a Google Maps API para exibição da localização.",
            en: "Developed a responsive and visually appealing landing page for a sushi restaurant using React and Styled Components. Features an adaptive design for mobile devices (with a hamburger menu) and integration with the Google Maps API for location display."
        },
        techs: [<SiReact/>, <SiStyledcomponents/>],
        deploy: "https://sushi-restaurant-olive.vercel.app/",
        repo: "https://github.com/Antonio-Savio/sushi-restaurant"
    },

    {
        first_frame: PokedexFrame,
        imgSrc: PokedexGif,
        title: {
            pt: "Pokédex",
            en: "Pokédex"
        },
        description: {
            pt: "Implementação de uma Pokédex responsiva utilizando React e Styled Components. Consome a PokéAPI para listar Pokémons com carregamento dinâmico ('load more'), filtragem por tipo, navegação para páginas de detalhes individuais e funcionalidade de tema claro/escuro.",
            en: "Implementation of a responsive Pokédex using React and Styled Components. Consumes the PokéAPI to list Pokémon with dynamic loading ('load more'), type filtering, navigation to individual detail pages, and light/dark theme functionality."
        },
        techs: [<SiReact/>, <SiStyledcomponents/>],
        deploy: "https://pokedex-query.vercel.app/",
        repo: "https://github.com/Antonio-Savio/Pokedex-Query"
    },
]

export default projects;