import { Button, Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Item,Divider,Card,
    DropdownToggle,
    DropdownContext, DropdownItem,
    DropdownMenu } from 'reactstrap';
import cont from './cont.png';
import { useState } from "react";
import React from 'react';
import ReactDOM from "react-dom";
const Contact = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
    return(
        <Row>
            <Col>
                <img src={cont} width="900px"></img>
            </Col>
            <Card style={{width:"20rem",height:"250px",position:"relative",top:"200px",right:"200px"}}>
            <Col style={{padding:'12%'}}>
            <form onSubmit={handleSubmit}>
      <div>
      <label>
      <input 
        placeholder='Enter your name'
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        <input 
          placeholder='Enter your message'
          type="text" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <Button>Submit</Button>
    </form>
            </Col>
            </Card>
        </Row>
    );
};

export default Contact;