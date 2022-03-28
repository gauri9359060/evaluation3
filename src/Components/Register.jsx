import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const redirect = ()=>{
        navigate('/Login')
    }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });

  const handleChange = (e) => {
    const { id, value} = e.target;

    setFormData({
        ...formData,
        [id] : value
    })
  };

  const { name, email, password, username, mobile, description } = formData;

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    const payload ={
      name,
      email,
      password,
      username,
      mobile,
      description,
    }

    const jsonpayload = JSON.stringify(payload)
    fetch('https://masai-api-mocker.herokuapp.com/auth/register', {
      method: 'POST',
      body: jsonpayload,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res)=>{
      setFormData(res)
    }).then((err)=>console.log(err))

  };
  


  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          id="name"
          type="text"
          onChange={handleChange}
          value={name}
        />
        <br />
        <br />
        <input
          placeholder="Email"
          id="email"
          type="text"
          onChange={handleChange}
          value={email}
        />
        <br />
        <br />
        <input
          placeholder="Password"
          id="password"
          type="text"
          onChange={handleChange}
          value={password}
        />
        <br />
        <br />
        
        <input
          placeholder="User Name"
          id="username"
          type="text"
          onChange={handleChange}
          value={username}
        />
        <br />
        <br />

        <input
          type="number"
          placeholder="Mobile"
          id="mobile"
          onChange={handleChange}
          value={mobile}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Description"
          id="description"
          onChange={handleChange}
          value={description}
        />
        <br/><br/>
        <input type="submit" value="Register" />
      </form>
      <br />
        <br />
          <button onClick={redirect}>Redirected to Login Page</button>  
     
    </div>
  );
};

export  default Register ;
