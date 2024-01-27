import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillBagHeartFill} from 'react-icons/bs'

function Card({title, img, reviews, prevPrice, newPrice }) {
  return (
    <>
      <div className="card">
        <img src={img} alt="shoe" className='card-img'/>
        <div className="card-details">
          <h2 className='card-title'>{title}</h2>
          <div className="card-reviews">
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <AiFillStar className='ratings-star'/>
            <span className='total-reviews'>{reviews}</span>
          </div>
          
          <div className="card-price">
             <div className="price">
              <del>{prevPrice}</del> ${newPrice}
             </div>
             <div className="bag">
              <BsFillBagHeartFill/>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
