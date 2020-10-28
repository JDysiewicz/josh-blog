import React from "react";
import Navbar from "../components/Navbar"

import ArticleList from "../components/ArticleList";

import LightGlobal from "../components/Layouts/LightGlobal"


export default () => {
  return (
    <LightGlobal>
      <Navbar title="Articles" />
      <p>Here you'll find a list of the articles I've written. They're mainly focussed on JavaScript and React.</p>
      <ArticleList />
    </LightGlobal>
  );
};