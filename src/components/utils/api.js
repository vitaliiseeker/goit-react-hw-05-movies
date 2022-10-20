import axios from "axios";
import PropTypes from 'prop-types';

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie/";
const KEY = "e5b22da478d64a4856b7de5bb232688f";

export const fetchApi = async (query, page, perPage) => {
  const response = await axios({
    params: {
      q: query,
      api_key: KEY,
      image_type: "photo",
      orientation: "horizontal",
      per_page: perPage,
      page: page,
    }
  });
  return response.data;
}

fetchApi.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
}