import axios from "axios";
import PropTypes from 'prop-types';

axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "29859369-1fbaee8b518c313527d0ab1d2";

export const fetchApi = async (query, page, perPage) => {
  const response = await axios({
    params: {
      q: query,
      key: KEY,
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