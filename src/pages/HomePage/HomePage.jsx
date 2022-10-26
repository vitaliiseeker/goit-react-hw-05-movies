import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'components/utils/fetchApi';
import { MoviesList } from "components/MoviesList/MoviesList";
import { SubTitle } from './HomePage.styled';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {error && <p>Oops!</p>}
      {isLoading && <Loader />}
      {movies &&
        <>
          <SubTitle>Trending today</SubTitle>
          <MoviesList movies={movies} />
        </>}
    </>
  );
};

export default HomePage;
