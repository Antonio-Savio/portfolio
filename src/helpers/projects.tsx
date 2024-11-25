import { SiReact, SiTypescript, SiCss3, SiTailwindcss, SiStyledcomponents, SiFirebase } from "react-icons/si";
import WeatherGif from '../assets/desktop-weather.gif'
import PokedexGif from '../assets/desktop-pokedex.gif'
import CriptoGif from '../assets/desktop-version-cripto.gif'
import SushiGif from '../assets/desktop-version-sushi.gif'
import WebImoveisGif from '../assets/WebImoveis-gif.gif'

interface Translations{
    pt: string;
    en: string;
}

export interface Projects{
    imgSrc: string;
    title: Translations;
    description: Translations;
    techs: JSX.Element[];
    deploy: string;
    repo: string;
}

const projects: Projects[] = [
    {
        imgSrc: WebImoveisGif,
        title: {
            pt: "WebImóveis",
            en: "WebImóveis"
        },
        description: {
            pt: "WebImóveis é uma plataforma onde você pode encontrar o seu imóvel ideal, ou publicar seu imóvel para venda ou aluguel. Use os filtros para encontrar apartamentos e casas em sua cidade. Você pode navegar até a página de detalhes e entrar em contato com o proprietário por um link do WhatsApp. Apenas usuários registrados podem acessar o painel e publicar imóveis para venda/aluguel.",
            en: "WebImóveis is a platform where you can either find an ideal property for you, or publish your property for sale or rent. Use the filters to find apartaments and houses in your city. You can browse to the details page and contact the owner by a WhatsApp link. Only registered users are able to access dashboard and publish sale/rent property."
        },
        techs: [<SiReact/>, <SiTypescript/>, <SiTailwindcss/>, <SiFirebase/>],
        deploy: "https://webimoveis.vercel.app",
        repo: "https://github.com/Antonio-Savio/WebImoveis"
    },
    
    {
        imgSrc: CriptoGif,
        title: {
            pt: "Criptoapp",
            en: "Cryptoapp"
        },
        description: {
            pt: "Site que exibe informações sobre criptomoedas em formato de tabela. Permite ordenar por valor de mercado, preço em dólares, variação em 24 horas, e volume negociado, além de pesquisar por criptomoedas específicas.",
            en: "A website that displays information about cryptocurrencies in a table format. Allows sorting by market value, price in dollars, 24-hour variation, and traded volume, as well as searching for specific cryptocurrencies."
        },
        techs: [<SiReact/>, <SiTypescript/>, <SiCss3/>],
        deploy: "https://criptoapp-ten.vercel.app/",
        repo: "https://github.com/Antonio-Savio/criptoapp"
    },
    
    {
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