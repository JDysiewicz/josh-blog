import React from "react";

import LightGlobal from "../components/Layouts/LightGlobal";
import Navbar from "../components/Navbar";

export default () => {
  return (
    <LightGlobal>
      <Navbar title="About" />
        <p>Hi, I'm <strong style={{color: "#ff75a1", fontSize: "2rem"}}>Joshua Dysiewicz</strong></p>
        
        <p>This is a blog about <strong style={{color: "#28B3DC", fontSize: "2rem"}}>JavaScript and React</strong></p>

        <p>I like to do <strong style={{color: "#ff75a1", fontSize: "2rem"}}>deep dives</strong> into how things are working under the hood</p>

        <p>I also reference everything I write, so you'll find a <strong style={{color: "#28B3DC", fontSize: "2rem"}}>References</strong> section at the end of my articles</p>
  
    </LightGlobal>
  )
};
