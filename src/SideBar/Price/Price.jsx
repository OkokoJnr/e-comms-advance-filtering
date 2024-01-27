import React from 'react'
import './Price.css'
import Input from '../../components/Input'
function Price() {
  return (
    <section >
      <h2 className="price-title title">Price</h2>
      <div className="sidebar-items">
        <Input category={'All'}/>
      </div>
    </section>
  )
}

export default Price
