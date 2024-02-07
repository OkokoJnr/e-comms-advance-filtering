import React from 'react'
import './Products.css'
import Card from '../components/Card'

function Products({result, selectedCategory, query}) {
  const CardElement = result.map(product => {
    return <Card key={product.id} img={product.img} title={product.title} prevPrice={product.prevPrice} newPrice={product.newPrice} reviews={product.reviews}/>
  })
  return (
    <section className='products-container'>
      <h3 className='selection-description' style={{color:`${selectedCategory.color !== 'white' ? selectedCategory.color:''}`}}>{result.length} Product matches this description: {`${query ? query +' products: ' :''}`} {`${selectedCategory.price? '$'+ selectedCategory.price : '' }`} {selectedCategory.color} {selectedCategory.type} </h3>
      <div className="card-container">
      {CardElement}
      </div>
    </section>
  )
}

export default Products
