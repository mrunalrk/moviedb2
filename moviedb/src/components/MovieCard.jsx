import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCardStyle from '../styles/MovieCardStyle.module.css';
import { constants } from '../env';

const MovieCard = ({movie}) => {
    const navigate = useNavigate();

    const navigateToMoviePage = () => {
        navigate(`/movie/${movie.id}`)
    };

  return (
    <div className={MovieCardStyle.card} onClick={navigateToMoviePage}>
        <img src={`${constants.REACT_APP_MOVIE_IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.vote_average}</p>
    </div>
  )
}

export default MovieCard
