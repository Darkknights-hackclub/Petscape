import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form,Label} from 'reactstrap'; 
import { useState } from "react";
import { ethers } from "ethers";
import SApps from './SApps.css';

const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
  
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
  };

function funds()
{
   const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        await startPayment({
          ether: data.get("amount"),
          addr: "0xC9E6ACd323C2Ae48bDAa3ff4570b2eD8e218433D"
        });
      };    

return(
    <div className='whole'>
        <Form className='contributeForm' onSubmit={handleSubmit}>
            <input type="text" name="amount" placeholder='Enter the amount to contribute' style={{width:"30vw"}}/>
            <br></br><br></br>
            <Button className='contributeButton' style={{backgroundColor:"white",color:"black"}}>Contribute</Button>
        </Form>
    </div>
)
}

export default funds;