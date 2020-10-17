import React from "react";
import NavBar from "../navbar/NavBar";
import "../../styles/HomePage.css";
import { Button } from "../auxComps/Button";

/* Add Button, consider gradient animation?*/

function HomePage() {
  return (
    <div class="homepage-container">
      <header>
        <NavBar sidebar={false} />
      </header>
      <div className="hero-section">
        <h1>MusList</h1>
        <h2>Stupid Slogan Goes Here</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/*Add Button Here*/}
      </div>
    </div>
  );
}

export default HomePage;
