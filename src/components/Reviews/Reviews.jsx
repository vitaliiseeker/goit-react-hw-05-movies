import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetailsReviews } from 'components/utils/fetchApi';
import { Notification } from "components/Notification/Notification";
import { Loader } from 'components/Loader/Loader';
import { List, Item } from './Reviews.styled';



export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId) {
      getReviews();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const getReviews = async () => {
    try {
      setIsLoading(true);
      const response = await getMovieDetailsReviews(movieId);
      setReviews(response);
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
        {reviews.length > 0 ?
          (reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </Item>))) :
          (<Notification message={"We don't have any reviews for this movie"} />)}
      </List>
    </>
  );
};
