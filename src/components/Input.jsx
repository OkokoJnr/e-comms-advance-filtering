import React from 'react'

function Input({name, category}) {
  return (
    <>
      <label className="sidebar-label-container">
          <input type="radio" name={name} id="" />
          <span className="checkmark"></span>{category}
        </label>
    </>
  )
}

export default Input
