import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createSingleMovieUrl, createMovieCastUrl, log } from '../helper';
import SingleMovieStyle from '../styles/SingleMovieStyle.module.css';
import { constants } from '../env';

const SingleMovie = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieDetails = async() => {
    debugger;
    const url = createSingleMovieUrl(id);
    axios.get(url)
      .then(res =>{
        debugger;
        if(res.status === 200){
            setMovie(res.data);
        }
      })
      .catch(error =>{
         log(error);
      });
  };

  const getCasts = async() => {
    debugger;
    const url = createMovieCastUrl(id);
    axios.get(url)
      .then(res =>{
        debugger;
        if(res.status === 200){
            setCasts(res.data.cast);
        }
      })
      .catch(error =>{
         log(error);
      });
  };

  useEffect(() => {
    setLoading(true);
    let isMounted = true;

    const fetchData = async () => {
      await getMovieDetails();
      await getCasts();
      if (isMounted) {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>No movie data found!</p>;

  return (
<div>

    <div className={SingleMovieStyle.singleMovieContainer}>

      <div className={SingleMovieStyle.top}>
        <div className={SingleMovieStyle.leftSection}>

            <div className={SingleMovieStyle.topSection}>
                <img
                src={`${constants.REACT_APP_MOVIE_IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                className={SingleMovieStyle.moviePoster}
                />
                <div className={SingleMovieStyle.movieDetails}>
                    <h1>{movie.title}</h1>
                    <p className={SingleMovieStyle.rating}>Rating: {movie.vote_average.toFixed(1)}</p>
                    <p className={SingleMovieStyle.info}>
                        {movie.runtime} min | {movie.genres.map((genre) => genre.name).join(', ')}
                    </p>
                    <p className={SingleMovieStyle.releaseDate}>Release Date: {movie.release_date}</p>
                </div>
            </div>

            <div className={SingleMovieStyle.bottomSection}>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
            </div>

        </div>

        <div className={SingleMovieStyle.rightSection}>
            <img
            src={`${constants.REACT_APP_MOVIE_IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className={SingleMovieStyle.backdropImage}
            />
        </div>
      </div>

      <div className={SingleMovieStyle.castContainer}>
        <h3>Cast</h3>
        <div className={SingleMovieStyle.movieCast}>
            {casts?.map((member, index) => (
            <div key={index} className={SingleMovieStyle.castMember}>
                <img
                src={`${constants.REACT_APP_MOVIE_IMAGE_BASE_URL}${member.profile_path}`}
                alt={member.name}
                className={SingleMovieStyle.castImage}
                />
                <p>{member.name}</p>
                <p>Character: {member.character}</p>
            </div>
            ))}
        </div>
      </div>

    </div>
      
</div>
  )
}

export default SingleMovie
