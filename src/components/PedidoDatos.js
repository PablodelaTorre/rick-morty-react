import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import Personaje from './Personaje'
import Loading from './Loading'

const PedidoDatos = ({nombrePersonajes}) => {

    const [personajes, setPersonajes] = useState([])

    const [loading, setLoading] = useState(false)

    const consumirApi = async(nombre) => {
        setLoading(true)
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            if (!res.ok){
                return Swal.fire({
                    title: 'Error!',
                    text: `No existe ${nombre}`,
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
            setLoading(false)
        }
    }

    useEffect(() => {
        consumirApi(nombrePersonajes)
    }, [nombrePersonajes])


    if(loading){
        return <Loading/>
    } else{
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

    
}

export default PedidoDatos