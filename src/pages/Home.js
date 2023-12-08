import CategoryList from "../components/home/CategoryList";
import PromoteProduct from "../components/home/PromoteProduct";
import GridProductList from "../components/home/GridProductList";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="category-list">
        <CategoryList />
      </div>
      <div>
        <PromoteProduct />
      </div>
      <div className="grid-items">
        <GridProductList />
      </div>
    </div>
  );
};

export default Home;
