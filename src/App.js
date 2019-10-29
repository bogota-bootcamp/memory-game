import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';
import 'rein.png'
import 'maite.png'
import 'oscar.png'
import 'valeria.png'
import 'seb.png'
import 'val.png'
import 'karl.png'
import 'devs.png'

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cards: [{face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false},
              {face: "cat.png", down: false}
      ], score: [0,0], isTurnPlayer1: true
    }
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
      cardback={card.down} />
    )

    return (
        <div className="App">
            {cards}
        </div>
      );
    }
}


export default Game;
