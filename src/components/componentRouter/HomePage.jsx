import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(128 132 204)",
        borderRadius: "10px",
      }}
    >
      <h1>Products</h1>
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <div
            style={{
              backgroundColor: "rgb(57 60 113)",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            <h3 style={{ fontSize: "30px" }}>{product.title}</h3>
            <img
              style={{ borderRadius: "10px" }}
              src={product.thumbnail}
              alt={product.title}
            />
            <p style={{ color: "white", fontSize: "20px" }}>
              Price: ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
