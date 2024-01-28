import React from 'react'
import './Category.css'
import Input from '../../components/Input'

function Category({onChangeCategory}) {
  console.log('oc')
  return (
    <section>
      <h2 className="category-title title">Category</h2>
      <div className='sidebar-items'>
        <Input category='All' name={'test'} value={''} onChangeCategory={onChangeCategory}/>      
        <Input category='Sneakers' name={'test'} value={'sneakers'} onChangeCategory={onChangeCategory}/>      
        <Input category='Flats' name={'test'} value={'flats'} onChangeCategory={onChangeCategory}/>      
        <Input category='Sandals' name={'test'} value={'sandals'} onChangeCategory={onChangeCategory}/>      
        <Input category='Heels' name={'test'} value={'heels'} onChangeCategory={onChangeCategory}/>      
      </div>
    </section>
  )
}

export default Category
