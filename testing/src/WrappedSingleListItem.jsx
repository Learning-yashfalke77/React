import React from "react";
import PropTypes from "prop-types";

const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? "green" : "red" }}
      onClick={onClickHandler(index)}
    >
      {text}
    </li>
  );
};

// // shapeof is not there instead shape is there

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.number,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default WrappedSingleListItem;
