import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import PedidoDatos from './components/PedidoDatos'

const App = () => {

  const [nombrePersonajes, setNombrePersonajes] = useState("")


  return (
    <div className='container-fluid fondo'>
      <h1 className='titulo my-3 d-flex justify-content-center '>Rick and morty App</h1>
        <Formulario setNombrePersonajes={setNombrePersonajes}/>  
        <PedidoDatos nombrePersonajes={nombrePersonajes}/>
    </div>
  )
}

export default App


  