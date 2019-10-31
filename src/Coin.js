import React from 'react';
import './Coin.css';
import styled from 'styled-components';

class Coin extends React.Component {
	constructor(props){
		super(props);
		this.state = {coinActive: false}
		this.toggle = toggleClass => {
	        const currentState = this.state.coinActive;
	        this.setState({ coinActive: !currentState });
	    	}
	}


    render(){
		return (
				<div>
					<div className="Start">
					<p> <h2> Player 1</h2> <h3>Heads</h3> <h2>Player 2</h2> <h3>Tails</h3></p>
			            <div className="flip-card">
				            <div className={this.state.coinActive ? 'flip-card-inner' : 'spinner'}
	                			 onClick={this.toggle}>
				              <div className="flip-card-front">
				              <img className="redcoin" src="reddcoin.jpg"/>
				              </div>
				              <div className="flip-card-back">
				                <img className="redcoin" src="moneda2.jpg" />
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
