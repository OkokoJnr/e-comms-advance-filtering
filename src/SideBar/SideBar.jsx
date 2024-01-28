import React from 'react'
import Price from './Price/Price'
import Colors from './Colors/Colors'

import Category from './Category/Category'
import './SideBar.css' 

function SideBar({onChangeCategory}) {
  
  return (
    <section className='sidebar'>
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category onChangeCategory={onChangeCategory}/>
      <Colors/>
      <Price/>
    </section>
  )
}

export default SideBar
