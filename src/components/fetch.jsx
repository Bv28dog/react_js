import { useEffect, useState } from "react";

export const Posts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const postsArray = Object.values(data);

        setProducts(postsArray[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Products : </h2>
      <ul>
        {products.length > 0 ? (
          products.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};
