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
  
        <p>It's my goal help everyone <strong style={{color: "#ff75a1", fontSize: "2rem"}}>understand</strong> the code they write</p>

        <p><blockquote style={{backgroundColor: "#9bdeac", borderRadius: "10px", paddingLeft: "0.5rem", paddingRight: "0.5rem", margin: "0"}}><i>"Using a code wizard designed by [an expert] does not automatically make Joe Developer equally expert. Joe can feel pretty good - he's just produced a mass of code and a pretty spiffy-looking program... But unless Joe actually understands the code that has been produced on his behalf, he's fooling himself. He's programming by coincidence. Wizards are a one-way street - they cut the code for you, and then move on. If the code they produce isn't quite right, or if circumstances change and you need to adapt the code, you're on your own. [Wizards aren't bad], however if you choose to use one, and you don't understand all the code that it produces, you won't be in control of your own application. You won't be able to maintain it, and you'll be struggling when it comes time to debug... <strong>No one should be producing code they don't fully understand</strong> [emphasis added]."</i></blockquote></p>
        <p style={{textAlign: "right"}} ><strong>- A. Hunt and D. Thomas, <i>The Pragmatic Programmer</i>, Chapter 6 - <i>Evil Wizards</i></strong></p>
    </LightGlobal>
  )
};
