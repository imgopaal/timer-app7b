import React from "react";

import "./App.css";
import Timer from "./views/Timer/Timer";

function App() {
  return (
    <div className="App">
      <span className="heading">STOPWATCH</span>
      <Timer />
      <span className="me">DEVELOPED BY <a href="https://github.com/gopaldas123">GOPAL DAS</a></span>

    </div>
  );
}

export default App;
