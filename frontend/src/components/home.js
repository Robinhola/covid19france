import React from "react";
import CovidTag from "./covidtag.js";

function Home(props) {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello
        </a>
      </header>
      <CovidTag category="testCategory" value={3} warningLevel={0} />
    </div>
  );
}

export default Home;
