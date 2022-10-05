import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const CarouselSlide = () => {

    const [popular, setPopular] = useState([])

    const loadMovie = async () => {
        const params = {page : 1}

        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular/${params}`)
            setPopular(response.results.slice(1, 3))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        loadMovie()
    }, [])

    // useEffect( () => {
    //     axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
    //         params: {
    //             api_key: process.env.REACT_APP_TMDB_KEY,
    //             page: 1
    //         }
    //     }).then((response) => {
    //         setPopular(response.data.results.slice(1, 3))
    //     })
    // }, [])

    return (
        <Carousel>
            {popular.map((item, index) => {
                return (
                    <Carousel.Item>
                <img
                className="d-block w-100"
                src={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
                )
            })}
            
        </Carousel>
    )
}

export default CarouselSlide