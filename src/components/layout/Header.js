//this is a function based component.
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
    <h1 style={{color:'black'}}>My ToDo List.!</h1>
    <Link style={linkStyle} to="/">Home</Link>
    <Link style={linkStyle} to="/about">| About</Link>

    </header>
  )
}

const headerStyle ={
  textAlign:'center',
  backgroundColor:"yellow",
  //color:'black',
  borderColor:'orange',
  borderStyle:'dotted',
  borderPixel:'3px',
  borderRadius:'5px',
  padding: '10px ',
  marginBottom:'11px'
}

const linkStyle = {
  color:"white",
  textAlign:'center',
  padding:'10px'
}

export default Header;
