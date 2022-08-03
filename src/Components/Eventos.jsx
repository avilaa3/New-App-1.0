import React, {Fragment, useState} from 'react'
import { useEffect } from 'react'

const Eventos = () => {
    const text = 'Original text'

    const [texto, setTexto] = useState(text)
    //Timer to restart text
    useEffect(()=> {
      const timer = setTimeout(() => {
        setTexto(text);
      }, 1000);
      return () => clearTimeout(timer)
    }, [texto])


    const eventoClick = () => {
        console.log('You make a click on it');
        setTexto('El texto ha cambiado...')
    }
  return (
    <Fragment>
        <hr/>
        <h2>{ texto }</h2>
        <button onClick={ () => eventoClick() }>Click</button>
    </Fragment>
  )

}

export default Eventos
