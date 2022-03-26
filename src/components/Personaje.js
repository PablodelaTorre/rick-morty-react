import React from 'react'

const Personaje = ({personaje}) => {

    const {name, species, image, status} = personaje

    return (
        <div className='col-md-4 my-2'>
            <div className='card'>
                <img src={image} alt={`imagen-${name}`} className='card-img-top'/>
                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <p className='fw-bold fs-3'>{name}</p>
                    <p className='fw-bold fs-5 text-info'>{species}</p>
                    <p className='fw-bold fs-5 text-success'>{status}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Personaje