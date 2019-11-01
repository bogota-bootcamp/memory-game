import React from 'react';
import './Coin.css';

class Coin extends React.Component {
	constructor(props){
		super(props);
		this.state = {coinActive: false,
			currentState: null,
			coins: ["redcoin.jpg", "redcoin_back.jpg" ],
		} //las imagenes las puse en la class porque el constructor definen las variables, osea las imagenes y todo.
	}

	flipCoin(){
		if(! this.isfliped){
			console.log("flip");
			let currentState = this.state.coinActive;//copie esto de una funcion llamada toggle
			this.setState({ coinActive: !currentState });//copie esto tambien
			let rand = Math.floor(Math.random() * 2); //variable para numeros aletorios entre 0 y 1
			let selectedImage = this.state.coins[rand]; //selecciono la imagen del arreglo coin
			//ejemplo:  coin[0] --> image de Washington
			//          coin[1] --> imagen de James Madison
			console.log("["+rand+"]["+selectedImage+"]")
			let coins = this.state.coins.slice()
			coins.splice( rand, 1 );
			coins.push(selectedImage)
			this.setState({currentState: selectedImage, coins: coins});
			this.isfliped = true
		}
	}


    render(){
    	console.log(5555)
		return (
				<div>
					<div className="Start">
						<h2> Player 1</h2> <h3>Heads</h3> <h2>Player 2</h2> <h3>Tails</h3>
			            <div className="flip-card">
				            <div className={this.state.coinActive ? 'flip-card-inner' : 'spinner'}
	                			 onClick={() => this.flipCoin()}>
				            	<div className="flip-card-front redcoin">
				            		<img src={this.state.coins[0]} alt="" />
				            	</div>
					            <div className="flip-card-back redcoin">
					              <img src={this.state.coins[1]} alt="" />
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
