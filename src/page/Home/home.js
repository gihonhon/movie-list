import React, { useState, useEffect } from "react";
import { imgSlide1, imgSlide2, imgSlide3 } from '../../asset/index_image'
import Swipers from '../../component/Swipers/swipers'
import { Carousel, Button, CarouselItem, Container, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay as PlayBtn } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight as ArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const Home = () => {
    const apiv3 = 'a2940e397cdc84f3a8a5619d3d65b9c5'

    const [popular, setPopular] = useState([])
    const [upcoming, setUpComing] = useState([])
    const [category, setCategory] = useState([])

    const [show, setShow] = useState(false)

    const closeModal = () => setShow(false) 
    const showModal = () => setShow(true)

    const loadData = async () => {
        try {
            await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
                params: {
                    api_key: apiv3,
                },
            }).then((response) => {
                setPopular(response.data.results)
            })

            await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
                params: {
                    api_key: apiv3,
                },
            }).then((response) => {
                setUpComing(response.data.results)
            })

            await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
                params: {
                    api_key: apiv3,
                },
            }).then((response) => {
                setCategory(response.data.genres)
            })

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
                <Carousel>
                    <Carousel.Item>
                    <div className="image__banner">
                        <img
                        className="d-block w-100"
                        src={imgSlide1}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Container>
                            <div>
                                <h1>Doctor Strange in the Multiverse of Madness</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Button variant="danger" onClick={showModal}>
                                    <FontAwesomeIcon icon={PlayBtn}/> Watch Trailer
                                </Button>
                                <Modal show={show} onHide={closeModal} centered>
                                    <div>
                                    <iframe width="885" height="498" src="https://www.youtube.com/embed/aWzlQ2N6qqg" title="Marvel Studios' Doctor Strange in the Multiverse of Madness | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </Container>
                    </Carousel.Caption>
                    </Carousel.Item>

                    {/** */}

                    <Carousel.Item>
                    <div className="image__banner">
                        <img
                        className="d-block w-100"
                        src={imgSlide2}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Container>
                            <div>
                                <h1>Moon Knight</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Button variant="danger" onClick={showModal}>
                                    <FontAwesomeIcon icon={PlayBtn}/> Watch Trailer
                                </Button>
                                <Modal show={show} onHide={closeModal} centered>
                                    <div>
                                    <iframe width="885" height="498" src="https://www.youtube.com/embed/x7Krla_UxRg" title="Marvel Studios’ Moon Knight | Official Trailer | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </Container>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                    <div className="image__banner">
                        <img
                        className="d-block w-100"
                        src={imgSlide3}
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <Container>
                            <div>
                                <h1>Jurassic World Dominion</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <Button variant="danger" onClick={showModal}>
                                    <FontAwesomeIcon icon={PlayBtn}/> Watch Trailer
                                </Button>
                                <Modal show={show} onHide={closeModal} centered>
                                    <div>
                                    <iframe width="885" height="498" src="https://www.youtube.com/embed/fb5ELWi-ekk" title="Jurassic World Dominion - Official Trailer [HD]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </Modal>
                            </div>
                        </Container>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>
            <section>
                <Container>
                    <div>
                        <h2>Popular Movie</h2>
                        <p>See All Movies <FontAwesomeIcon icon={ArrowRight}/></p>
                    </div>
                    <Swipers movie={popular}/>
                    <div>
                        <h2>Browse by Category </h2>
                        <p>See All Movies <FontAwesomeIcon icon={ArrowRight}/></p>
                    </div>
                    <Swipers cate={category}/>
                    <Swipers movie={upcoming}/>
                </Container>
            </section>
        </div>
    )
}

export default Home