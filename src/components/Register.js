import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('alumno');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('User Type:', userType);
    
    // Aquí puedes restablecer los campos del formulario después del envío exitoso
    setUsername('');
    setEmail('');
    setPassword('');
    setUserType('alumno');
  };

  return (
    <form className='Register' onSubmit={handleSubmit}>
      <input className='inputLogin' type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
      <input className='inputLogin' type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input className='inputLogin' type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <select value={userType} onChange={handleUserTypeChange}>
        <option value="alumno">Alumno</option>
        <option value="profesor">Profesor</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
