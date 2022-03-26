import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import Personaje from './Personaje'

const PedidoDatos = ({nombrePersonajes}) => {

    const [personajes, setPersonajes] = useState([])

    const consumirApi = async(nombre) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            if (!res.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: 'No puede enviarse el formulario vacío',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
            const datos = await res.json()
            console.log(datos.results)
            setPersonajes(datos.results)
        } catch {
            console.log("error")
        } finally {

        }
    }

    useEffect(() => {
        consumirApi(nombrePersonajes)
    }, [nombrePersonajes])

    return (
        <div className='my-3 row'>
            {
                personajes.map( item => (
                    <Personaje key={item.id} personaje={item}/>
                ))
            }
        </div>
    )
}

export default PedidoDatos