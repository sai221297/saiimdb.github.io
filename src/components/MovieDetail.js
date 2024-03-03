import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const MovieDetail = () => {
    const [movieDetail,setMovieDetail] = useState({});
    const movieId = useParams();
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=53eafc90abf7f2884c7c8e01d0a1efab`)
        .then((res) => res.json())
        .then((data) => setMovieDetail(data))
    },[])
    return (
        <React.Fragment>
            <h1>Movie Details</h1>
            <hr />
            <h2>{movieDetail.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} />
            <p>{movieDetail.overview}</p>
        </React.Fragment>
    )
}

export default MovieDetail;