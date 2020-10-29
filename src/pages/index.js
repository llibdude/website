import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <Helmet>
        <title></title>
      </Helmet>
      <img src="/frontpage.svg"></img>
      <div class="floater">
        <img src="/high-availability.gif"></img>
      </div>
    </main>
  );
}

export default Index;
