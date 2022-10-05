import React from "react";
import {Container, Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../asset/movielistLogo.svg'
import './navbar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <Navbar bg="transparant">
            <Container fluid>
                <Nav style={{cursor: 'pointer'}}>
                    <img style={{marginLeft: '2rem'}} src={Logo}/>
                </Nav>
                <Nav className="nav__search">
                    <Form className="d-flex">
                        <Form.Control 
                        type="search" 
                        placeholder="What do you want to watch?" 
                        className="me-2"
                        aria-label="Search"/>
                    </Form>
                    
                </Nav>
                <Nav className="nav__button">
                    <Button variant="outline-danger">Login</Button>
                    <Button variant="danger">Register</Button>
                </Nav>
                {/* <Navbar.Brand>
                    Saass
                </Navbar.Brand>
                <Navbar.Brand>
                    Saass
                </Navbar.Brand>
                <Navbar.Brand>
                    <Row>
                        <Col>Asa</Col>
                        <Col>Asa</Col>
                    </Row>
                </Navbar.Brand> */}
                {/* <Navbar.Brand>
                    <Link to='/'><img src={Logo}/></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                
                    <Nav>
                        <Button variant="outline-danger" ><span>Login</span>
                            
                        </Button>
                        <Button variant="danger"><span>Register</span></Button>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>

        </Navbar>
        </header>
        
    )

}

export default NavBar