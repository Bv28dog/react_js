import React, { useState, useEffect, cloneElement } from "react";
import { useParams, Link } from "react-router-dom";

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(128 132 204)",
        borderRadius: "10px",
      }}
    >
      <Link
        style={{
          fontSize: "40px",
          backgroundColor: "rgb(57 60 113)",
          borderRadius: "15px",
        }}
        to="/"
      >
        Back
      </Link>
      <h2 style={{ fontSize: "30px", textAlign: "center" }}>{product.title}</h2>
      <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        {" "}
        Brand :{product.brand}
      </p>
      <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        Description :{product.description}
      </p>
      <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        discountPercentage :{product.discountPercentage}
      </p>
      <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>
        Price: ${product.price}
      </p>
      <p>
        {" "}
        <img
          style={{ borderRadius: "10px" }}
          src={product.thumbnail}
          alt={product.title}
        />
      </p>
    </div>
  );
};
