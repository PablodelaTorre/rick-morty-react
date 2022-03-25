import React from 'react'
import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonajes}) => {
    
    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })

    const {nombre} = inputs

    const handleSubmit = e => {
        e.preventDefault()
        if (!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'No puede enviarse el formulario vacío',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
        setNombrePersonajes(nombre.trim().toLowerCase())
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
            <input className='form-control my-3' value={nombre} name="nombre" onChange={handleChange} type="text" placeholder='Ingrese un personaje' />
            <button type='submit' className='btn btn-info'>Buscar</button>
        </form>
    )
}

export default Formulario