import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Category({onChangeCategory, selectedCategory}) {
  return (
    <section>
      <h2 className="color-title title">Colors</h2>
      <div className='sidebar-items'>  
      <label className="sidebar-label-container">
          <input type="radio" name={'color'} value={''} id="" onClick={onChangeCategory}/>
          <span className="checkmark all" ></span>{'All'}
        </label>
        <Input category={'Red'} name={'color'} value={'red'} onChangeCategory={onChangeCategory} selectedCategory={selectedCategory} color={'red'}/>
        <Input category={'Blue'} name={'color'} value={'blue'} onChangeCategory={onChangeCategory} selectedCategory={selectedCategory} color={'blue'}/>
        <Input category={'Green'} name={'color'} value={'green'} onChangeCategory={onChangeCategory} selectedCategory={selectedCategory} color={'green'}/>
        <Input category={'Black'} name={'color'} value={'black'} onChangeCategory={onChangeCategory} selectedCategory={selectedCategory} color={'black'}/>
        <label className="sidebar-label-container">
          <input type="radio" name={'color'} value={'white'} id="" onClick={onChangeCategory}/>
          <span className="checkmark black-checkmark" style={{backgroundColor:'white', border:'1px solid black'}}></span>{'White'}
        </label>
        </div>
    </section>
  )
}

export default Category
