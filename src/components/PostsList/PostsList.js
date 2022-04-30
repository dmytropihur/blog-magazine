import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../Post/Post";
import { List } from "./PostsList.styled";

export const PostsList = () => {
  const { posts } = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <List as="ul">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </List>
  );
};
