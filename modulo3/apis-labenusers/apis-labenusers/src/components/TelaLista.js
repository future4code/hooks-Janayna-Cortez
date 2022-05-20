import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default class TelaLista extends React.Component {
  state = {
    lista: [],
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" 
    axios.get(url, {
        headers: {
            Authorization: "hooks-Janayna-Cortez" 
        }
    })  
    .then((response) => {
        this.setState({usuarios: response.data})
    })
    .catch((error) => {
        alert("Algo deu errado, tente novamente.")
    })

}

  deleteUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
        headers: {
            Authorization: "hooks-Janayna-Cortez"
        }
    })
    .then((response) => {
        alert("Usuário excluido com sucesso.")
        this.pegarUsuarios()
    })
    .catch((error) => { 
        alert("Ocorreu um erro")

    })

}
  render() {
    const listaUsuarios = this.state.lista.map((user) => {
      return (
        <CardUsuario key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUsuario(user.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <p>Tela Lista</p>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        {listaUsuarios}
      </div>
    );
  }
}