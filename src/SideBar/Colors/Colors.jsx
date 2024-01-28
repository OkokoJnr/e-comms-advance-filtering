import React from 'react'
import './Colors.css'
import Input from '../../components/Input'

function Category({onChangeCategory}) {
  return (
    <section>
      <h2 className="color-title title">Colors</h2>
      <div className='sidebar-items'>
        <Input category={'All'} name={'test1'} value={''}  onChangeCategory={onChangeCategory}/>
        <Input category={'Red'} name={'test1'} value={'red'} onChangeCategory={onChangeCategory}/>
        <Input category={'Blue'} name={'test1'} value={'blue'} onChangeCategory={onChangeCategory}/>
        <Input category={'Green'} name={'test1'} value={'green'} onChangeCategory={onChangeCategory}/>
        <Input category={'Black'} name={'test1'} value={'black'} onChangeCategory={onChangeCategory}/>
        <Input category={'White'} name={'test1'} value={'white'} onChangeCategory={onChangeCategory}/>
        </div>
    </section>
  )
}

export default Category
