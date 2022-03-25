import React from 'react'
import { useFormulario } from '../hooks/useFormulario'

const Formulario = () => {
    
    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    const {nombre} = inputs

    const handleSubmit = e => {
        e.preventDefault()

        reset()
    }
    
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-content-center">
            <input className='form-control my-3' value={nombre} name="nombre" onChange={handleChange} type="text" placeholder='Ingrese un personaje' />
            <button type='submit' className='btn btn-info'>Buscar</button>
        </form>
    )
}

export default Formulario