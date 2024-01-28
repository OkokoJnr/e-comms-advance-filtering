import React from 'react'

function Input({name, category, value, onChangeCategory, color}) {

  return (
    <>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} id="" onClick={onChangeCategory}/>
          <span className="checkmark" style={{backgroundColor:color}}></span>{category}
        </label>
    </>
  )
}

export default Input
