import styled from "styled-components"
import {BsYoutube} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {TiSocialInstagram} from 'react-icons/ti';

const Button = styled.button`
border-radius:30px;
background-color: #310062;
color: white;
&:hover{
  background-color: #ddc4f6;
  box-shadow: 0 0 1em #310062;
  color: #310062;
}
`

const Footer= () => {


    return (
        <div className="container">

        <form>

        <div className="d-md-flex flex-row justify-content-center align-items-center">
    
        <div className="form-group p-3">
        <h5 className="mb-1">Receba Novas Viagens em Seu Email</h5>
        </div>
                                                                                                        
                                                                                                        
        <div className="form-group mr-2">
        <input className=" form-control form-control-muted"  type="email" placeholder="Email"/>
        </div>
     
      <div className="form-group mr-2">
     <Button className="btn m-3 " type="submit" value="Se Inscrever">Inscreva-se</Button> 
      </div>
    
        </div>
       </form>

    
        <div className="container text-center">

        <h1 className="jumbotron-heading text-center pt-5 pb-5">Redes Sociais</h1>
        <div className="d-md-flex flex-row justify-content-center align-items-center">

        <div className="form-group p-5 border border-dark">
        <h5 className="mb-1"><BsYoutube/></h5>
        </div>
    
    
        <div className="form-group p-5 bg-dark text-light border border-dark">
        <h5 className="mb-1"><FaLinkedin/></h5>
        </div>
    
    
        <div className="form-group p-5 border border-dark">
        <h5 className="mb-1"><BsFacebook/></h5>
        </div>
    
    
    
    
        <div className="form-group p-5 bg-dark text-light border border-dark">
        <h5 className="mb-1"><TiSocialInstagram/></h5>
        </div>
    
    
        </div> 
        </div>
    
      <div className="container text-center d-md-flex mt-5 pb-5 pt-5 flex-row justify-content-around align-items-center">
    
        <div className="list-group list-group-flush ">
      <p><a className="text-muted" href="#">Roteiro de Viagem</a></p>
      <p><a className="text-muted"href="#">Guia de Destinos</a></p>
      <p><a className="text-muted"href="#">Linhas Espaciais</a></p>
      <p><a className="text-muted"href="#">Lugares Para Conhecer</a></p>
      <p><a className="text-muted"href="#">E-book Viagem Espacial</a></p>
        </div>
    
        <div className="list-group list-group-flush  ">
     <p><a className="text-muted"href="#">Quem Somos</a></p>
     <p><a className="text-muted"href="#">Nossa Frota</a></p>
     <p><a className="text-muted"href="#">Patrocínios e Eventos</a></p>
     <p><a className="text-muted"href="#">Investidores</a></p>
     <p><a className="text-muted"href="#">Sustentabilidade</a></p>
        </div>
    
        <div className="list-group list-group-flush  ">
     <p><a className="text-muted"href="#">Central de Ajuda</a></p>  
     <p><a className="text-muted"href="#">Formas de Pagamento</a></p>  
     <p><a className="text-muted"href="#">Direitos Universais</a></p>  
     <p><a className="text-muted"href="#">Termos e Condições</a></p>  
     <p><a className="text-muted"href="#">Revista LabeX</a></p>  
     </div>
     
      </div>   </div> 
    );
  }

  export default Footer