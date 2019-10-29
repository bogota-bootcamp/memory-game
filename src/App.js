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
    let shuffle = this.shuffle()
    this.state = {

      // cardNames = ["moni.png","karlk.png","rein.png","maite.png","vale.png","seb.png","dev.png"]
      cards: [{face: "cat.png", down: false, position: shuffle[0]},
              {face: "cat.png", down: false, position: shuffle[1]},
              {face: "cat.png", down: false, position: shuffle[2]},
              {face: "cat.png", down: false, position: shuffle[3]},
              {face: "cat.png", down: false, position: shuffle[4]},
              {face: "cat.png", down: false, position: shuffle[5]},
              {face: "cat.png", down: false, position: shuffle[6]},
              {face: "cat.png", down: false, position: shuffle[7]},
              {face: "cat.png", down: false, position: shuffle[8]},
              {face: "cat.png", down: false, position: shuffle[9]},
              {face: "cat.png", down: false, position: shuffle[10]},
              {face: "cat.png", down: false, position: shuffle[11]},
              {face: "cat.png", down: false, position: shuffle[12]},
              {face: "cat.png", down: false, position: shuffle[13]},
              {face: "cat.png", down: false, position: shuffle[14]},
              {face: "cat.png", down: false, position: shuffle[15]}
      ],
       score: [0,0], isTurnPlayer1: true,
    }
  }
  shuffle(){
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }

  flip(i){
    let copy = this.state.cards.slice();
    copy[i].down = !copy[i].down
    this.setState({
      cards: copy
    });
  }

  render(){
    let cards = this.state.cards.map(
      (card, i) =>
      <MemoryCard
      key={i} face={card.face}
      onClick={() => this.flip(i)}
      cardback={card.down}/>

    )
    let status = "next player: " + (this.state.isTurnPlayer1 ? "player 1" : "player 2")
    let move = "player 1 is on move{a}"
    let score = "player 1: x point"

    return (
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
