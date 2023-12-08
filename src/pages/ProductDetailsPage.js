import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";
import { useEffect, useState } from "react";

function ProductDetailsPage(props) {
  let params = useParams();
  const [productDetails, setProductDetails] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${params.productId}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProductDetails(data);
      });
  }, []);

  if (productDetails == null) {
    return <div>Loading...</div>;
  }

  const highlights = [];
  for (let i = 0; i < productDetails.highlights.length; i++) {
    highlights.push(<li>{productDetails.highlights[i]}</li>);
  }
  return (
    <div className="productbox" id="productname">
      <div class="card">
        <img
          className="product-detail-view-img"
          src={productDetails.image}
          alt={productDetails.name}
        />
      </div>
      <div className="price">
        <div>{productDetails.name}</div>
        <div className="pricefond">{productDetails.price}</div>
        <div id="renderList">
          <ul>{highlights}</ul>
        </div>
        <div>
          <div className="productdetailbutton">
            <button type="button" className="btn btn-primary">
              ADD TO CART
            </button>
            <button type="button" className="btn btn-secondary">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
