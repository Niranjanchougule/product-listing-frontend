import { useEffect, useState } from "react";
import Filter from "../components/product-list/Filter";
import ProductItem from "../components/product-list/ProductItem";
import "./ProductList.css";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  useEffect(() => {
    const loginCategoryid = localStorage.getItem("id") || 1;
    let filterString = selectedFilters.join("&brand=");

    if (filterString) {
      filterString = "&brand=" + filterString;
    }
    fetch(
      `http://localhost:5000/product?category=${loginCategoryid}${filterString}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (productObjectArray) {
        setProductList(productObjectArray);
      });
  }, [selectedFilters]);

  const view = [];
  for (let i = 0; i < productList.length; i++) {
    view.push(<ProductItem product={productList[i]} />);
  }
  function updateSelectedFilter(brandName, isChecked) {
    if (isChecked) {
      // add brandname in selectedFilters
      setSelectedFilters([...selectedFilters, brandName]);
    } else {
      // remove brandname from selectedFilters
      const updatedFilters = selectedFilters.filter(
        (item) => item !== brandName
      );
      setSelectedFilters(updatedFilters);
    }
  }
  return (
    <div className="product-list-page">
      <div>
        <Filter updateSelectedFilters={updateSelectedFilter} />
      </div>
      <div className="productList-contanier">{view}</div>
    </div>
  );
};
export default ProductList;
