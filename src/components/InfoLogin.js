import './InfoLogin.css'
import logo from '../assets/objetivofuncionario.jpg'
import React, { useState } from "react"
import { useAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom'; 


function InfoLogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resultRequest, setResultRequest] = useState(false);
    const [resultErrorMessage, setResultErrorMessage] = useState('');
    const { onLogin } = useAuth();

    const handleClick = () => {
       onLogin(email, password, setResultErrorMessage, setResultRequest);
        
    }


    // update handlers for input fields
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    return(
        <div className="login-container">
            
            <div className="form-container">
                <img src={logo} id="logo"></img>
                <p>Bienvenido</p>
                <input className='inputLogin' type="email" placeholder="Email"  value={email}  onChange={handleEmailChange}/>
                <input className='inputLogin' type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button onClick={handleClick}>ACCEDER</button>
                <p>¿No estas registrado? <Link to="/register">Regístrate ahora</Link></p>
                <p style={{color:'red', visibility: resultRequest === false ? 'hidden' : 'visible'}}>{resultErrorMessage}</p>
            </div>
            <div className="image-container shadow-sm rounded" >
            </div>
        </div>
    );
    
}

export default InfoLogin;