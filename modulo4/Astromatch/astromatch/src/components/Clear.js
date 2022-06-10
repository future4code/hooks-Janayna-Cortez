import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Button = styled.button`
background-color: #B18AE1;
color: black;
border: 1px solid black;
border-radius: 5px;
margin: 0px 100px 10px 100px;
:hover{
  -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
`

const headers = 'Content-Type: application/json'

export const Clear = () => {

  const limparMatches = () => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janayna-cortez-hooks/clear", headers)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <Button onClick={limparMatches}><b>Limpar Matches</b></Button>
    </div>
  );
}