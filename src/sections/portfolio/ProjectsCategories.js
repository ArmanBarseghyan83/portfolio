import React from "react";
import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectsCategories = ({ categories, onChangeCategories }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (activeCat) => {
    setActiveCategory(activeCat);
    onChangeCategories(activeCat);
  };
  return (
    <div className="portfolio-categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onClick={changeCategoryHandler.bind(null, category)}
          className={
            category === activeCategory
              ? "btn cat-btn primary"
              : "btn cat-btn white"
          }
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
