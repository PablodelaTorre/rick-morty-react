import React from 'react'

const Personaje = ({personaje}) => {

    const {name, species, image, status} = personaje

    return (
        <div className='col-sm-2 col-md-3 my-2'>
            <div className='card'>
                <img src={image} alt={`imagen-${name}`} className='card-img-top'/>
                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <p className='fw-bold fs-5'>{name}</p>
                    <p className='fw-bold fs-6 text-danger'>{species}</p>
                    <p className='fw-bold fs-6 text-success'>{status}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Personaje