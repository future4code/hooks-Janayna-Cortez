import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContainerPrincipal = styled.div`
display: grid;
text-align: center;
background: linear-gradient(250deg, #7823E0 20%, #E6A570, #fae9b4);
box-shadow: 2px 2px 9px grey;
`

const Img = styled.img`
width: 90%;
height: 90%;
display: flex;
margin: 25px 50px 5px 25px;

`
         
const ButtonLike = styled.button`
background-color: #55F86E;
color: black;
padding: 2%;
border: 1px solid black;
border-radius: 5px;
margin: 10px 170px 15px 170px;
:hover{
  -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
display: inline-block;
text-align: center;
margin:20px 100px;
`

const ButtonDislike = styled.button`
background-color: #FA3E43;
color: black;
padding: 2%;
border: 1px solid black;
border-radius: 5px;
margin: 10px 170px 15px 170px;
:hover{
  -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
display: inline-block;
text-align: center;
margin:20px 100px;

`

const headers = 'Content-Type: application/json'

export const Principal = () => {

  const [perfilNaoVisto, setPerfilNaoVisto] = useState([])
  const [teste, setTeste] = useState(true)

  useEffect(() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janayna-cortez-hooks/person")
    .then(response => {
      setPerfilNaoVisto(response.data.profile)
    })
    .catch(err => {
      console.log(err);
    });
  },[teste])


  const like = (idNumber) => {

    const body = {
      id: idNumber,
      choice: true
    }
  
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janayna-cortez-hooks/choose-person", body, headers)
    .then(response => {
      setTeste(!teste)
    })
    .catch(err => {
      console.log(err);
    });
  }
    
  const dislike = (idNumber) => {
  
    const body = {
      id: idNumber,
      choice: false
    }
  
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/janayna-cortez-hooks/choose-person", body, headers)
    .then(response => {
      setTeste(!teste)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <ContainerPrincipal>
        <Img src={perfilNaoVisto.photo}/>
        <p> <b> {perfilNaoVisto.name}, {perfilNaoVisto.age} </b></p>
        <p> <b> {perfilNaoVisto.bio} </b></p>
        <ButtonLike onClick={() => like(perfilNaoVisto.id)}><span class="material-icons"> ♥ </span></ButtonLike>
        <ButtonDislike onClick={() => dislike(perfilNaoVisto.id)}><span class="material-icons"> X </span></ButtonDislike>
      </ContainerPrincipal> 
    </div>
  );
}
