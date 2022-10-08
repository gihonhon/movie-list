import React from "react";
import {Container, Row, Col, Navbar, Nav, Form, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from '../../asset/index_image';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const NavBar = () => {

    const navigate = useNavigate();

    const searchRes = async (e) => {
        e.preventDefault()
        let data = e.target[0].value;

        navigate(`/search/${data}`)
    }

    
    return (
        <Navbar bg="transparant">
            <Container fluid>
                <Nav style={{cursor: 'pointer'}}>
                    <img style={{marginLeft: '2rem'}} src={Logo} onClick={() => navigate('/')}/>
                </Nav>
                <Nav className="nav__search">
                    <Form className="d-flex" onSubmit={(e) => searchRes(e)}>
                        <Form.Control
                        type="text"
                        name="search"
                        aria-label="Search"
                        placeholder="What do you want to watch?"
                        />
                        <FontAwesomeIcon icon={SearchIcon}/>
                    </Form>
                </Nav>

                <Nav className="nav__button">
                    <Button variant="outline-danger">Login</Button>
                    <Button variant="danger">Register</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar