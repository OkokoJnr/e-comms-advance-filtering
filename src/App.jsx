import { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Category from './SideBar/Category/Category'
import Colors from './SideBar/Colors/Colors'
import Price from './SideBar/Price/Price'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Products/>
    <Recommended/>
    <Category/>
    <Colors/>
    <Price/>
    
    </>
  )
}

export default App
