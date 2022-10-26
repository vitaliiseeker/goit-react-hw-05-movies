import { useLocation } from 'react-router-dom';
import { List, Item, LinkStyled, Wrap } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              <Wrap>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                {title}
              </Wrap>
            </LinkStyled>
          </Item>
        ))}
      </List>
    </>
  )
}