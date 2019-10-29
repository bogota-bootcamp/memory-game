import React from 'react';


function MemoryCard(props){

  return (
    <img className="my-card"
    onClick={props.onClick}
    src={props.face} />
  )
}

export default MemoryCard;
