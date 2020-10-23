import React from "react";
import { Helmet } from "react-helmet";
//import BackgroundImage from "gatsby-background-image";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <Helmet>
        <title></title>
      </Helmet>
      <img src="/frontpage.png"></img>
      <div>blah</div>
    </main>
  );
}

export default Index;
