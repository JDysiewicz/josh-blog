import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About me &rarr;</Link>
    </div>
  )
};

export default IndexPage;