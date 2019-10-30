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
					<p><b>Player 1:</b> heads, <b>Player 2</b>: tails</p>
			            <div className="flip-card">
				            <div className={this.state.coinActive ? 'flip-card-inner' : 'spinner'} 
	                			 onClick={this.toggle}>
				              <div className="flip-card-front">
				              <img src="https://i.colnect.net/f/1175/001/1-Dollar-1-st-president-George-Washington-1789-1797-back.jpg"/>
				              </div>
				              <div className="flip-card-back">
				                <img src="https://i.colnect.net/f/1175/004/1-Dollar-4-th-president-James-Madison-1809-1817.jpg" />
				              </div> 
				            </div>
				            <button onClick={() => {document.getElementsByClassName("Start")[0].style.display = "none"}}>Start</button>
			            </div>
		            </div>
	            </div>
			)
	}
}

export default Coin;