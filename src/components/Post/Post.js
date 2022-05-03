import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUserById } from "../../api/getCurrentUser";
import { ROUTES } from "../../configs/routes";
import { deletePost } from "../../store/postsReducer";
import { format } from "date-fns";
import {
  Author,
  Description,
  Img,
  Info,
  Item,
  Title,
  Wrapper,
  Button,
  DeleteButton,
  EditButton,
  Flex,
} from "./Post.styled";
import { dateFormat } from "../../constants/constants";

export const Post = ({ post, $display }) => {
  const [creator, setCreator] = useState(null);
  const { _id, title, image, description, creatorId, createdAt } = post;
  const date = format(new Date(createdAt), `${dateFormat}`);
  const { posts, editPost } = ROUTES;
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (confirm("Submit deleting")) {
      dispatch(deletePost(_id));
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const { firstName } = await getUserById(creatorId);
      setCreator(firstName);
    };

    fetch();
  }, []);
  return (
    <Item $display={$display}>
      <Img src={image}></Img>
      <Wrapper>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Author>
            Posted by {creator} on {date}
          </Author>
        </Info>
        {$display === "grid" && (
          <Button to={`${posts}/${_id}`}>Continue reading</Button>
        )}
        {$display === "list" && (
          <Flex>
            <EditButton to={`${editPost}/${_id}`}>Edit</EditButton>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          </Flex>
        )}
      </Wrapper>
    </Item>
  );
};
