import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetailsCredits } from 'components/utils/fetchApi';
import { List, Item } from './Cast.styled';
import Img from "../../images/uk.jpg";
// import { ReactComponent as Svg } from "../../images/uk.svg";


const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getCast();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {<img src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : Img} alt={name} width="180" height="270" />}
            {/* {profile_path ?
                (<img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width="120" />)
                : <Svg width="120" height="180" />} */}
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

export default Cast;
