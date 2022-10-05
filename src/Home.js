import React from "react";
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/navbar";
import CarouselSlide from "./components/carousel/carousel";

const Home = () => {
    return (
        <div className="container">
            <CarouselSlide/>
        </div>
    )
}

export default Home