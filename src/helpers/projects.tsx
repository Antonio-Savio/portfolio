import { SiReact, SiTypescript, SiCss3, SiTailwindcss, SiStyledcomponents, SiVite } from "react-icons/si";
import WeatherGif from '../assets/desktop-weather.gif'
import PokedexGif from '../assets/desktop-pokedex.gif'
import CriptoGif from '../assets/desktop-version-cripto.gif'
import SushiGif from '../assets/desktop-version-sushi.gif'

interface Translations{
    pt: string;
    en: string;
}

interface Projects{
    id: number;
    imgSrc: string;
    title: Translations;
    description: Translations;
    techs: JSX.Element[];
    deploy: string;
    repo: string;
}

const projects: Projects[] = [
    {
        id: 1,
        imgSrc: CriptoGif,
        title: {
            pt: "Criptoapp",
            en: "Cryptoapp"
        },
        description: {
            pt: "Site que exibe informações sobre criptomoedas em formato de tabela. Permite ordenar por valor de mercado, preço em dólares, variação em 24 horas, e volume negociado, além de pesquisar por criptomoedas específicas.",
            en: "A website that displays information about cryptocurrencies in a table format. Allows sorting by market value, price in dollars, 24-hour variation, and traded volume, as well as searching for specific cryptocurrencies."
        },
        techs: [<SiReact/>, <SiTypescript/>, <SiCss3/>, <SiVite/>],
        deploy: "https://criptoapp-ten.vercel.app/",
        repo: "https://github.com/Antonio-Savio/criptoapp"
    },
    
    {
        id: 2,
        imgSrc: WeatherGif,
        title: {
            pt: "Aplicativo de Clima",
            en: "Weather App"
        },
        description: {
            pt: "Aplicação capaz de pesquisar uma cidade, estado, ou país e exibir os dados climáticos atuais, a previsão em um intervalo de 3 horas e alternar temperatura entre Celsius e Fahrenheit.",
            en: "An application that can search for a city, state, or country and display current weather data, a 3-hour forecast, and toggle temperature between Celsius and Fahrenheit."
        },
        techs: [<SiReact/>, <SiTailwindcss/>],
        deploy: "https://weather-web-app-black-three.vercel.app/",
        repo: "https://github.com/Antonio-Savio/weather-web-app"
    },

    {
        id: 3,
        imgSrc: PokedexGif,
        title: {
            pt: "Pokédex",
            en: "Pokédex"
        },
        description: {
            pt: "Aplicação web responsiva para listagem de Pokémons, com filtro de tipos, botão para exibir mais 10 personagens, página interna de detalhes e modo escuro.",
            en: "A responsive web application for listing Pokémon, with type filtering, a button to load 10 more characters, detailed internal pages, and a dark mode."
        },
        techs: [<SiReact/>, <SiStyledcomponents/>],
        deploy: "https://pokedex-query.vercel.app/",
        repo: "https://github.com/Antonio-Savio/Pokedex-Query"
    },

    {
        id: 4,
        imgSrc: SushiGif,
        title: {
            pt: "Landing Page",
            en: "Landing Page"
        },
        description: {
            pt: "Página responsiva com menu hambúrguer na versão mobile e integração com Google Maps API.",
            en: "A responsive page with a hamburger menu in the mobile version and integration with the Google Maps API."
        },
        techs: [<SiReact/>, <SiStyledcomponents/>],
        deploy: "https://sushi-restaurant-olive.vercel.app/",
        repo: "https://github.com/Antonio-Savio/sushi-restaurant"
    },
]

export default projects;