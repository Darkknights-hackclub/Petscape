import { Button, Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Item,Divider,Card,
    DropdownToggle,
    DropdownContext, DropdownItem,
    DropdownMenu } from 'reactstrap';
import cont from './cont.png';
import { useState } from "react";
import ReactDOM from "react-dom";
import React from 'react';
const Signup = () => {
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
        <Row className='justify-content-center' style={{position:"relative",bottom:"10px"}}>
            <Card style={{width:"20rem",height:"650px",position:"relative",top:"200px"}}>
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
          placeholder='Enter your Email'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
      <div>
      <label>
        <input 
          placeholder='Enter your Phone no'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your DOB'
          type="date" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Message'
          type="text" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your address 1'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Address 2'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your City'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Pincode'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Meta mask no'
          type="email" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      </div>
        <br></br>
        <Row className='justify-content-center'><Button>Submit</Button></Row>
    </form>
            </Col>
            </Card>
        </Row>
    );
};

export default Signup;