import React from 'react';
import './Tablero.css';
import styled from 'styled-components'

const MyContainer1 = styled.div`
margin: 0 1em;
border: 1px solid black
padding: 0.25em 1em;
display: flex;
float: left;
`


function Tablero(props) {
  let status = "next player: " + (props.isTurnPlayer1 ? "player 1" : "player 2")
  let move = "player 1 is on move{}"
  let score = "player 1: x point"

  return(

    <table className="Tablero">

  <h2>  <p class="center">GAME IS READY </p></h2>

    <tr>
    <td> SCORE</td>
    <td> PLAYERS</td>
    </tr>

    <tr>
    <td> </td>
    <td> </td>
    </tr>

    <tr>
    <td></td>
    <td></td>
    </tr>


    </table>
  )


}
export default Tablero;
