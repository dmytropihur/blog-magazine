import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../Post/Post";
import { List } from "./PostsList.styled";

export const PostsList = ({ $display }) => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <List as="ul" $display={$display}>
      {posts.map((post) => {
        return <Post $display={$display} post={post} key={post._id} />;
      })}
    </List>
  );
};
