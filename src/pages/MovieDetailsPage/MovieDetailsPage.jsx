import { useState, useEffect, Suspense } from "react";
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/utils/fetchApi';
import { Loader } from "components/Loader/Loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Text, List, Item, LinkNav } from './MovieDetailsPage.styled';
import { Notification } from "components/Notification/Notification";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getMovie();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const getMovie = async () => {
    try {
      setIsLoading(true);
      const response = await getMovieDetails(movieId);
      setMovie(response);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {error &&
        <LinkNav to="/" end>
          <Notification message={"Sorry, try again. Go to the main page."} />
        </LinkNav>}
      {isLoading && <Loader />}
      {!error && movie && !isLoading &&
        <>
          <MovieDetails movie={movie} />
          <Text>Additional information</Text>
          <List>
            <Item>
              <LinkNav to="cast" state={{ from: location?.state?.from }} >Cast</LinkNav>
            </Item>
            <Item>
              <LinkNav to="reviews" state={{ from: location?.state?.from }}>Reviews</LinkNav>
            </Item>
          </List>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>}
    </>
  );
};

export default MovieDetailsPage;