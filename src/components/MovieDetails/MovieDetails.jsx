import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Inner } from "./MovieDetails.styled";
import { Button } from "components/Button/Button";

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, release_date, poster_path, overview, tagline, vote_average, genres } = movie;

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}>
        Go back
      </Button>
      <Box>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300"
        />
        <Inner>
          <h2>{`${title} (${release_date?.slice(0, 4)})`}</h2>
          {tagline && <p>Tagline: {tagline}</p>}
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(e => e.name).join("  ")}</p>
        </Inner>
      </Box>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  tagline: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.object),
}