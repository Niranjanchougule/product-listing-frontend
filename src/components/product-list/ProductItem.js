import { Link } from "react-router-dom";
import "./ProductItem.css";

function ProductItem(props) {
  const highlights = [];
  for (let i = 0; i < props.product.highlights.length; i++) {
    highlights.push(<li>{props.product.highlights[i]}</li>);
  }

  return (
    <div className="productbox" id="productname">
      <div>
        <Link to={`/product-details/${props.product.id}`}>
          <img
            src={props.product.image}
            width="auto"
            height="150px"
            alt={props.product.name}
          />
        </Link>
      </div>
      <div className="price">
        <div>
          <Link to={`/product-details/${props.product.id}`}>
            {props.product.name}
          </Link>
        </div>
        <div className="pricefond">{props.product.price}</div>
        <div id="renderList">
          <ul>{highlights}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
