import React from 'react'

function Input({name, category, value, onChangeCategory}) {

  return (
    <>
      <label className="sidebar-label-container">
          <input type="radio" name={name} value={value} id="" onClick={onChangeCategory}/>
          <span className="checkmark"></span>{category}
        </label>
    </>
  )
}

export default Input
