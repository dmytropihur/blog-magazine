import React from "react";
import { Route, Routes } from "react-router-dom";
import { useUserState } from "../helpers/useUserState";
import { Activation } from "../pages/Activation/Activation";
import { CreatePost } from "../pages/CreatePost";
import { HomePage } from "../pages/HomePage";
import { LogIn } from "../pages/LogIn";
import { NotFound } from "../pages/NotFound";
import { Posts } from "../pages/Posts";
import { Registration } from "../pages/Registration";

export const AppRoutes = () => {
  const { user } = useUserState();

  if (!!user) {
    return (
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/createPost" element={<CreatePost />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    );
  }

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/auth/activate/:code" element={<Activation />} />
      <Route path="/registration" element={<Registration />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
