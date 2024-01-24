import React from 'react'
import './Products.css'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'
function Products() {
  return (
    <section className="card-container">
      <div className="card">
        <img src="https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg" alt="shoe" className='card-img'/>
        <div className="card-details">
          <h2 className='card-title'>Shoe</h2>
          <div className="card-reviews">
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <span className='total-reviews'>4</span>
          </div>
          
          <div className="card-price">
             <div className="price">
              <del>$300</del>    $200
             </div>
             <div className="bag">
              <BsFillBagHeartFill/>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
