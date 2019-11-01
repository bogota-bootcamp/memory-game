import React from 'react';
import MemoryCard from './MemoryCard.js';
import './memorycard.css';
import Coin from './Coin.js'
import styled from 'styled-components'
import Tablero from './Tablero.js'

const MyContainer = styled.div`
margin: 0 1em;
border: 1px solid black
padding: 0.25em 1em;
display: flex;
float: left;
`

const Headline = styled.h2`
color yellow;
background: black;
font-size: 80px;
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
       score: [0,0],
       isTurnPlayer1: true,
       cardsTurnedCount: 1,
       pair: [],
       isfliped: false,
       winner: null,
       pairIndex: []
    }
  }

  GameOver() {
     let count = 0;
     var filtered = this.state.cards.filter(function(card) {
       if (card.down === false){
         count++;
       };
     });
     console.log("cards with face up: ", count);
     return count === this.state.cards.length;
   }

  WhoWon() {
      if(this.GameOver()) {
       //all cards are up
       let score1 = this.state.score[0];
       let score2 = this.state.score[1];

       if(score1 > score2) {
         this.setState({winner: "player 1"})
         return "Player 1 won"
       }
       else {
         this.setState({winner: "player 2"})
         return "Player 2 won"
       }
    }
    return ""; //game is not over
    }
     

   flip(i){
    let copy = this.state.cards.slice();
    let copy_pairIndex = this.state.pairIndex.slice();
    copy_pairIndex.push(i)
    if (copy[i].down === true){    
      copy[i].down = !copy[i].down
      this.setState({
        cards: copy,
        pairIndex: copy_pairIndex
      });
      // () => document.getElementsByClassName("Start")[0].style.display = "none";
    } 
  }
  
  FlipsBack(arr){
    let Flipcopy = this.state.cards.slice();
      // Flipcopy[arr[0]].down = !Flipcopy[arr[0]].down
      // Flipcopy[arr[1]].down = !Flipcopy[arr[1]].down
      setTimeout(() => { 
        Flipcopy[arr[0]].down =true
        Flipcopy[arr[1]].down = true
        this.setState({
        cards: Flipcopy});
    }, 2000)
  }
  
  cardsTurnedHandler(face){
    console.log(this.state.pair)
    let newPair = this.state.pair.slice();
    newPair.push(face);
    this.setState({pair: newPair}, () => {
      if(this.state.cardsTurnedCount === 2){
        this.setState({cardsTurnedCount: 1});
        this.matchHandler(face);
        }
      else {
        this.setState({cardsTurnedCount: this.state.cardsTurnedCount + 1});
      }
    })
  }


  matchHandler(face){
    if(this.state.pair[0]===this.state.pair[1]){
      console.log("match");
      let player = this.state.isTurnPlayer1 ? 0 : 1;
      let updatedScore = this.state.score[player] + 1;
      let newScoreArray = this.state.score.slice();
      newScoreArray[player] = updatedScore;
      this.setState({score: newScoreArray, pair: []}, () => console.log(this.state.score));
      //keep cards open (Karl's function will be called here)
      //keep turn (nothing to do, isTurnPlayer1 stays unchanged)
      //update scoreboard with Valeria's function
    }
    else {
      console.log("no match");
      this.FlipsBack(this.state.pairIndex)
      this.setState({isTurnPlayer1: !this.state.isTurnPlayer1, pair: []});
    }
    this.setState({pairIndex: []})
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
      onClick={() => {
        this.flip(i);
        this.cardsTurnedHandler(card.face);
        this.WhoWon();
      }}
      cardback={card.down}
      position = {card.position}/>

    )


    return (
        <div>
          <div>
            <div className="App">
            <Headline>MemoryCard</Headline>
                <Coin />
                <Tablero winner={this.state.winner} turn={this.state.isTurnPlayer1} score1={this.state.score[0]}  score2={this.state.score[1]}  winner={this.state.winner}/>
                  <MyContainer>
                    <div className="row">
                      {cards.slice(0,2)}
                    </div>
                    <div className="row">
                      {cards.slice(2,4)}
                    </div>
                    <div className="row">
                      {cards.slice(4,6)}
                    </div>
                    <div className="row">
                      {cards.slice(6,8)}
                    </div>
                    <div className="row">
                      {cards.slice(8,10)}
                    </div>
                    <div className="row">
                      {cards.slice(10,12)}
                    </div>
                    <div className="row">
                      {cards.slice(12,14)}
                    </div>
                    <div className="row">
                      {cards.slice(14,16)}
                    </div>
                  </MyContainer>
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
