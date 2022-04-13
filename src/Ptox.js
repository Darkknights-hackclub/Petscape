import {Row,Card,Col } from 'reactstrap';
import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import video from './video/video.mp4';

const Ptox = () => {
    return(
        <body>
            <Row style={{padding:"100px"}}>
                <Card style={{width:'100%',padding:"10px"}}>
                    <center><h2>Ptox shorts</h2></center>
                    <Card>
                        <Row>
                            <Col><h5 style={{padding:'20px'}}>Having fun with my nimo is the world of paradise!</h5></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col><h5 style={{padding:'20px'}}>By ~Hakuna Matata <br></br>Total crypto collected - 5.345</h5></Col>
                        </Row>
                        <Row><video src={video} style={{padding:'20px',height:"800px"}} controls></video></Row>
                        <button className='btn btn-secondary'>Donate</button>
                    </Card>
                    <br></br>
                    <Card>
                        <Row>
                            <Col><h5 style={{padding:'20px'}}>Having fun with my nimo is the world of paradise!</h5></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col><h5 style={{padding:'20px'}}>By ~Hakuna Matata <br></br>Total crypto collected - 5.345</h5></Col>
                        </Row>
                        <Row><video src={video} style={{padding:'20px',height:"800px"}} controls></video></Row>
                        <button className='btn btn-secondary'>Donate</button>
                    </Card>
                </Card>
            </Row>
        </body>
    );
};


export default Ptox;