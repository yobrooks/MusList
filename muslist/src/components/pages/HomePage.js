import React from "react";
import NavBar from "../navbar/NavBar";
import "../../styles/HomePage.css";
import { Button } from "../auxComps/Button";
//import { Button } from "../auxComps/Button";

/* Add Button, consider gradient animation?*/

function HomePage() {
  return (
    <div>
      <header>
        <NavBar sidebar={false} />
      </header>
      <div class="home-container">
        <div class="home-content">
          <h1>MusList</h1>
          <h2>Stupid Slogan Goes Here!!!</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            children="Join Now!"
            type="button"
            buttonStyle="btn-primary"
            buttonSize="btn-lg"
          />
        </div>
        <div class="home-images">
          <img src="/images/img2.jpg" alt=""></img>
          <img src="/images/img1.jpg" alt=""></img>
          <img src="/images/img3.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
