import React, { useState } from "react";
import {Container, Row, Col, Navbar, Nav, Form, Button, Modal} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { faMagnifyingGlass as SearchIcon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-regular-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Logo } from '../../asset/index_image';
import './navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Login from "../modal/login";
// import Register from "../modal/register";



const NavBar = () => {

    const navigate = useNavigate();

    const searchRes = async (e) => {
        e.preventDefault()
        let data = e.target[0].value;

        navigate(`/search/${data}`)
    }

    const [show, setShow] = useState(false)
    const [showReg, setShowReg] = useState(false)
    const handleCloseReg = () => setShowReg(false)
    const handleOpenReg = () => setShowReg(true)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)


    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [password, setPassword] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    // const [passConfirm, setPassConfirm] = useState("")

    const handleSubmitLogin = async () => {
        console.log(email)
        console.log(password)
        try {
            const res = await axios.post('https://notflixtv.herokuapp.com/api/v1/users/login', {
            email: email,
            password: password
        });
        console.log(res.data.data)
        localStorage.setItem('user', JSON.stringify(res.data.data.token))
        setEmail("")
        setPassword("")
        setShow(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitReg = async () => {
        try {
            const response = await axios.post('https://notflixtv.herokuapp.com/api/v1/users', {
                first_name: firstName,
                last_name: lastName,
                email: emailReg,
                password: passwordReg,
                password_confirmation: passwordReg
            })
            console.log(response.data.data)
            localStorage.setItem('user', JSON.stringify(response.data.data.token))
            setFirstName("")
            setLastName("")
            setEmailReg("")
            setPasswordReg("")
            setShowReg(false)
        } catch (error) {
            console.log(error)
        }
    }

    // const [loginModal, setLoginModal] = useState(false)
    // const [registerModal, setRegisterModal] = useState(false)
    // const handleLogin = () => setLoginModal(false)
    // const handleRegister = () => setRegisterModal(false)

    
    return (
        <Navbar bg="transparant">
            <Container>
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
                    <Button variant="outline-danger" onClick={handleShow}>Login</Button>

                    <Modal
                    size="md"
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{fontSize: '16px'}}>Log in Your Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}/>
                                </Form.Group>

                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control 
                                    style={{border: '1px solid rgba(153, 153, 153, 1)', color:'black', borderRadius: '9999px'}}
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer style={{justifyContent: 'flex-start'}}>
                            <Button type="submit" variant="danger" onClick={handleSubmitLogin}>Login</Button>
                        </Modal.Footer>
                    </Modal>

                    <Button variant="danger" onClick={handleOpenReg}>Register</Button>
                    <Modal
                    size="md"
                    show={showReg}
                    onHide={handleCloseReg}
                    backdrop="static"
                    keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title style={{fontSize: '16px'}}>Create Account</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}
                                    />
                                </Form.Group>

                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={(e) => setLastName(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}
                                    />
                                </Form.Group>

                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={(e) => setEmailReg(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}
                                    />
                                </Form.Group>

                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPasswordReg(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}
                                    />
                                </Form.Group>

                                <Form.Group style={{marginBottom: '1.5rem'}}>
                                    <Form.Control
                                    type="password"
                                    placeholder="Password Confirmation"
                                    onChange={(e) => setPasswordReg(e.target.value)}
                                    style={{borderRadius: '9999px',border: '1px solid rgba(153, 153, 153, 1)', color:'black'}}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer style={{justifyContent: 'flex-start'}}>
                        <Button variant="danger" onClick={handleSubmitReg}>Register Now</Button>
                        </Modal.Footer>
                    </Modal>
                </Nav>
                
            </Container>

        </Navbar>
    )
}

export default NavBar