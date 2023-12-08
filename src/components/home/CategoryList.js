import { useEffect, useState } from "react";

import "./CategoryList.css";
const CategoryItem = (props) => {
  function showCategoryButtonClick(event) {
    event.preventDefault();
    let element = event.target.dataset;
    localStorage.setItem("id", element.categoryid);
    window.location = "/product-list";
  }
  return (
    <div className="category-container" id="productid">
      <div className="category-image-container">
        <img
          type="image"
          height="auto"
          width="200"
          src={props.category.image}
          alt={props.category.name}
        />
      </div>
      <div>{props.category.name}</div>
      <div className="show" id="showAc ">
        <button
          class="btn btn-primary rounded-pill px-3 py-0"
          type="button"
          data-categoryid={props.category.id}
          onClick={showCategoryButtonClick}
        >
          Show
        </button>
      </div>
    </div>
  );
};

function CategoryList(props) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setCategoryList(data);
      });
  }, []);

  const view = [];
  for (let i = 0; i < categoryList.length; i++) {
    view.push(
      <CategoryItem category={categoryList[i]} key={categoryList[i].id} />
    );
  }
  return <>{view}</>;
}

export default CategoryList;
