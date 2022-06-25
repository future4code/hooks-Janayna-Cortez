import { Carousel } from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import banner1 from "../images/banner1.png"
import banner2 from "../images/banner2.png"
import banner3 from "../images/banner3.png"
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import europa from "../images/europa.jpg"
import venus from "../images/venus.jpg"
import marte from "../images/marte.jpg"
import lua from "../images/lua.jpg"
import perfil1 from "../images/perfil1.jpg"
import perfil2 from "../images/perfil2.jpg"
import perfil3 from "../images/perfil3.jpeg"
import astrobandeira from "../images/astrobandeira.png"
import gentileza from "../images/gentileza.png"



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

const HomePage = () => {

 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(()=>{
      Aos.init({duration: 2000})
    },[]);

    const navigate = useNavigate()

    const goToListTripsPage = () => {
      navigate('/trips/list')
    }


  return (
<div>
    <header> <Menu/></header>
      <main>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

         
          <section className="jumbotron text-center mt-5 mb-5 pt-5 pb-5">
        <div className="container mt-5 mb-5">
          <h1 className="jumbotron-heading" data-aos="fade-up">
            Viaje Conosco</h1>
          <p className="lead text-muted" data-aos="fade-up">
            As melhores viagens do universo você encontra aqui. <br></br>
        Saia da sua bolha terráquea e desvende outros mundos.</p>
        <Button onClick={goToListTripsPage}
         className="btn btn-lg my-2 mt-5" data-aos="fade-up">Encontre o Pacote Ideal para Você</Button>
        </div>

        <div className="container">

        <h1 className="jumbotron-heading pt-5 pb-5" data-aos="fade-up" >Nossos Destinos</h1>
  <div className="row " data-aos="fade-up">

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3 shadow ">
      <img  src={europa}
      className="img-fluid card-img-top"   />
       <div className="card-img-overlay">
      <h4 className="card-title text-light border">Europa</h4> </div>
    </div> </div>
    

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3  shadow" >
   <img src={venus}
className="img-fluid card-img-top" />
 <div className="card-img-overlay">
  <h4 className=" card-title text-light border">Vênus</h4> </div>
  </div>
</div>

    <div className="col-sm-6 " data-aos="fade-up">
    <div className="card m-3  shadow" >
    <img src={marte}
  className="img-fluid card-img-top"/>
   <div className="card-img-overlay">
      <h4 className="card-title text-light border">Marte</h4> </div>
    </div>  </div>


 <div className="col-sm-6 " data-aos="fade-up">
 <div className="card m-3 shadow" >
 <img src={lua}
 className="img-fluid fluid-card-img-top"  />
  <div className="card-img-overlay">
   <h4 className="card-title text-light border">Lua</h4> </div>
 </div>
  </div> </div>

</div> 
      </section>


      <section className="Premium">


    <div className="container">

    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="jumbotron-heading text-center" data-aos="fade-up">Seja Premium</h1>
    <p className="lead text-muted" data-aos="fade-up">Tenha um pacote que oferece 
    o melhor serviço em viagens espaciais. <br></br> O único All Inclusive do Universo. 
    <br></br>Escolha a opção que melhor combina com você.</p>

    <img src="https://assets.catho.com.br/mkt_ads_app/images/banners/rocket.png" data-aos="fade-up" className="d-inline-block align-top pr-1" alt=""/>
  </div>

  <div className="row">

  <div className="col-sm" data-aos="fade-up">
      <div className="card-deck mb-3 text-center shadow">
        <div className="card mb-4 shadow-sm">
          <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
            <h4 className="my-0 font-weight-normal ">Solo</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15.240 <small 
            className="text-muted">/ mês</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li> 5 viagens por ano para uma pessoa</li>
              <li>7 dias por viagem incluso no pacote</li>
              <li>Internet solar ilimitada</li>
              <li>Água, alimento e roupas inclusas</li>
              <li>Acesso ao centro de ajuda</li>
            </ul>
            <Button type="button"
             className="btn btn-lg btn-block " >
               Cadastre-se</Button>
          </div>
        </div>
        </div> 
        </div>

        <div className="col-sm" data-aos="fade-up">
    <div className="card-deck mb-3 text-center shadow">
      <div className="card mb-4 shadow-sm">
        <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
          <h4 className="my-0 font-weight-normal ">Duo</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$25.240 <small 
          className="text-muted">/ mês</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>5 viagens por ano para duas pessoas</li>
            <li>7 dias por viagem incluso no pacote</li>
            <li>Internet solar ilimitada</li>
            <li>Água, alimento e roupas inclusas</li>
            <li>Acesso ao centro de ajuda</li>
          </ul>
          <Button type="button"
           className="btn btn-lg btn-block" 
           >
             Cadastre-se</Button>
        </div>
      </div>
      </div> 
      </div>

      <div className="col-sm" data-aos="fade-up">
    <div className="card-deck mb-3 text-center shadow">
      <div className="card mb-4 shadow-sm">
        <div className="card-header" style={{backgroundColor: "#ddc4f6"}}>
          <h4 className="my-0 font-weight-normal ">Família</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">$50.240 <small 
          className="text-muted">/ mês</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>5 viagens por ano para 5 pessoas</li>
            <li>7 dias por viagem incluso no pacote</li>
            <li>Internet solar ilimitada</li>
            <li>Água, alimento e roupas inclusas</li>
            <li>Acesso ao centro de ajuda</li>
          </ul>
          <Button type="button"
           className="btn btn-lg btn-block" 
           >
             Cadastre-se</Button>
        </div>
      </div>
      </div> 
      </div>



  
        </div>
      </div>
      </section>
  

  <section className="comentarios container mt-5 pt-5 ">

  <h1 className="jumbotron-heading text-center" data-aos="fade-up">Nossos Clientes</h1>

  <div className="media border p-3 mt-5 shadow" data-aos="fade-up">

  <img src={perfil1} alt="Daniel Soares" 
  className="mr-3 mt-3 rounded-circle" style={{height:"60px"}} />
  <div className="media-body">
    <h4>Daniel Soares<small><i> 8, Outubro de 2020</i></small></h4>
    <p>Viajar com a labeX foi a melhor experiência da minha vida, 
      já havia visitado 10 países mas a viagem planetária foi espetacular onde nenhuma se comparou com a 
      viagem a Vênus. Com certeza irei mais vezes.
    </p>
  </div>
  </div>

  <div className="media border p-3 mt-5 shadow" data-aos="fade-up">

<img src={perfil2}  alt="Zaira Melo" 
className="mr-3 mt-3 rounded-circle" style={{height:"60px"}} />
<div className="media-body">
  <h4>Zaira Melo<small><i> 08, Abril de 2021</i></small></h4>
  <p> Eu sou técnica operacional em relacionamento espacial e vou no mínimo 8 vezes por ano
     em algum planeta do sistema solar. Sempre escolho a labeX para essas viagens 
     pois eles cuidam de tudo para mim.
  </p>
</div>
</div>

<div className="media border p-3 mt-5 shadow mb-5" data-aos="fade-up">

<img src={perfil3}  alt="Zito Góes" 
className="mr-3 mt-3 rounded-circle" style={{height:"60px"}} />
<div className="media-body">
  <h4>Zito Góes<small><i> 10, Março de 2022</i></small></h4>
  <p> As viagens espaciais em família é sempre na labeX, por isso fiz questão de aderir ao plano família. O suporte é excelente, o que torna uma viagem segura e agradável.
  </p>
</div>
</div>



  </section>

<section className=" mt-5 pt-5 mb-5 pb-5">
  <div className="container-sm shadow rounded d-md-flex flex-row justify-content-around align-items-center" 
  style={{backgroundColor: "#ddc4f6"}}
  data-aos="fade-up">
 <div> 
   <p className="text-center"><img 
   src={astrobandeira} 
   className="img-fluid" style={{height:"200px"}} /> </p>
 </div>
 <div >
  <h1 className="jumbotron-heading text-center pt-3 m-3">Central de Ajuda Espacial</h1>
  <p className="lead text-muted text-center"> Nossos atendentes estão preparados <br></br>
   para te atender com gentileza <br></br>
   e de forma humanizada.</p>
   <p className="text-center"><Button type="button"
    className="btn btn-lg btn-block  m-3" 
    >
      Acesse Agora</Button></p>
  </div>

  <div> 
  <p className="text-center">
    <img src={gentileza} 
   className="img-fluid" style={{height:"200px"}} /></p> 
 </div>


  </div>
</section>
      </main>

<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>
    );
  }

  export default HomePage
  