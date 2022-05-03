import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../configs/routes";
import { useUserState } from "../helpers/useUserState";
import { Activation } from "../pages/Activation/Activation";
import { CreatePost } from "../pages/CreatePost";
import { EditPage } from "../pages/EditPage";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../pages/LogIn";
import { Posts } from "../pages/Posts";
import { Registration } from "../pages/Registration";
import { UserPosts } from "../pages/UserPosts";

export const AppRoutes = () => {
  const { home, posts, login, registration, createPost, myPosts, activation } =
    ROUTES;
  const { user } = useUserState();

  if (!!user) {
    return (
      <Routes>
        <Route exact path={home} element={<HomePage />} />
        <Route exact path={posts} element={<Posts />} />
        <Route exact path="/posts/:id" element={<Posts />} />
        <Route exact path={createPost} element={<CreatePost />} />
        <Route exact path={myPosts} element={<UserPosts />} />
        <Route exact path="/posts/my-posts/edit/:id" element={<EditPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route exact path={home} element={<HomePage />} />
      <Route path={login} element={<LogIn />} />
      <Route path={activation} element={<Activation />} />
      <Route path={registration} element={<Registration />} />
    </Routes>
  );
};
