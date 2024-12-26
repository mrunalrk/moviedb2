import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createSearchMovieUrl, log } from '../helper';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import SearchStyle from '../styles/SearchStyle.module.css';
import Pagination from '../components/Pagination';

const Search = () => {

    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        debugger;
        const url = createSearchMovieUrl(query) + '&page=' + page;
    
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
      }, [page, query]);

      const handlePageClick = (newPage) => {
        setPage(newPage);
      };

  return (
    <div>

      <div className={SearchStyle.movieList}>
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

export default Search
