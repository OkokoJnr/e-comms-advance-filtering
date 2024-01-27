import React from 'react'
import Price from './Price/Price'
import Colors from './Colors/Colors'

import Category from './Category/Category'
import './SideBar.css' 

function SideBar() {
  return (
    <section className='sidebar'>
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category/>
      <Colors/>
      <Price/>
    </section>
  )
}

export default SideBar
