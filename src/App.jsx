/* Copyright (C), 2023-2024, Sara Echeverria (bl33h)
     @author Sara Echeverria
     FileName: App.jsx
     @version: I
     Creation: 28/03/2023
     Last modification: 01/05/2023 */

import React from 'react'
import Logo from './components/Logo'
import { Textdesc, Textdescparagraph } from './components/Textdesc'
import './App.css'
import './components/CheckItem.css'
import CheckItem from './components/CheckItem'
import InfoCards from './components/InfoCards'
import Button from './components/Button'
import Input from './components/Input'
import './components/fondo.css'

function App() {
  return (
    <div className="App">
      <div className="fondoup">
        <div className="logo">
          <Logo />
        </div>
        <Input />
        <Textdesc className="textdesc">
          ¿Cansado de que te rastreen? Podemos ayudar.
        </Textdesc>
        <Textdescparagraph className="textdesc">
          Obtén protección de privacidad en tu navegador sin interrupciones
          gratis con una descarga:
        </Textdescparagraph>
        <CheckItem />
        <Button className="blue">Añadir DuckDuckGo a Chrome</Button>
        <Textdescparagraph className="textdescpar">
          ¡Con la confianza de decenas de millones de personas en todo el mundo!
        </Textdescparagraph>
        <Textdesc className="textdesc">
          Protección de la Privacidad para Cualquier Dispositivo
        </Textdesc>

        <svg
          className="curva"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 134"
        >
          <path
            d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="fondodown">
        <InfoCards />
        <Textdesc className="textD" style={{ color: '#ffffff' }}>
          No almacenamos tu
          <br />
          información personal. Nunca.
        </Textdesc>
        <Textdescparagraph className="textD">
          Nuestra política de privacidad es simple: No colectamos
          <br />
          o compartimos ninguna información personal tuya.
        </Textdescparagraph>
        <Button className="orange">Instalar DuckDuckGo</Button>
      </div>
    </div>
  )
}

export default App
