import React from 'react'

const Product = () => {
  return (
    <div className='bg-dark py-5'>
     <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <div className='card shadow brder-info'>
            <div className='card-body'>
               <h3>Prodcut Name</h3>
               <p>Lorem ipsum dolor sit amet.</p>
               <button className='btn btn-info'>Read More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <div className='card shadow brder-info'>
            <div className='card-body'>
               <h3>Prodcut Name</h3>
               <p>Lorem ipsum dolor sit amet.</p>
               <button className='btn btn-info'>Read More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
          <div className='card shadow brder-info'>
            <div className='card-body'>
               <h3>Prodcut Name</h3>
               <p>Lorem ipsum dolor sit amet.</p>
               <button className='btn btn-info'>Read More</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Product