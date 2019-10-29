import React from 'react';



function Card (props){
  {let faces = {cara: "https://i.colnect.net/f/1175/001/1-Dollar-1-st-president-George-Washington-1789-1797-back.jpg",
              }
  let cardBack = "https://i.colnect.net/f/1175/004/1-Dollar-4-th-president-James-Madison-1809-1817.jpg"
  let face = faces[props.face]
  return(
    <img className="my_card" onClick={props.onClick}
    src={props.cardDown ? cardBack: face} />

    )
}
}
export default Card
