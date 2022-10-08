import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Carousel, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as Rating } from "@fortawesome/free-solid-svg-icons"
import { background1 } from '../../asset/index_image'
import Swipers from "../Swipers/swipers";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'


const Search = () => {
    const { que, category } = useParams()

    const [movie, setMovie] = useState([])
    const [cate, setCate] = useState([])

    const loadData = async (que) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a2940e397cdc84f3a8a5619d3d65b9c5&query=${que}`)
        setMovie(res.data.results)
    }

    const searchCate = async (category) => {
        const getMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a2940e397cdc84f3a8a5619d3d65b9c5&query=${category}`)
        const getList = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=a2940e397cdc84f3a8a5619d3d65b9c5&query=${category}`)
        setCate(getList.data.genres)
        setMovie(getMovie.data.results)
    }

    useEffect(() => {
        if(que) {
            loadData(que)
        } else {
            searchCate(category)
        }
    }, [que, category])

    return (
        <div>
            <Carousel indicators={false} controls={false}>
                <Carousel.Item>
                    <div className="images" style={{height: '60vh'}}>
                        <img className="d-block w-100 absolute" src={background1}/>
                    </div>
                    <Carousel.Caption>
                        <Container>
                            <div className="header text-start">
                                {category ? (
                                    <h1 className="header_text">Genre:{category}</h1>
                                ): (
                                    <h1 className="header-text">All Movies "{que}"</h1>
                                )}
                            </div>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="container result-text">
                {category ? (
                    <>
                    <h1 className="tittle-section">Browse by category {category}</h1>
                    <Swipers cate={category}/>
                    </>
                ):(
                    <h1 className="tittle-section">Search result "{que}"</h1>
                )}

                {movie.length > 0 ? (
                    <div>
                        {movie.map((result) => {
                            return (
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}/>
                                    <div>
                                        <h4>{result.original_title}</h4>
                                        <p><FontAwesomeIcon icon={Rating}/>{result.vote_average}/10</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h1>There not found</h1>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Search