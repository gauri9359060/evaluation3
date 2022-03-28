import React, { useContext, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext';

const Login = () => {
    const [user,setUser] = useState({
        username:"",
        password:"",
    })

    const {login} = useContext(AuthContext)
    const handleChange = (e) => {
        const { id, value} = e.target;
    
        setUser({
            ...user,
            [id] : value
        })
      };

      const {username,password} = user

      const handleLogin = (e)=>{
        e.preventDefault();
        const handleLogin = () =>{
            fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json())
            .then((res) => login(res.token))
        } 
      }

  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
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
          placeholder="Password"
          id="password"
          type="text"
          onChange={handleChange}
          value={password}
        />
        <br />
        <br />

        <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Login