import PropTypes from 'prop-types';

export const mapper = images => {
  return (
    images.map(({ id, webformatURL, largeImageURL, tags }) => ({
      id, webformatURL, largeImageURL, tags
    }))
  )
}

mapper.propTypes = {
  images: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}