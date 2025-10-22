import React from 'react'

const Box = (props) => {
    
    let result;
    if(props.title === "Computer" && props.result !== "TIE" && props.result !== "" ){
        result = (props.result === "WIN") ? "LOSE" : "WIN";
    }else{
        result = props.result;
    }

  return (
    <div className={`box ${result}`}> 
      <h1>{props.title}</h1>
      {props.item ? (<img className='item-img' src={props.item.img}></img>) : (<img className='item-img' src='/image/question.png'></img>) }
      <h2>{result}</h2>
    </div>
  )
}

export default Box