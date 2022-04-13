import React from 'react';
import { Button,Row,Col,Card} from 'reactstrap';
import { useState } from "react";
import Axios from 'axios';

const Signup = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [DOB,setDOB] = useState('');
    const [addressL1,setAddressL1] = useState('');
    const [addressL2,setAddressL2] = useState('');
    const [city,setCity] = useState('');
    const [pincode,setPincode] = useState('');
    const [pgonAdd,setpgonAdd] = useState('');

    const handleSubmit = (event) => {

    event.preventDefault();
    
    Axios.post('http://localhost:3002/api/insert',{name:name,email:email,phone:phone,
    DOB:DOB,addressL1:addressL1,addressL2:addressL2,city:city,pincode:pincode,pgonAdd:pgonAdd
        }).then((response)=>{
            alert(response);
        });
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
        name="name"  
        onChange={(e)=>{setName(e.target.value)}} />
      </label>
      </div>
      <br></br>
      <div>
      <label>
        <input 
          placeholder='Enter your Email'
          type="email" 
          name="email"  
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
      <div>
      <label>
        <input 
          placeholder='Enter your Phone no'
          type="text" 
          name="phone"  
          onChange={(e)=>{setPhone(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your DOB'
          type="date" 
          name="DOB"  
          onChange={(e)=>{setDOB(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your address 1'
          type="text" 
          name="addressl1" 
          onChange={(e)=>{setAddressL1(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Address 2'
          type="text" 
          name="addressL2" 
          onChange={(e)=>{setAddressL2(e.target.value)}} 
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your City'
          type="city" 
          name="city" 
          onChange={(e)=>{setCity(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Pincode'
          type="text" 
          name="pincode" 
          onChange={(e)=>{setPincode(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <div>
      <label>
        <input 
          placeholder='Enter your Metamask wallet ID'
          type="text" 
          name="pgonAdd" 
          onChange={(e)=>{setpgonAdd(e.target.value)}}
        />
        </label>
      </div>
        <br></br>
        <input type="submit" />
    </form>
            </Col>
            </Card>
        </Row>
    );
};

export default Signup;
