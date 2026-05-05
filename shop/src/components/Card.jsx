import React from 'react'

const Card = ({product}) => {
  return (
    <div>
     <div className='card shdoaw'>
            <img src={product.image} />
            <div className='card-body'>
              <h2>{product.title}</h2>
              <b>{product.price}</b>
              <p>{product.dis}</p>
            </div>
           </div>
    </div>
  )
}

export default Card