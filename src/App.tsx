import React from "react";
import "./App.css";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  function invokedHandler() {
    invoke("simple_command");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={invokedHandler}>invoke Rust command</button>
        </div>
      </header>
    </div>
  );
}

export default App;
