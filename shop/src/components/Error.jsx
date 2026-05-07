import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
       <div className='col-lg-6'>
          <div className='border border-danger p-5 shadow rounded'>
           <h1>Page Not Found</h1>
           <Link to="/">
            Go Back
           </Link>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Error