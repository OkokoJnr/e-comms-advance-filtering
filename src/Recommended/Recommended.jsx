import React from 'react'
import './Recommended.css'
import Button from '../components/Button'

function Recommended({onClickHandler}) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={onClickHandler} title={'All Products'} value={''}/>
        <Button onClickHandler={onClickHandler} value={'Nike'} title={'Nike'}/>
        <Button onClickHandler={onClickHandler} value={'Adidas'} title={'Adidas'}/>
        <Button onClickHandler={onClickHandler} value={'Puma'} title={'Puma'}/>
        <Button onClickHandler={onClickHandler} value={'Vans'} title={'Vans'}/>
      </div>
    </div>
  )
}
 
export default Recommended
