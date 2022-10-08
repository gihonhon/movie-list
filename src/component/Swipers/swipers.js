import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "react-bootstrap";
import { faStar as Rating } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "swiper/css";
import "swiper/css/pagination";
import './swipers.css';


const Swipers = (props) => {
    const navigate = useNavigate()

    const { movie, cate, review, actor } = props

    if(movie) {
        return (
            <>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true
            }}
            className="mySwiper"
            >
                {movie && movie.map((result) => {
                    return (
                        <SwiperSlide key={result.id} onClick={() => navigate(`/movie/${result.id}`)}>
                            <div className="movie-card">
                                <img className="image-card" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}/>
                                <div className="movie-info">
                                    <h2>{result.original_title}</h2>
                                    <span><FontAwesomeIcon style={{color:'gold'}} icon={Rating}/>{result.vote_average} / 10</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </>
        )
    }

    if(cate) {
        return (
            <>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            className="mySwiper">
                {cate && cate.map((result) => {
                    return (
                        <SwiperSlide key={result.id} onClick={() => navigate(`/movie/${result.name}`)}>
                            <Button variant="outline-danger">{result.name}</Button>
                        </SwiperSlide>

                    )
                })}
            </Swiper>
            </>
        )
    }

    if(actor) {
        return (
            <>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true
            }}
            className="mySwiper">
                {actor && actor.map((result) => {
                    return (
                        <SwiperSlide key={result.id}>
                            <div className="movie-card">
                                    <img className="image-card" src={`https://image.tmdb.org/t/p/w500/${result.profile_path}`}/>
                                    <div className="movie-info">
                                        <h2>{result.name}</h2>
                                        <p>{result.character}</p>
                                    </div>
                                </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </>
        )
    }

    if(review) {
        return (
            <>
            <Swiper
            slidesPerView={2}
            spaceBetween={40}
            pagination={{
                clickable: true
            }}
            className="mySwiper">
                {review.length > 0 ? (
                    review.map((result) => {
                        return (
                            <SwiperSlide key={result.id}>
                                <div>
                                    <div>
                                        <span>
                                            <img src={`https://ui-avatars.com/api/?name=${result.author}`}/>
                                        </span>
                                        <span>{result.author}</span>
                                    </div>
                                    <p>
                                        {result.author_details.rating === null ? (
                                            "empty"
                                        ) : (
                                            <div>
                                                <FontAwesomeIcon icon={Rating}/> {result.author_details.rating}
                                            </div>
                                        )}
                                    </p>
                                    <h1>{result.content}</h1>
                                    <p></p>
                                </div>
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <div>
                        <h1>There is no data</h1>
                    </div>
                )}
            </Swiper>
            </>
        )
    }

    
}

export default Swipers