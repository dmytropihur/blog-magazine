import axios from "axios";
import { useEffect, useState } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await axios
        .get(`${process.env.REACT_APP_DATABASE_URL}/posts`)
        .then((response) => response.data);
      setPosts(res);
      console.log(res);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div> }
      {posts ? (
        <ul>
          {posts.map((post) => {
            <li>
              <div>{post.title}</div>
              <div>{post.img}</div>
              <div>{post.title}</div>
            </li>;
          })}
        </ul>
      ) : (
        <div>The list of posts is empty</div>
      )}
    </>
  );
};
