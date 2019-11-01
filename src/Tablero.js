import React from 'react';
import './Tablero.css';
import ResetButton from './ResetButton.js'



function Tablero(props) {
  let status = "next player: " + (props.isTurnPlayer1 ? "player 1" : "player 2")
  let move = "player 1 is on move{}"
  let score = "player 1: x point"

  return(
    <div>
      <ResetButton />
      <table className="Tablero">
        <thead>
          <tr><th className="center">GAME IS READY</th></tr>
          <tr>
            <th> SCORE</th>
            <th> PLAYERS</th>
          </tr>
        
        </thead>
        <tbody>
      

      <tr>
      <td> </td>
      <td> </td>
      </tr>

      <tr>
      <td></td>
      <td></td>
      </tr>
      </tbody>

      </table>
    </div>
  )


}
export default Tablero;
