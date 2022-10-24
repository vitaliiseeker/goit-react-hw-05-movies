import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetailsCredits } from 'components/utils/fetchApi';
import { List, Item, Imgbox } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getCast();
    };
  }, [movieId]);

  const getCast = async () => {
    try {
      setIsLoading(true);
      const response = await getMovieDetailsCredits(movieId);

      setCast(response);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {error && <p>Oops!</p>}
      {isLoading && <Loader />}
      <List>
        {cast.map(({ credit_id, name, profile_path, character }) => (
          <Item key={credit_id}>
            <Imgbox>
              <img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : ""} alt={name} width="120" />
              {/* {profile_path && <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="120" />} */}
            </Imgbox>
            <>
              <h3>{name}</h3>
              <p>{character}</p>
            </>
          </Item>
        ))}
      </List>
    </>
  );
};
