import React from "react";
import Header from "./components/Header";

function HomePage(props) {
  return (
    <section className="home">
      <Header />
      <main className="dark">
        <h3 className="dark:hidden">Light mode</h3>
        <h3 className="hidden dark:block">Dark mode</h3>
      </main>
      <img src={"/HomePage.jpg"} alt="Home Page" />
      <p>
        photo can originally be found{" "}
        <a href="https://starwars.fandom.com/wiki/The_Mandalorian">here</a>
      </p>
    </section>
  );
}

export default HomePage;
