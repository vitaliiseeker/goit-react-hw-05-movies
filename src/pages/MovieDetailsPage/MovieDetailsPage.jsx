import { Suspense } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from "components/Loader/Loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Text, List, Item, LinkNav } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const location = useLocation();
  return (
    <>
      <MovieDetails />
      {MovieDetails &&
        <>
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