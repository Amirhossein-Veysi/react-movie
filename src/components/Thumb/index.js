import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Styles
import { Image, Wrapper } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, overview }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Wrapper clickable={clickable}>
          <Image src={image} alt="movie-thumb" />
          <div>
            <p>{overview}</p>
          </div>
        </Wrapper>
      </Link>
    ) : (
      <Image src={image} alt="mvie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
