import React from 'react'

const Contact = () => {
  return (
    <div className='bg-light py-5'>
       <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-10 col-sm-12'>
           <h2 className='mb-4 text-center'>Contact </h2>
            <form className='bg-white rounded p-4 border-info shadow'>
             <div className='mb-3'>
               <label>Name</label>
               <input type='text' className='form-control' />
             </div>
             <div className='mb-3'>
               <label>Email</label>
               <input type='text' className='form-control' />
             </div>
             <div className='mb-3'>
               <label>Phone</label>
               <input type='text' className='form-control' />
             </div>
             <div className='mb-3'>
               <label>Message</label>
               <textarea rows='5' className='form-control'></textarea>
             </div>
             <button className='btn btn-info w-100'>Submit</button>
            </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Contact