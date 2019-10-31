import React from 'react';
import './Coin.css';
import styled from 'styled-components';

class Coin extends React.Component {
	constructor(props){
		super(props);
		this.state = {coinActive: false,
			currentSide: "https://i.colnect.net/f/1175/004/1-Dollar-4-th-president-James-Madison-1809-1817.jpg",
			coins: ["https://i.colnect.net/f/1175/001/1-Dollar-1-st-president-George-Washington-1789-1797-back.jpg",
			"https://i.colnect.net/f/1175/004/1-Dollar-4-th-president-James-Madison-1809-1817.jpg" ]
		} //las imagenes las puse en la class porque el constructor definen las variables, osea las imagenes y todo.
	}

	flipCoin(){
		if(! this.isfliped){
			console.log("flip");
			const currentState = this.state.coinActive;//copie esto de una funcion llamada toggle
			this.setState({ coinActive: !currentState });//copie esto tambien
			let rand = Math.floor(Math.random() * 2); //variable para numeros aletorios entre 0 y 1
			let selectedImage = this.state.coins[rand]; //selecciono la imagen del arreglo coin
			//ejemplo:  coin[0] --> image de Washington
			//          coin[1] --> imagen de James Madison
			console.log("["+rand+"]["+selectedImage+"]")
			this.setState({currentSide: selectedImage});
			this.isfliped = true
		}
	}


    render(){
		return (
				<div>
					<div className="Start">
					<p><b>Player 1:</b> heads, <b>Player 2</b>: tails</p>
			            <div className="flip-card">
				            <div className={this.state.coinActive ? 'flip-card-inner' : 'spinner'}
	                			 onClick={() => this.flipCoin()}>
				              <div className="flip-card-back">
				                <img src={this.state.currentSide} />
				              </div>
				            </div>
				            <button onClick={() => {document.getElementsByClassName("Start")[0].style.display = "none"}} className="start-button">Start</button>
			            </div>
		            </div>
	            </div>
			)
	}
}

export default Coin;
