import styled from "styled-components"
import logo from "../images/logo.png"
import {RiAdminFill} from 'react-icons/ri';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import {FaUserAstronaut} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import axios from 'axios'

const Nav = styled.nav `
background-color:#1c2a48;
`

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

const Menu = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
    }

  const handleClose = () => 
  setShow(false);

  const handleShow = () => 
  setShow(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    const body = {
      email: email,
      password: password
    }

    axios
    .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/janayna-cortez-hooks/login', body)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      navigate('/admin/trips/list')
    })
    .catch(err => 
      alert("Erro ao fazer o login. Verifique o usuário e senha e tente novamente."))
}

    return (
        <Nav className="navbar p-3 border-bottom-info shadow-lg ">
        <button className="btn" onClick={() =>goToHome()}>
       <img src={logo} height="60"/></button>
  
       <button className="btn btn-outline-light rounded-circle" onClick={handleShow}>
       <RiAdminFill/>
       </button>


       <Modal show={show} onHide={handleClose}
        >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#ddc4f6"}}>
        <form className="form">
         <h3 className="text-center m-3 p-3">Login Adm</h3>

                 <div className="form-group input-group m-2 p-2">
                 <button className="btn btn-lg bg-light">
                   <FaUserAstronaut/></button>
                   <input type="email" 
                   className="form-control"
                   value={email}
                   onChange={onChangeEmail}
                   required/>
                 </div>

                 <div className="form-group input-group m-2 p-2">
                 <button className="btn btn-lg bg-light">
                   <RiLockPasswordFill/> </button>
                 <input type="password" 
                 className="form-control"
                 value={password} 
                 onChange={onChangePassword}
                 required
                 pattern={".{3,}"}
                 />
                 </div>

                 <div className="form-group m-2 p-2">
                 <label className="text-dark"><span>Lembrar</span>
                 <span>
                 <input type="checkbox"/></span></label><br></br>
                 </div>
         </form>

         
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#ddc4f6"}}>
          <div className="btn-group">
        <Button onClick={login}
       className="btn btn-lg"
       >Login</Button> 
           <Button className="btn btn-lg" >Registre-se</Button> 
       </div>
        </Modal.Footer>
      </Modal>
        </Nav>
    );
  }

export default Menu