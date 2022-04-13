import { Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Card,Button, Modal, ModalFooter,ModalHeader, ModalBody } from 'reactstrap';
import React from 'react';
import qr from './qr.png';
import doggy from './doggy.png';
import { FaAdn } from 'react-icons/fa';
const Profile = () => {
    return(
      <Container style={{position:"absolute",top:"200px",transform:"scale(1.4)",left:"150px"}}>
            <center>
                <Row style={{paddingBottom:"10%"}}>
                <Col>
                    <Card style={{width:"25rem",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",top:"50px",right:"0px",padding:"50px",borderRadius:"2%",fontWeight:"bolder"}} className="bel">
                      <Row style={{padding:"1%"}}>
                      <Col>
                      <img src={qr} style={{width:"300px",height:"300px",padding:"-10%"}}></img>
                      </Col>
                      </Row>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width:"25rem",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",top:"50px",right:"100px",padding:"50px",borderRadius:"2%",fontWeight:"bolder"}} className="bel">
                      <Row style={{padding:"1%"}}>
                      <Row><h2>Name: Doggy</h2></Row>
                      <Row><h2>Age: 07</h2></Row>
                      <Row><h2>Breed: shepard</h2></Row>
                      <Row><h2>Colour: Black</h2></Row>
                      <Row><h2>Gender: Male</h2></Row>
                      </Row>
                    </Card>
                </Col>
                </Row>
            </center>
        </Container>
    );
};
  
  export default Profile;