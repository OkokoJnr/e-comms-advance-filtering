import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category() {
  return (
    <section>
      <h2 className="category-title title">Category</h2>
      <div className='sidebar-items'>
        <Input category='All' name={'test'}/>      
      </div>
    </section>
  )
}

export default Category
