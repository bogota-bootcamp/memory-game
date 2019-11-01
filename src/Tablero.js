import React from 'react';
import './Tablero.css';
import ResetButton from './ResetButton.js'



function Tablero(props) {
  let status =  (props.isTurnPlayer1 ? "player 1" : "player 2")
  let move = "player 1 is on move"
  let score = "player 1: x point"
  let player1= "player 1"
  let player2= "player 2"
  console.log(props.score);

  return(
    <div>
      <ResetButton />
      <table className="Tablero">
        <thead>
          <tr><th className="center">GAME IS READY</th></tr>
          <tr>
            <th> PLAYERS</th>
            <th> SCORE</th>
          </tr>

        </thead>
        <tbody>


      <tr>
      <td>{player1}</td>
      <td>{props.score1} </td>
      </tr>

      <tr>
      <td>{player2}</td>
      <td>{props.score2}</td>
      </tr>

      <tr>
      <td>Winner</td>
      <td></td>
      </tr>
      </tbody>

      </table>
    </div>
  )


}
export default Tablero;
