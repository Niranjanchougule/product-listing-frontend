import "./Header.css";

const Header = () => {
  return (
    <div className="css1">
      <div className="css2">
        <div className="flipkardlogo">
          <img
            width="90"
            height="25"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart"
            title="Flipkart"
          />
        </div>
        <form className="css7">
          <input
            className="search"
            type="text"
            title="search bar"
            placeholder="Search for Products, Brands and More"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
