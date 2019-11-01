import React from 'react';
import './Coin.css';

class Coin extends React.Component {
	constructor(props){
		super(props);
		this.state = {coinActive: false,
			currentSide: "/redcoin.jpg",
			coins: ["redcoin_back.jpg",
			"redcoin.jpg" ],
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
						<h2> Player 1</h2> <h3>Heads</h3> <h2>Player 2</h2> <h3>Tails</h3>
			            <div className="flip-card">
				            <div className={this.state.coinActive ? 'flip-card-inner' : 'spinner'}
	                			 onClick={() => this.flipCoin()}>
				              <div className="flip-card-back redcoin">
				                <img src={this.state.currentSide} alt="" />
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
