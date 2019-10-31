import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';
import Coin from './Coin.js'
import styled from 'styled-components'
import ResetButton from './ResetButton.js'

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
    this.cardNames = ["moni.png","karl.png","rein.png","maite.png","val.png","seb.png","devs.png","oscar.png",
                      "moni.png","karl.png","rein.png","maite.png","val.png","seb.png","devs.png","oscar.png"]
    let carArr = []
    this.cardNames.forEach((cards,i) => {
      carArr.push({face: this.cardNames[shuffle[i]], down: true, position: shuffle[i]})
    })
    this.state = {
      cards: carArr,
       score: [0,0], isTurnPlayer1: true,
       isfliped: false
    }
  }

  flip(i){
    let copy = this.state.cards.slice();
    copy[i].down = !copy[i].down
    this.setState({
      cards: copy
    });
    // () => document.getElementsByClassName("Start")[0].style.display = "none";
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
          <div>

            <div className="App">
            <Headline>MemoryCard</Headline>
                <Coin />
                <MyContainer>
                  <div>
                    {cards.slice(0,4)}
                  </div>
                  <div>
                    {cards.slice(4,8)}
                  </div>
                  <div>
                    {cards.slice(8,12)}
                  </div>
                  <div>
                    {cards.slice(12,16)}
                  </div>
                  <ul>
                    <li>{status}</li>
                    <li>{move}</li>
                    <li>{score}</li>
                  </ul>
                </MyContainer>
                <ResetButton />
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
