import React from "react";
import Navbar from "../components/Navbar"

import ArticleList from "../components/ArticleList";

import LightGlobal from "../components/Layouts/LightGlobal"


export default () => {
  return (
    <LightGlobal>
      <Navbar title="Articles" />
      <ArticleList />
    </LightGlobal>
  );
};