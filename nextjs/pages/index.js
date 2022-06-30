import React from "react";
import Header from "./components/Header";
import { Button } from '@material-ui/core';

function HomePage(props) {
  return (
    <section className="home">
      <Header />
      <Button color="primary">Hello World</Button>
      <img src={"/HomePage.jpg"} alt="Home Page" className="absolute top-6" />
      <p>
        photo can originally be found{" "}
        <a href="https://starwars.fandom.com/wiki/The_Mandalorian">here</a>
      </p>
    </section>
  );
}

export default HomePage;
