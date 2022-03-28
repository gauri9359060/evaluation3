import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'

const NavbarWrapper = styled.nav`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    background-color: teal;
    color:white;
    height:100px;
`

const A = styled(Link)`
text-decoration:none;
color:white;
margin:30px;
font-size:30px;
cursor:pointer;
`
const Navbar = () => {
  return (
    <NavbarWrapper>
        <A to="/">Home</A>
        <A to="/login">Login</A>
        <A to="/register">Register</A>
        <A to="/products">Products</A>
    </NavbarWrapper>
  )
}

export default Navbar