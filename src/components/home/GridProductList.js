import { useEffect, useState } from "react";
import "./GridProductList.css";
import { Link } from "react-router-dom";
const ProductGridItem = (props) => {
  return (
    <div className="grid-product-css-parent" id={props.product.id}>
      <Link to={`/product-details/${props.product.id}`}>
        <img
          type="image"
          width="auto"
          height="90"
          src={props.product.image}
          alt={props.product.name}
        />
      </Link>

      <div className="grid-product-name">{props.product.name}</div>
      <p>{props.product.price}</p>
    </div>
  );
};

function GridProductList(props) {
  const [gridProductList, setGridProductList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setGridProductList(data);
      });
  }, []);

  const productGridListView = [];
  for (let i = 0; i < gridProductList.length; i++) {
    productGridListView.push(
      <ProductGridItem
        product={gridProductList[i]}
        key={gridProductList[i].id}
      />
    );
  }
  return <>{productGridListView}</>;
}

export default GridProductList;
