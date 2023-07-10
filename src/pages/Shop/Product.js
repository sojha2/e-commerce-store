import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const Product = ({ product }) => {
  const { id, name, price, image } = product;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img className="product-image" src={image} alt={`${name}`} />
      <div className="product-description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => {
          addToCart(id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
