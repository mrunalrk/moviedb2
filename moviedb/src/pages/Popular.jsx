import React, { useState, useEffect } from 'react';
import PopularStyle from '../styles/PopularStyle.module.css';
import axios from 'axios';
import { createMovieUrl, log } from '../helper';
import MovieCard from '../components/MovieCard';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Popular = () => {

  const { id } = useParams();
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(Number(id) || 1);
  const navigate = useNavigate();
  const totalPages = 500;

  useEffect(() => {
    debugger;
    const url = createMovieUrl('/popular') + '&page=' + page;

    axios.get(url)
    .then(res => {
      debugger;
      if(res.status === 200){
        debugger;
        setPopularMovies(res.data.results);
        log(res.data.results);
      } 
    })
    .catch(error => {
      log(error);
    });
  }, [page]);

  const handlePageClick = (newPage) => {
    setPage(newPage);
    navigate(`/popular/${newPage}`);
  };

  return (
    <div>
      <div className={PopularStyle.movieList}>
        {
          popularMovies.map(movie =>{
            return <MovieCard key={movie.id} movie={movie}/>
          })
        }
      </div>

      <Pagination page={page} totalPages={totalPages} handlePageClick={handlePageClick}/>

    </div>
  )
}

export default Popular
