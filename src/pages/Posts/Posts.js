import React from "react";
import { Spinner } from "react-bootstrap";
import { URL } from "../../constants/constants";
import { useFetch } from "../../hooks/useFetch";

export const Posts = () => {
  const { data, loading, error } = useFetch(`${URL}/posts`);

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      {!data.length ? (
        <div>The list of posts is empty</div>
      ) : (
        <ul>
          {data.map((post) => {
            return (
              <li key={post.title}>
                <div>{post.title}</div>
                <div>{post.img}</div>
                <div>{post.title}</div>
              </li>
            );
          })}
        </ul>
      )}
      {error && <div>{error}</div>}
    </>
  );
};
