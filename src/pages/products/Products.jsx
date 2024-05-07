import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/slices/MoviesThunk';

export default function Products() {
  const language = useSelector((state) => state.language.language);
  
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);



  
  return (
    <div dir={language === 'en' ? 'ltr' : 'rtl'}>
      <div className="container">
        <div className="row text-center my-5">
          {movies && movies.slice(0, 8).map((movie) => (
            <div className="col col-md-3" key={movie.id}>
              <img
                style={{ width: '300px' }}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/products/${movie.id}`}
              >
                <h3>{movie.title}</h3>
              </Link>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
