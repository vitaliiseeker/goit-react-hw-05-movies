import { useLocation } from 'react-router-dom';
import { List, Item, LinkStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, title }) => (
          <Item key={id}>
            <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </LinkStyled>
          </Item>
        ))}
      </List>
    </>
  )
}