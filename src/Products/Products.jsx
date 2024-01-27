import React from 'react'
import './Products.css'
import Card from '../components/Card'

function Products({result}) {
  
  const CardElement = result.map(product => {
    return <Card key={product.id} img={product.img} title={product.title} prevPrice={product.prevPrice} newPrice={product.newPrice} reviews={product.reviews}/>
  })
  return (
    <section className="card-container">
      {CardElement}
    </section>
  )
}

export default Products
