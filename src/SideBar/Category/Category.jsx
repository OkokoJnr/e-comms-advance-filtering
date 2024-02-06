import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category({onChangeCategory}) {
  return (
    <section>
      <h2 className="category-title title">Category</h2>
      <div className='sidebar-items'>
        <Input category='All' name={'type'} value={''} onChangeCategory={onChangeCategory}/>      
        <Input category='Sneakers' name={'type'} value={'sneakers'} onChangeCategory={onChangeCategory}/>      
        <Input category='Flats' name={'type'} value={'flats'} onChangeCategory={onChangeCategory}/>      
        <Input category='Sandals' name={'type'} value={'sandals'} onChangeCategory={onChangeCategory}/>      
        <Input category='Heels' name={'type'} value={'heels'} onChangeCategory={onChangeCategory}/>      
      </div>
    </section>
  )
}

export default Category
