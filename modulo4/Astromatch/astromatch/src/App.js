import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {Principal} from './pages/Principal'
import {Matches} from './pages/Matches'
import { Clear } from './components/Clear';


const Div = styled.div`
background-color: black;
background-image: url(https://media.istockphoto.com/photos/neon-duotone-female-abstract-reaching-for-each-other-hands-on-black-picture-id1218027543?b=1&k=20&m=1218027543&s=170667a&w=0&h=2gbb2dCpqVqkl5OiKMHiWAckOXQUDdanVUZbEOlot9U=);
background-attachment: fixed;
  background-position: center; 
background-size: cover;
`

const ContainerPrincipal = styled.div`
display: grid;
text-align: center;
font-family: "Rubik", sans-serif;
background: linear-gradient(250deg, #7823E0 20%, #E6A570, #fae9b4);
margin: 1% 30% 1% 30%;
box-shadow: 2px 2px 9px grey;
`

const ContainerSecundario = styled.div`
display: grid;
text-align: center;
`

const Hr = styled.div`
border: 0px;
border-top: 1px solid gray;
`
const Button = styled.button`
background-color:#504FF5;
color: white;
border: 2px solid black;
border-radius: 5px;
paddind: 5%;
margin: 20px 150px 50px 150px;
:hover{
  -webkit-transform: scale(0.2);
-ms-transform: scale(1.2);
transform: scale(1.1);
transition: 0.3s ease;
`

const App = () => {

  const [exibicao, setExibicao] = useState("Principal")

  const trocarPagina = () => {
    if (exibicao === "Principal") {
      setExibicao("Matches")
    } else {
      setExibicao("Principal") 
    }
  }

  return (
    <Div>
      <ContainerPrincipal>
        <ContainerSecundario>
          <h1> A s t r o m a t c h </h1>
          <Button onClick={trocarPagina}>Deu Match!</Button>
        </ContainerSecundario>
        <Hr/>
        <>
          {exibicao === "Principal" ? <Principal /> : <Matches />}
        </>
      </ContainerPrincipal> 
      <Clear />
    </Div>
  );
}

export default App;
