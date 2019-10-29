import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';
import './Card.css';

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
      key={i} face={card.face}
      onClick={() => this.flip(i)}
      cardback={card.down} />
    )

    return (
        <div>
        <div className="App">
            {cards}
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


export default Game;
