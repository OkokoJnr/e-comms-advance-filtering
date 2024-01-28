import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Category({onChangeCategory}) {
  return (
    <section>
      <h2 className="color-title title">Colors</h2>
      <div className='sidebar-items'>  
      <label className="sidebar-label-container">
          <input type="radio" name={'test1'} value={''} id="" onClick={onChangeCategory}/>
          <span className="checkmark all" ></span>{'All'}
        </label>
        <Input category={'Red'} name={'test1'} value={'red'} onChangeCategory={onChangeCategory} color={'red'}/>
        <Input category={'Blue'} name={'test1'} value={'blue'} onChangeCategory={onChangeCategory} color={'blue'}/>
        <Input category={'Green'} name={'test1'} value={'green'} onChangeCategory={onChangeCategory} color={'green'}/>
        <Input category={'Black'} name={'test1'} value={'black'} onChangeCategory={onChangeCategory} color={'black'}/>
        <label className="sidebar-label-container">
          <input type="radio" name={'test1'} value={'white'} id="" onClick={onChangeCategory}/>
          <span className="checkmark black-checkmark" style={{backgroundColor:'white', border:'1px solid black'}}></span>{'White'}
        </label>
        </div>
    </section>
  )
}

export default Category
