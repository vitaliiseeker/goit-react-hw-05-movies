import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchbarMovies } from "components/SearchbarMovies/SearchbarMovies";
import { searchMovies } from "components/utils/fetchApi";
import { Notification } from "components/Notification/Notification";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [NotificationText, setNotificationText] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("query") ?? "";

  useEffect(() => {
    if (search) {
      getMovies();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const response = await searchMovies(search);

      if (!response.length) {
        setNotificationText("Sorry, there are no movies matching your search query. Please try again");
      }
      setMovies(response);
    } catch (error) {
      setError("Error");
    } finally {
      setIsLoading(false);
    }
  }

  const onSerchMovies = (e) => {
    e.preventDefault();
    setNotificationText("");
    const query = e.target.input.value.trim();
    setSearchParams(query !== "" ? { query } : {});
    setMovies([]);

    if (!query) {
      setNotificationText("Enter data in the search field");
      return;
    }

    if (search !== query) {
      setError(null);
    };
  }

  return (
    <>
      {error && <Notification message={error} />}
      {isLoading && <Loader />}
      <SearchbarMovies onSubmit={onSerchMovies} />
      {NotificationText && <Notification message={NotificationText} />}
      {!error && <MoviesList movies={movies} />}

    </>
  );
};

export default MoviesPage;
