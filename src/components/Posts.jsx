import React, { useState, useEffect } from "react";
import { useUser } from "./UserContext";
import Post from "./Post";

const Posts = () => {
  const { user, loginUser } = useUser();
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/posts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          const postsData = await response.json();
          setUserPosts(postsData);
        } else {
          throw new Error("Не вдалося отримати список постів");
        }
      } catch (error) {
        console.error("Помилка отримання постів:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  if (!user) {
    return (
      <div>
        <p>Будь ласка, увійдіть для перегляду контенту</p>
        <button onClick={user && user.loginUser}>Увійти2</button>
      </div>
    );
  }

  if (isLoading) {
    return <p>Завантаження...</p>;
  }

  return (
    <div>
      {userPosts.map((post) => {
        if (post.authorId === user.id) {
          return <Post key={post.id} post={post} />;
        }
        return null;
      })}
    </div>
  );
};

export default Posts;
