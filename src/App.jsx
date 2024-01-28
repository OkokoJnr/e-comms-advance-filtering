import { useState } from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import './SideBar/SideBar'
import SideBar from './SideBar/SideBar'

//Database
import data from './db/data'

function App() {

  const [selectedCategory, setSelectedCategory] = useState('')
  const [query, setQuery] = useState('')

  const handleInputChange = event =>{
    setQuery(event.target.value)
  }

  const filteredItems = data.filter(product=> {
    return (product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() ) !== -1)
  })
  
  //Radio Filter
  const handleChangeCategory = event =>{
    setSelectedCategory(event.target.value)
  }

  //Button Filter
  const handleRecommendationBtn = event =>{
    console.log(event.target.value)
    setQuery(event.target.value)
  } 

  function fetchData(product, selected, query){
    let filteredProducts = product
    if(query){
      filteredProducts = filteredItems
    }
    if(selected){
      filteredProducts = filteredItems.filter(({color, newPrice, category, company, title})=> color === selected || newPrice === selected || category === selected || company === selected || title===selected
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
