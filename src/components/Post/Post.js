import React, { useEffect, useState } from "react";
import { getUserById } from "../../api/getCurrentUser";
import {
  Author,
  Description,
  Img,
  Info,
  Item,
  Title,
  Wrapper,
  Button,
} from "./Post.styled";

export const Post = ({ post }) => {
  const [creator, setCreator] = useState(null);
  const { title, image, description, creatorId } = post;

  useEffect(() => {
    const fetch = async () => {
      const { firstName } = await getUserById(creatorId);
      setCreator(firstName);
    };

    fetch();
  }, []);
  return (
    <Item>
      <Img src={image}></Img>
      <Wrapper>
        <Info>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Author>
            Posted by {creator} on {}
          </Author>
        </Info>
        <Button>Continue reading</Button>
      </Wrapper>
    </Item>
  );
};
