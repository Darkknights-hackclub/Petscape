import { Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Card,Button, Modal, ModalFooter,ModalHeader, ModalBody } from 'reactstrap';
import React from 'react';
import care from './care.png';
import doggy from './doggy.png';
import { FaAdn } from 'react-icons/fa';
const Profile = () => {
    return(
      <Container style={{position:"absolute",top:"200px",transform:"scale(1.4)",left:"150px"}}>
            <center>
                <Row>
                <Col>
                    <img src={care} style={{position:"relative",width:"400px",left:"20px"}} fluid></img>
                </Col>
                <Col>
                    <Card style={{width:"25rem",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",top:"50px",right:"150px",padding:"50px",borderRadius:"2%",fontWeight:"bolder"}} className="bel">
                      <left><h2>Your Self</h2></left>
                      <Row style={{padding:"1%"}}>
                      <Col><h6>Sujith</h6></Col>
                      <Col><h6>Kumar</h6></Col>
                      </Row>
                      <left style={{padding:"1%"}}><Col><h2>Your Pets</h2></Col><Col><FaAdn /></Col></left>
                      <Row style={{padding:"1%"}}>
                      <Col><a href='/Mypets'><img src={doggy} style={{position:"relative",width:"50px"}} title="Rakesh" fluid></img></a></Col>
                      <Col><img src={doggy} style={{position:"relative",width:"50px"}} title="Rakesh" fluid></img></Col>
                      <Col><img src={doggy} style={{position:"relative",width:"50px"}} title="Rakesh" fluid></img></Col>
                      </Row>
                    </Card>
                </Col>
                </Row>
            </center>
        </Container>
    );
};
  
  export default Profile;