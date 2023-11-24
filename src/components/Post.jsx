import React from "react";
import { useUser } from "./UserContext";

const Post = ({ post }) => {
  const { user } = useUser();

  const isAuthor = user && post.authorId === user.id;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {isAuthor && <p>Ви автор цього поста</p>}
    </div>
  );
};

export default Post;
