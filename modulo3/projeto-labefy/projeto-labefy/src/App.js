import './App.css';
import React from 'react';
import CriarPlaylist from './components/CriarPlaylist';
import ListaDePlaylists from './components/ListaDePlaylists';
import DetalhesPlaylist from './components/DetalhesPlaylist';
import styled from 'styled-components';
import logo from "./midias/logo.png";


const Container = styled.div `
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
border-radius:5px;
position: relative;
float:center;
padding: 40px;
margin:40px;
background-color: rgba(0, 0, 0, 0.603) `

const Header = styled.header`
background-color: rgba(0, 0, 0);
box-shadow: 0px 4px 10px  black;
display:flex;
flex-direction:row;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid  rgb(117, 0, 0); 
padding-left:10px;
padding-right:10px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background:black;
  padding: 10px;
  padding-top:30px;
  border-top: 2px solid  rgb(117, 0, 0); 
`
const Ul = styled.div`
  padding: 10px;
  & p{
color:rgb(243, 162, 162);
  };
  & p:hover{
    color:rgb(117, 0, 0);
    cursor:pointer;
  }
`
const Copy = styled.div`
color:rgb(243, 162, 162);
display: flex;
justify-content: center;
background:black;
padding: 10px;
`

export default class App extends React.Component {
  state={
    telaInicial: 'criarPlaylist'
  }

  escolherTela = () => {
    switch (this.state.telaInicial) {
      case "criarPlaylist":
        return <CriarPlaylist irParaLista ={this.irParaLista}/>
      case 'lista':
        return <ListaDePlaylists irParaCriarPlaylist ={this.irParaCriarPlaylist} />
      case 'tracks':
        return <DetalhesPlaylist irParaLista ={this.irParaLista} />
      default: 
        return <div> Página não encontrada! </div>
    }
    
  }

  irParaCriarPlaylist = () => {
    this.setState ({telaInicial: 'criarPlaylist'})
  }

  irParaLista = () => {
    this.setState ({telaInicial: 'lista'})
  }

  render () {
    return (
      <div className="App">
        <Header>
        <img src={logo} style={{height: "80px"}} alt="logo"/>
          
        </Header>
        <Container>
        {this.escolherTela()}
        </Container>
        <Footer>
          <Ul>
            <h3>EMPRESA</h3>
            <p>Sobre</p>
            <p>Fale Conosco</p>
          </Ul>
          <Ul>
            <h3>COMUNIDADES</h3>
            <p>Para artistas</p>
            <p>Desenvolvedores</p>
            <p>Publicidade</p>                      
          </Ul>
          <Ul>
            <h3>LINKS ÚTEIS</h3>
            <p>Suporte</p>
            <p>Player da Web</p>
            <p> Aplicativo móvel grátis</p>
          </Ul>
        </Footer>

        <Copy>Labefy Company</Copy>

      </div>
    )
  }
}
