import React, { useState } from 'react'
import Formulario from './components/Formulario'
import PedidoDatos from './components/PedidoDatos'

const App = () => {

  const [nombrePersonajes, setNombrePersonajes] = useState("")

  return (
    <div className='container'>
      <h1 className='titulo'>Rick and morty App</h1>
        <Formulario setNombrePersonajes={setNombrePersonajes}/>  
        <PedidoDatos setNombrePersonajes={setNombrePersonajes}/>
    </div>
  )
}

export default App
