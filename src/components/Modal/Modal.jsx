import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { Overlay, ModalStyled } from "./Modal.styled";

export const Modal = ({ image: { src, alt }, closeModal }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    }
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const loadHandler = () => {
    setLoaded(true);
  };

  return (
    <Overlay onClick={closeByBackdrop}>
      <ModalStyled>
        <img
          src={src}
          alt={alt}
          onLoad={loadHandler}
          style={{ display: loaded ? "block" : "none" }}
        />
        {!loaded && <Loader />}
      </ModalStyled>
    </Overlay>
  );
}

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
}
