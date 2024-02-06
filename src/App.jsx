import React, { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import './SideBar/SideBar'
import SideBar from './SideBar/SideBar'

//Database
import data from './db/data'

function App() {

  const [selectedCategory, setSelectedCategory] = useState({color:'',type:'', price:''})
  const [query, setQuery] = useState('')

  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = data.filter(product=> {
    return (product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() ) !== -1)
  })
  
  //Radio Filter
  const handleChangeCategory = event =>{    
    setSelectedCategory( prev => {
      return {...prev, [event.target.name]:event.target.value,}
    })
  }
  //Button Filter
  const handleRecommendationBtn = event =>{
    setQuery(event.target.value)
  } 

  function fetchData(product, selected, query){
    let filteredProducts = [...product]
    if(query){
      filteredProducts = filteredItems
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({color, newPrice, category})=> {
      const colorMatch = !selected.color || color === selected.color;
      const priceMatch = !selected.price || newPrice === selected.price;
      const typeMatch = !selected.type || category === selected.type;
      return colorMatch && priceMatch && typeMatch;
      }

      ) 
    } 
    return filteredProducts

  }


  const result = fetchData(data, selectedCategory, query)
  return (
    <>
    <SideBar onChangeCategory={handleChangeCategory} />
    <Navigation handleInputChange={handleInputChange}/>
    <Recommended onClickHandler={handleRecommendationBtn}/>
    <Products result={result} />    
    </>
  )
}

export default App