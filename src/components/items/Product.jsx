import React from "react";

const Product = ({ headline, description, image }) => {
  return (
    <div
      className="product-wrapper col-md-6 w-35 text-center my-4 text-white overflow-hidden"
      style={{position: "relative"}}
    >
      <img className="product-image" src={image}/>
      <div className="product-content my-3 py-3">
        <h2 className="product-headline display-5">
          <span>{headline}</span>
        </h2>
        <p className="product-description lead">
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
