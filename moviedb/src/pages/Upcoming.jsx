import React, { useState, useEffect } from 'react';
import PopularStyle from '../styles/PopularStyle.module.css';
import axios from 'axios';
import { createMovieUrl, log } from '../helper';
import MovieCard from '../components/MovieCard';
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';

const Upcoming = () => {

    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(Number(id) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        debugger;
        const url = createMovieUrl('/upcoming') + '&page=' + page;

        axios.get(url)
        .then(res => {
            debugger;
            if(res.status === 200){
            debugger;
            setTotalPages(res.data.total_pages);
            setMovies(res.data.results);
            log(res.data.results);
            } 
        })
        .catch(error => {
            log(error);
        });
    }, [page]);

    const handlePageClick = (newPage) => {
        setPage(newPage);
        navigate(`/upcoming/${newPage}`);
    };

  return (
    <div>
      <div className={PopularStyle.movieList}>
        {
          movies.map(movie =>{
            return <MovieCard key={movie.id} movie={movie}/>
          })
        }
      </div>

      <Pagination page={page} totalPages={totalPages} handlePageClick={handlePageClick}/>
    </div>
  )
}

export default Upcoming
