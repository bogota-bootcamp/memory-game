import React from 'react';

function MemoryCard(props){

  return (
    <div>
      <img className="my-card"
      onClick={props.onClick}
      src={props.cardback ? 'back.png' :props.face} alt="" />
      <p>{/*props.position*/}</p>
    </div>
  )
}

export default MemoryCard;
