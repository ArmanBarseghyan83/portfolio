import React from "react";

const CategoryButton = ({ category, onClick, className }) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <button className={className} onClick={clickHandler}>
      {category}
    </button>
  );
};

export default CategoryButton;
