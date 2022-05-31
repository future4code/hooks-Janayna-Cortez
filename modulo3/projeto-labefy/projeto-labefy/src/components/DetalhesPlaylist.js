import React from "react";
import axios from "axios";
import MusicaCard from "./MusicaCard"
import styled from 'styled-components'


const ContainerAdicionar = styled.div`
background:black;
padding:20px;
margin-top:50px;
margin-bottom:50px;
border: 2px solid  rgb(117, 0, 0);
border-radius:5px;
`

const headers = {
  headers: {
    Authorization: "janayna-cortez-hooks"
  }
}
export default class DetalhesPlaylist extends React.Component{
    state = {
        name: "",
        artist: "",
        url: "",
        listaDeMusicas: [],
      };

      componentDidMount() {
        this.getPlaylistTracks();
      }

       getPlaylistTracks=()=>{
        
        axios
        .get(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
          headers
        )
        .then((respostas) => {
          this.setState({ listaDeMusicas: respostas.data.result.tracks });
          console.log("Atenção", respostas.data.result.tracks);
        })
        .catch((erros) => console.log(erros));
    };
  

    addTrackToPlaylist =(ev)=>{
    const body={
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
    };

axios
.post (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`,
body, headers)
.then((res)=>{
this.setState({ name: "", artist: "", url: "" });
this.getPlaylistTracks();
alert("A música foi adicionada com sucesso!");
})
.catch((err)=>{
    alert("Algo deu errado. Tente novamente.")
});
this.getPlaylistTrackst();
};

removeTrackFromPlaylist = (id) => {
  if (window.confirm("Deseja remover esta música?")) {
    const idPlay = this.props.playListSelect.id;
    const urlTrack=  `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}/tracks/${id}`
    console.log('urlTrack', urlTrack)
    axios
      .delete( urlTrack,
        {
          headers: {
              Authorization: 'janayna-cortez-hooks'
          }
      })
      .then((res) => {
        alert("Música removida com sucesso");
      })
      .catch((erro) => {
        console.log(erro.response.data.message);
      });
  }
  this.getPlaylistTrackst();
};


  onChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };

  onChangeArtist = (ev) => {
    this.setState({ artist: ev.target.value });
  };

  onChangeUrl = (ev) => {
    this.setState({ url: ev.target.value });
  }; 
render(){
    const listaDeMusicas = this.state.listaDeMusicas.map(musicas =>{
        return <MusicaCard key={musicas.id}
                TrackName={musicas.name}
                TrackArtist={musicas.artist}
                TrackUrl={musicas.url}
                TrackId={musicas.id}
                deletarMusica={()=>this.removeTrackFromPlaylist(musicas.id)} />
    })

    console.log(listaDeMusicas)
    return(
        <div>

            <div>
              <h1>MÚSICAS</h1>
            {listaDeMusicas}
            </div>
            <ContainerAdicionar>
            <h3>ADICIONE NOVA MÚSICA:</h3>
            <p>Atenção: para o link funcionar copie e cole o código que está no link
              do youtube após o 'v='.</p>
            <input placeholder="Música"
            value= {this.state.name}
            onChange ={this.onChangeName}/>

            <input placeholder="Artista"
            value= {this.state.artist}
            onChange ={this.onChangeArtist}/>

            <input placeholder="Código do link do Youtube"
            value= {this.state.url}
            onChange ={this.onChangeUrl}/>
            
            <button onClick={this.addTrackToPlaylist}>
              Adicionar Música
            </button>

          </ContainerAdicionar>
          <button onClick={this.props.paginaVoltar}>
           Voltar
            </button>
        </div>

    )
}
}