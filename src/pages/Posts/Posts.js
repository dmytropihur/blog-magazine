import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/postsReducer";

export const Posts = () => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (status === "loading") {
    return <Spinner animation="border" />;
  }

  return (
    <>
      {!posts.length ? (
        <div>The list of posts is empty</div>
      ) : (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.title}>
                <div>{post.title}</div>
                <div>{post.image}</div>
                <div>{post.description}</div>
              </li>
            );
          })}
        </ul>
      )}
      {error !== "null" && <div>{error}</div>}
    </>
  );
};
