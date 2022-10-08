import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { faStar as Rating } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay as PlayBtn} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Carousel, Container, Modal} from 'react-bootstrap'
import Swipers from '../../component/Swipers/swipers'
import { background1 } from '../../asset/index_image'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

const Detail = () => {
    const { id } = useParams()
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const [actors, setActors] = useState([])
    const [trailer, setTrailer] = useState([])
    const [show, setShow] = useState(false)

    const closeModal = () => setShow(false) 
    const showModal = () => setShow(true)
    
    const loadData = async () => {
        try {
            const dataMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a2940e397cdc84f3a8a5619d3d65b9c5`)
            const dataActor = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a2940e397cdc84f3a8a5619d3d65b9c5`)
            const dataReview = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a2940e397cdc84f3a8a5619d3d65b9c5`)
            const dataTrailer = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a2940e397cdc84f3a8a5619d3d65b9c5`)
            setMovies(dataMovie.data)
            setActors(dataActor.data.cast.splice(0, 10))
            setReviews(dataReview.data)
            setTrailer(dataTrailer.data.results[0].key)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <header>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                    <div className="image__banner">
                    <img
                    className="d-block w-100"
                    src={background1}
                    alt="First slide"
                    />
                </div>
                    </Carousel.Item>
                    <Carousel.Caption>
                        <Container>
                            <div>
                                <h1>{movies.original_title}</h1>
                                <p>{movies.overview}</p>
                                <p>
                                    <FontAwesomeIcon icon={Rating}/> {movies.vote_average} / 10
                                </p>
                                <Button variant="danger" onClick={showModal}>
                                    <FontAwesomeIcon icon={PlayBtn}/> Watch Trailer
                                </Button>
                                <Modal show={show} onHide={closeModal} centered>
                                    <div>
                                        <iframe
                                        width='560'
                                        height='315'
                                        src={`https://www.youtube.com/embed/${trailer}`}
                                        title="YouTube video player"
                                        frameBorder='0'
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media: gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel>
            </header>
            <section>
                <Container>
                    <div>
                        <h2>Actor</h2>
                        <Swipers actor={actors}/>
                    </div>
                    <div>
                        <h2>Comment</h2>
                        <Swipers review={reviews.results}/>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Detail