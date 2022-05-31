import React from "react";
import styled from 'styled-components';

const Video = styled.div`
    padding:10px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`
export default function MusicaCard (props) {

    
    return (
        <div>
            <div>
                <h4>{props.TrackName}, {props.TrackArtist}  <button 
 onClick={props.deletarMusica}> 
 Excluir
 </button></h4> 
            
            </div>
           <Video>
                              <iframe width="560" height="315" 
                              src={`https://www.youtube.com/embed/${props.TrackUrl}`} 
                              title="YouTube video player" 
                              frameborder="0" 
                              allow="accelerometer; autoplay; 
                              clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                               allowfullscreen>
                              </iframe >
                          </Video>
        </div>
    )
}