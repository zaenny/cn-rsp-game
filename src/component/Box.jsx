import React from 'react'

const Box = (props) => {
  return (
    <div className='box'> 
      <h1>{props.title}</h1>
      {props.item ? (<img className='item-img' src={props.item.img}></img>) : (<div className='item-img'></div>) }
      <h2>WIN</h2>
    </div>
  )
}

export default Box