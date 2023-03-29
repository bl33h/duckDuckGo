import React from 'react'
import './InfoCards.css'

const info_text= {
    card_1_info: 'Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una extensión de Chrome',
    card_2_info: 'Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en duckduckgo.com.',
    card_3_info: 'Nuestro navegador privado para móviles viene equipado con nuestro motor de búsqueda, bloqueador de rastreadores, mejora de encriptación y más. Disponible para iOS y Android.'
}

const Card = ({img, title, info}) => {
    return (
        <div className="info_card">
            <img src={img} alt="Laptop" className="img_card"/>
            <div className="card_title">{title}</div>
            <div className="card_info">{info}</div>
        </div>
    )
}

const InfoCards = () => {
    return (
        <div className="info_cards_cont">
            <Card img="src/assets/laptop.svg" title="Privacidad para Chrome" info={info_text.card_1_info}/>
            <Card img="src/assets/search.svg" title="Motor de Búsqueda Privada" info={info_text.card_2_info}/>
            <Card img="src/assets/mobile.svg" title="Navegador Privado" info={info_text.card_3_info}/>
        </div>
    )
}

export {InfoCards}