import React from 'react'

const Input = ({
    className = "",
    type = "",
    placeholder = "",
    value = "",
    onChange = () => {},
    onClick = () => {},

}) => {
  return (
    <div>
        <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} onClick={onClick}/>
    </div>
  )
}

export default Input