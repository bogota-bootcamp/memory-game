import React from 'react';

function MemoryCard(props){

  return (
    <div>
      <img className="my-card"
      onClick={props.onClick}
      src={props.cardback ? 'back.png' :props.face} />
      <p>{props.position}</p>
    </div>
  )
}

export default MemoryCard;
