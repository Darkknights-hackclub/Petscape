import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Item,Divider,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Modal,ModalFooter,ModalHeader,ModalBody} from 'reactstrap';
    import { DropdownButton} from 'react-bootstrap';
    import { Dropdown} from 'react-bootstrap';
import React from 'react';
import blob from './Vector.png';
import './App.css';
const Layout = () => {

    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);

  return (
    <>
      <Container fluid >
      <Navbar container="lg" expand="md" light>
        <NavbarBrand className="hel">Petscape</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar className="justify-content-center">
         <Col md="8" className="justify-content-center">
         <Nav>
         <Col md="3"></Col>
         <Col md="2"><NavItem>
          <NavLink>
            <Link to="/"><div style={{display:"inline-block",float:"none",textAlign:"center",color:"black"}}><div style={{position:"relative"}}><img src={blob} style={{position:"absolute",width:"150px",transform:"translate(-40%,-40%)"}}/><span style={{position:"relative"}} class="overlay-text">Home</span></div></div></Link>
          </NavLink>
         </NavItem></Col>
         <Col md="2"><NavItem>
          <NavLink>
            <Link to="/profile"><div style={{display:"inline-block",float:"none",textAlign:"center",color:"black"}}>Profile</div></Link>
          </NavLink>
         </NavItem></Col>
         <Col md="2"><NavItem>
          <NavLink>
            <Link to="/contact"><div style={{display:"inline-block",float:"none",textAlign:"center",color:"black"}}>Contact</div></Link>
          </NavLink>
         </NavItem>
         </Col>
         <Col md="2"><NavItem>
          <NavLink>
            <Link to="/funds"><div style={{display:"inline-block",float:"none",textAlign:"center",color:"black"}}>Crowdfunding</div></Link>
          </NavLink>
         </NavItem>
         </Col>
         </Nav>
         </Col>
        </Collapse>
        <DropdownButton id="dropdown-basic-button">
        <Dropdown.Item href="/Ptox">Ptox Shorts</Dropdown.Item>
  <Dropdown.Item href="/Signup"> Signup </Dropdown.Item>
  <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
</DropdownButton>
      </Navbar>
      </Container>

      <Outlet />
    </>
  )
};

export default Layout;