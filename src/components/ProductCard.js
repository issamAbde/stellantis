import react from "react";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>${product.price}</div>
    </div>
  );
};

export default ProductCard;
