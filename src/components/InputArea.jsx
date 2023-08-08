import React from 'react'

const InputArea = ({placeholder , type , value , setState , required , errors}) => {
  console.log(errors)
  return (
    <div className="input-area">
        <input type={type} placeholder={placeholder} value={value} onChange={setState} required={required}/>
        {errors && <span>{errors}</span> }
    </div>
  )
}

export default InputArea