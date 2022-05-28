import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const TelaDeCriarPlaylist = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 80%;
`

const urlPlayList ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers: {
    Authorization: "janayna-cortez-hooks"
  }
}




export default class CriarPlaylist extends React.Component{
    state ={
        name: "",
        playlistId:""
        }
          // Pegar as playlists //
          getAllPlaylists = () => {
            axios
              .get(urlPlayList, headers)
              .then((response) => {
                console.log(response.data.result.list);
              })
              .catch((error) => {
                console.log(error.response);
              });
          };

          // Criar Playlist
        
          createPlaylist =()=>{

            const body ={
                name: this.state.name,

            }
            axios 
            .post(urlPlayList, body,headers)
            .then((res)=> {
          alert(`A sua playlist foi criada com sucesso! ;)`)
          this.setState ({name:""});
          this.getAllPlaylists();
            })
            .catch((err)=>{
              alert(`Esse nome já existe em Playlist.`)
            })
          }


    onChangeName = (ev) => {
        this.setState ({name: ev.target.value})
    }

        
        
          render(){
            
          return (
        
            <TelaDeCriarPlaylist>
            <div className="PlaylistContainer"></div>  
            <img src={"https://giphy.com/stickers/nisnasscom-nisnass-spotify-tunes-1ae3BzDj4XQeFTjYZi"}
            style={{width: "400px"}} alt="img"/>
            <h3>CRIE A SUA PLAYLIST</h3>

             <div className="PlaylistContainer">
             <br></br>
             <div>
             <input type="name" 
             placeholder="Nome" 
             value={this.state.name}
             onChange ={this.onChangeName}/>
             </div>
             <br></br>
             <div>
             <button onClick={this.createPlaylist}> Enviar </button>
             <button className="botoes" onClick={this.props.irParaLista}>  Ver todas as playlists </button>
             </div>
             </div>
            </TelaDeCriarPlaylist>
          );}
          }