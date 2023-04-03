import React from "react";
import "./App.scss";

import { Nav } from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <body>
        <Outlet></Outlet>
      </body>
    </div>
  );
}

export default App;
