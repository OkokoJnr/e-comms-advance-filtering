import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Category() {
  return (
    <section>
      <h2 className="color-title title">Colors</h2>
      <div className='sidebar-items'>
        <Input category={'All'}/>
        </div>
    </section>
  )
}

export default Category
