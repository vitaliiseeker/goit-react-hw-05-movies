import axios from "axios";
import PropTypes from 'prop-types';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const KEY = "e5b22da478d64a4856b7de5bb232688f";

export const getTrendingMovies = async () => {
  const response = await axios(`/trending/movie/day`, {
    params: {
      api_key: KEY,
    }
  });
  console.log(response.data.results);
  return response.data.results;
}

export const searchMovies = async (query) => {
  const response = await axios(`/search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    }
  });
  return response.data.results;
}

export const getMovieDetails = async (movieId) => {
  const response = await axios(`/movie/${movieId}`, {
    params: {
      api_key: KEY,
    }
  });
  return response.data;
}

export const getMovieDetailsCredits = async (movieId) => {
  const response = await axios(`/movie/${movieId}/credits`, {
    params: {
      api_key: KEY,
    }
  });
  return response.data.cast;
}

export const getMovieDetailsReviews = async (movieId) => {
  const response = await axios(`/movie/${movieId}/reviews`, {
    params: {
      api_key: KEY,
    }
  });
  return response.data.results;
}

searchMovies.propTypes = {
  query: PropTypes.string.isRequired,
}

getMovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
}

getMovieDetailsCredits.propTypes = {
  movieId: PropTypes.string.isRequired,
}

getMovieDetailsReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
}