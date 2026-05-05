import React from 'react'
import Card from './Card'

const Home = () => {

 const product = [
  {
   id:1,
   title:"Essence Mascara Lash Princess",
   price:50,
   dis:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   image:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
   id:2,
   title:"Essence Mascara Lash Princess",
   price:100,
   dis:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   image:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
   id:3,
   title:"Essence Mascara Lash Princess",
   price:150,
   dis:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   image:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
   id:4,
   title:"Essence Mascara Lash Princess",
   price:200,
   dis:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   image:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  {
   id:5,
   title:"Essence Mascara Lash Princess",
   price:50,
   dis:"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
   image:"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  }
 ]

  return (
    <>
     <div className='container py-5'>
      <div className='row'>
       <h1>Homé Component</h1>
      </div>
      <div className='mt-5 row'>
        {
         product.map((p)=>(
          <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
           <Card product={p} />
          </div>
         ))
        }
      </div>
     </div>
    </>

  )
}

export default Home

