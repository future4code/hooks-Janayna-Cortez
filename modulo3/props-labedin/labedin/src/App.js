import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
      
       <h2>Dados pessoais</h2>     
       <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQHhFuS7sH3vyA/profile-displayphoto-shrink_200_200/0/1650651710127?e=1655942400&v=beta&t=lsuRwAQnFOvi8R8t6yaMZn5hRd7gk3KoJ0lzFcXxL3s" 
          nome="Janayna Cortez" 
          descricao="Oi, eu sou a Janayna Cortez. Sou aluna da turma Hooks da Labenu. Adoro receber projetos na sexta-feira só para adquirir novos conhecimentos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
        
  
      <CardPequeno
          icone="https://www.seekpng.com/png/detail/41-415678_email-icon-vector-circle.png"
          nome="Email:"
          descricao="janayna.cortez@labenu.com"
        />
        <CardPequeno
          icone="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          nome="Endereço:"
          descricao="Rua das Conquistas, 1000, Jardim Paraiso"
        />
      </div>

     

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao=" Web Developer Full-Stack | HTML - CSS - Javascript - React" 
        />
        
        <CardGrande 
          imagem="https://pgslot365.bet/img/bg_float5.png" 
          nome="Disponível" 
          descricao="Futura Desenvolvedora em busca de grandes oportunidades" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
