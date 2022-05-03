import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../store/postsReducer";
import { PostsList } from "../../components/PostsList";
import { Container } from "../../components/Container";
import { Spinner } from "react-bootstrap";

export const UserPosts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getMyPosts());
  }, []);

  if (status === "loading") {
    return <Spinner animation="border" />;
  }
  return (
    <>
      {!posts.length ? (
        <div>The list of posts is empty</div>
      ) : (
        <Container>
          <PostsList $display="list" />
        </Container>
      )}
      {error !== "null" && <div>{error}</div>}
    </>
  );
};
