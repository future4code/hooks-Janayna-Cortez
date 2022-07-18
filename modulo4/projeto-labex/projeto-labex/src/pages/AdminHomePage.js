import React, {useEffect, useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from'../components/Footer'
import axios from 'axios'
import useProtectedPage from '../customHook/useProtectPage'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse'
import styled from "styled-components"
import {IoMdLogOut} from 'react-icons/io';
import {FcDisapprove} from 'react-icons/fc';
import {FcApprove} from 'react-icons/fc';
import {MdOutlineExpandMore} from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import {useForm} from "../customHook/useForm"


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

const AdminHomePage = () => {

  useProtectedPage()
  const [tripsList, setTripsList] = useState([])
  const [tripDetail, setTripDetail] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, onChangeForm] = useForm (
    {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: "",
  })


const token = localStorage.getItem('token')


// logout

const outLocalStorage =() =>{
  localStorage.setItem('token', "")
  navigate("/")
}

const Url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/janayna-cortez-hooks'
const headers =   {
  headers: { 
      auth: token
  }
}   
// Api

const getTrips =()=>{
  axios
    .get
    (`${Url}/trips`)
    .then(res => setTripsList(res.data.trips))
    .catch(err => console.log(err))
    }   

    useEffect(()=>{
      getTrips()
    },[])

    const tripId = tripsList.id;
    console.log(tripId)


//criar viagem

const createTrip =()=>{ 
  const body= form
  axios
  .post(`${Url}/trips`,
  body, headers
  )
  .then((res)=>{
    alert("Nova Viagem Foi Criada!")

  })
  .catch((err)=>{
    console.log(err)
  })
}

const onClickCreate = (ev) => {
  ev.preventDefault()
  createTrip(form)
}


 // 


 const getTripsDetails = (id) => {
   axios
     .get(`${Url}/trip/${id}`, headers)
     .then((res) => {
       setTripDetail(res.data.trip);
     })
     .catch((err) => {
       console.log(err.response.data);
     });
 }
 useEffect(() => {
  getTripsDetails();
});

 const aproveCandidate = (candidate, tripId) => {
   const body = { approve: true };
   axios
     .put(`${Url}/trips/${tripId}/candidates/${candidate.id}/decide`,
       body, headers)
     .then((res) => {
      alert(`Você aprovou o candidato ${candidate.name}!`);
        getTripsDetails();
      
     })
     .catch((err) => {
       alert(err.response.data.message);
     });
 };

 const reproveCandidate = (candidate, tripId) => {
   const body = { approve: false };
   axios
     .put(`${Url}/trips/${tripId}/candidates/${candidate.id}/decide`,
       body, headers)
     .then((res) => {
      alert(`Você reprovou o candidato ${candidate.name}!`);
       getTripsDetails();
     })
     .catch((err) => {
       alert(err.response.data.message);
     });
 };


 const deleteTrip = (tripId) => {
  axios
  .delete
  (`${Url}/trips/${tripId}`, headers)
    .then(() => {
      alert("A viagem foi deletada")
      window.location.reload()
    })
    .catch((err) => console.log(err.message))
  }

// Maps 

//Lista de Candidatos

const listApproveds = tripDetail.approved?.map((candidate) => {
return (
<div key ={candidate.id}>
<h4>Lista de Aprovados</h4>
  <ul className="list-group">
  <li className="list-group-item list-group-item-action"
  >{candidate.name}, {candidate.age}, {candidate.country}</li>
  </ul>
</div>
)})

// Candidatos pendentes

const CandidatesPendings = tripDetail.candidates?.map((candidate) => {
  return (
    <div className="media border p-3 mt-5 shadow"
    key={candidate.id}>
       <h4>Candidatos Pendentes</h4>
    <ul className="list-group">
      <li className="list-group-item list-group-item-action">
        <b>Nome:</b>{candidate.name}</li>
      <li className="list-group-item list-group-item-action">
        <b>Profissão:</b>{candidate.profession}</li>
      <li className="list-group-item list-group-item-action">
        <b>Idade:</b>{candidate.age}</li>
      <li className="list-group-item list-group-item-action">
        <b>País:</b>{candidate.country}</li>
      <li className="list-group-item list-group-item-action">
        <b>Motivos de Candidatura:</b>{candidate.applicationText}</li>
      </ul>
      <div className="buttons-container-pending">
        <Button className="btn btn-lg my-2 " 
        onClick={() => aproveCandidate(candidate)}> <FcApprove/>
        </Button>
        <Button className="btn btn-lg my-2 "
        onClick={() => reproveCandidate(candidate)}>
        <FcDisapprove/></Button>
      </div>
      </div>
  );
});

//Lista de Viagens 
const ListTrip = tripsList.map((trip, id) => {
  return (

  <div className="media border p-3 mt-5 shadow" 
  key={id} name={trip.name} id={trip.id}
  style={{backgroundColor: "#ddc4f6"}}>

    <div className="media-header">
    <p className="text-end">
  <button className="btn btn-outline-light rounded-circle"
   onClick={deleteTrip}>
    <AiFillDelete/></button></p>
    </div>
    
  <div className="media-body">
  <h3 className="jumbotron-heading text-center m-3">{trip.name} </h3>

  <div className="media-footer">

  <div>
  <button
    className="btn btn-outline-light rounded-circle m-3"
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    <MdOutlineExpandMore/>
  </button>
  <Collapse in={open}>
    <div id="example-collapse-text">
  <p><b>Descrição:</b>{trip.description}</p>
  <p><b>Data: </b>{trip.date}</p>
  <p><b>Planeta: </b>{trip.planet}</p>
  <p><b>Duração: </b>{trip.durationInDays}</p>
  <div>
    {listApproveds}
  </div>
  <div>
    {CandidatesPendings}

    </div>
    </div>
  </Collapse>
</div>
   </div>
  </div>
  </div>


)
})

    return (
      <div>
    <header> <Menu/></header>
      <main>
      <div className="container">
      <h1 className="jumbotron-heading text-center
      px-3 py-3 pt-md-5 pb-md-4 mx-auto">Viagens</h1>



          <div className="container">
            <div className="mb-5"> 
            {ListTrip}
     </div>

          <div className="botaogrupo">
          <div>
      <Button className="btn btn-lg my-2"
       variant="primary" onClick={handleShow}>
      Criar Viagem
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: "#ddc4f6"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="jumbotron-heading  mt-3 mb-3">
            Crie uma Nova Viagem</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <form onSubmit={onClickCreate}>

        <div className="form-group p-3">
        <input type="name" className="form-control" 
        placeholder="Nome da Viagem"
        name={"name"} value={form.name} onChange={onChangeForm}
        required/>
        </div>

        <div className="form-group p-3">

      <select className="form-control" onChange={onChangeForm}
         name={"planet"} value={form.planet} required>
      <option selected disabled>Planeta</option>
      <option value="Mercúrio">Mercúrio</option>
      <option value="Vênus">Vênus</option>
      <option value="Terra">Terra</option>
      <option value="Marte">Marte</option>
      <option value="Júpiter">Júpiter</option>
      <option value="Saturno">Saturno</option>
      <option value="Urano">Urano</option>
      <option value="Netuno">Netuno</option>
      <option value="Plutão">Plutão</option>
      </select>  
        
        </div>

        <div className="form-group p-3">
        <input type="date" className="form-control" 
        placeholder="Nome da Viagem"
        required
        name={"date"} value={form.date} onChange={onChangeForm}/>
        </div>


        <div className="form-group p-3">
        <textarea className="form-control" rows="3" placeholder="Descrição"
        required
        name="description"value={form.description} onChange={onChangeForm}></textarea>
        </div>

        <div className="form-group p-3">
        <input type="number" className="form-control" placeholder="Duração em Dias"
        required
        name={"durationInDays"} value={form.durationInDays} onChange={onChangeForm}
          />
        </div>

        <div className="form-group p-3">
        <Button type="submit" className="btn btn-lg my-2 ">Criar</Button>
        </div> 

        </form> 

        </Offcanvas.Body>
      </Offcanvas>
    </div>

    <p className="text-end">
    <button className="btn btn-outline-dark rounded-circle"
     onClick={outLocalStorage}>
       <IoMdLogOut/></button>
     </p>

          </div>
      </div>
      </div>
      </main>



<footer 
className="footer mt-5 pt-5" 
style={{backgroundColor: "#ddc4f6"}}> 
<Footer/> </footer>
</div>

    );
  }
  
  export default AdminHomePage;