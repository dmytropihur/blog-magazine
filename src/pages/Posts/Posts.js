import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PostsList } from "../../components/PostsList";
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
      {!posts.length ? <div>The list of posts is empty</div> : <PostsList />}
      {error !== "null" && <div>{error}</div>}
    </>
  );
};
