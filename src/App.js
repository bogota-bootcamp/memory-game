import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';

import styled from 'styled-components'




const MyContainer = styled.div`
margin: 0 1em;
border: 1px solid black
padding: 0.25em 1em;
display: flex;
float: left;
`

const Headline = styled.h2`
color purple;
background: gray;
`
const Stats = styled.ul`
border: 1px solid black;
text-align: right;
`



class Game extends React.Component{
  constructor(props){
    super(props)
    let shuffle = this.shuffle([])
    this.state = {

      // cardNames = ["moni.png","karlk.png","rein.png","maite.png","vale.png","seb.png","dev.png"]
      cards: [{face: "rein.png", down: true, position: shuffle[0]},
              {face: "maite.png", down: true, position: shuffle[1]},
              {face: "karl.png", down: true, position: shuffle[2]},
              {face: "moni.png", down: true, position: shuffle[3]},
              {face: "seb.png", down: true, position: shuffle[4]},
              {face: "val.png", down: true, position: shuffle[5]},
              {face: "oscar.png", down: true, position: shuffle[6]},
              {face: "devs.png", down: true, position: shuffle[7]},
              {face: "rein.png", down: true, position: shuffle[8]},
              {face: "maite.png", down: true, position: shuffle[9]},
              {face: "karl.png", down: true, position: shuffle[10]},
              {face: "val.png", down: true, position: shuffle[11]},
              {face: "oscar.png", down: true, position: shuffle[12]},
              {face: "moni.png", down: true, position: shuffle[13]},
              {face: "devs.png", down: true, position: shuffle[14]},
              {face: "seb.png", down: true, position: shuffle[15]}
      ],
       score: [0,0], isTurnPlayer1: true,
    }
  }

  flip(i){
    let copy = this.state.cards.slice();
    copy[i].down = !copy[i].down
    this.setState({
      cards: copy
    });
  }

  shuffle(x){
    let rand = Math.floor(Math.random() * 16)
    if(x.includes(rand)){this.shuffle(x)}
    else {x.push(rand)}
    if(x.length<16){this.shuffle(x)}
    return x;
  }

  render(){
    let cards = this.state.cards.map(
      (card, i) =>
      <MemoryCard
      key={i} 
      face={card.face}
      onClick={() => this.flip(i)}
      cardback={card.down}
      position = {card.position}/>

    )
    let status = "next player: " + (this.state.isTurnPlayer1 ? "player 1" : "player 2")
    let move = "player 1 is on move{a}"
    let score = "player 1: x point"

    return (
        <div>
        <div className="App">
        <Headline>MemoryCard</Headline>
            <MyContainer>

            {cards}

            <ul>
            <li>{status}</li>
            <li>{move}</li>
            <li>{score}</li>
            </ul>
            </MyContainer>
        </div>


          <div className="App">
            <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src="https://i.colnect.net/f/1175/001/1-Dollar-1-st-president-George-Washington-1789-1797-back.jpg"/>

              </div>
              <div className="flip-card-back">
                <img src="https://i.colnect.net/f/1175/004/1-Dollar-4-th-president-James-Madison-1809-1817.jpg" />
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </div>
            </div>
            </div>



            </div>
            </div>

      );
    }
}

class GridCoords extends Game{
  constructor(props){
    super(props)
    this.size = props.size
    this.coordinates ={
      x:0,
      y:0,
    }
  }
}


export default Game;
