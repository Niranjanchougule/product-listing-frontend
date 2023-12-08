import { useEffect, useState } from "react";
import "./Filter.css";
function Filter(props) {
  const [brandList, setBrandList] = useState([]);

  useEffect(() => {
    const loginCategoryid = localStorage.getItem("id") || 1;
    fetch(`http://localhost:5000/product?category=${loginCategoryid}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (productList) {
        let brandArr = [];
        for (let i = 0; i < productList.length; i++) {
          brandArr.push(productList[i].brand);
        }
        let unique = brandArr.filter(
          (value, index, array) => array.indexOf(value) === index
        );
        setBrandList(unique);
      });
  }, []);

  function onCheckboxChange(e, brandName) {
    props.updateSelectedFilters(brandName, e.target.checked);
  }
  function renderbrandcheckbox(brandName, id) {
    return (
      <div className="checkbox">
        <div>
          <input
            type="checkbox"
            id={`brandid-${id}`}
            onChange={(e) => onCheckboxChange(e, brandName)}
          />
        </div>
        <div>
          <label for="brands">{brandName}</label>
        </div>
      </div>
    );
  }
  const view = [];
  for (let i = 0; i < brandList.length; i++) {
    view.push(renderbrandcheckbox(brandList[i], i));
  }

  return (
    <div className="filter-container">
      <div className="padding">
        <section>
          <h4>Brand Filters</h4>
          <div id="brandFilter">
            <form id="brandFilterForm" className="renderbrands">
              {view}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Filter;
