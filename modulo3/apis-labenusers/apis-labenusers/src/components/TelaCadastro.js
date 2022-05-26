import React from "react";
import axios from "axios"

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  criaUsuario = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" 
    const body = {
        name: this.state.name,
        email: this.state.email
    }
    axios
    .post(url, body, {
        headers: {
            Authorization: "janayna-cortez-hooks" 
        }
    })

   
           .then((response) => {
               alert("Usuário criado com sucesso")
               this.setState({ nome: "", email: "" })
           })
           .catch((error) => {
               alert(error.response.data.message)
               this.setState({ nome: "", email: "" })
           })
}

  render() {
    return (
      <div>
         <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Name"}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }

}