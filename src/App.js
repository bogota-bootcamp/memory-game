import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import './Card.css';





class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      cards: [{face: "cara", down: true},


              ]
    }
  }
  flip(i){
    let c=this.state.cards.slice();
    c[i].down= !c[i].down
    this.setState({
      cards:c
    });
  }



  render(){
    let cards = this.state.cards.map(
      (card, i) =>
      <Card key={i} face={card.face}
      onClick={() => this.flip(i)}
      cardDown={card.down}/>
    )

  return (
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

)
}
}

export default App;
