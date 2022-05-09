import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.div`
  display: flex;
  width: 250px;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  padding: 0 2%;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px auto;
  border: 2px solid gray;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  background-color: ${({completa}) => (completa ? 'gray' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: 'Estudar',
        completa: false
      },

      {
        id: Date.now(),
        texto: 'Trabalhar',
        completa: true
      }
    ],
    inputValue: '',
    filtro: ''
  }

  salvarLocalStorange = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }
  componentDidUpdate() {
    this.salvarLocalStorange()
  };

  componentDidMount() {
    const tarefasStorange = localStorage.getItem("tarefas")
    const tarefasParse = tarefasStorange ? JSON.parse(tarefasStorange) : this.state.tarefas
    this.setState({ tarefas: tarefasParse })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })

  }

  criaTarefa = () => {
    const novaTarefa =
    {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novoEstado = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novoEstado })
    this.setState({ inputValue: "" })

  }

  selectTarefa = (id) => {
    const tarefaCompleta = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaNova = { ...tarefa, completa: !tarefa.completa }
        return tarefaNova
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: tarefaCompleta })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })

  }

  removeTarefa = (id) => {
    const listaComTarefaDeletada = this.state.tarefas.filter ((tarefa) => {
      if (id !== tarefa.id) {
        return tarefa
      }
    })
    this.setState({tarefas: listaComTarefaDeletada})
  }

  removeTodasTarefas = () => {
    const listaVazia = []
    this.setState({tarefas: listaVazia})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }


  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa 
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
        <button onClick={this.removeTodasTarefas}>Deletar Tarefas</button>
      </div>
    )
  }
}

export default App
