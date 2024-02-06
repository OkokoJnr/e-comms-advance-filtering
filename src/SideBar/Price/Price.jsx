import React from 'react'
import './Price.css'
import Input from '../../components/Input'
function Price({onChangeCategory}) {
  return (
    <section >
      <h2 className="price-title title">Price</h2>
      <div className="sidebar-items">
        <Input category={'All'} name={'price'} value={''} onChangeCategory={onChangeCategory}/>
        <Input category={'$0-$50'} name={'price'} value={'50'} onChangeCategory={onChangeCategory}/>
        <Input category={'$50-100'} name={'price'} value={'100'} onChangeCategory={onChangeCategory}/>
        <Input category={'$100-$150'} name={'price'} value={'150'} onChangeCategory={onChangeCategory}/>
        <Input category={'$150-$200'} name={'price'} value={'200'} onChangeCategory={onChangeCategory}/>
      </div>
    </section>
  )
}

export default Price
