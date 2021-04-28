// Styles
import "./App.css";

// Composants
import Button from "./Button";

// Fonctions
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div class="container">
      <header>
        <i class="fas fa-calculator fa-3x"></i>
        <h1>React Counter</h1>
      </header>
      <div class="line"></div>
      <div class="buttons">
        <div>
          <Button value="-" counter={counter} setCounter={setCounter} />
          <span>{counter}</span>
          <Button value="+" counter={counter} setCounter={setCounter} />
        </div>
        <div>
          <Button value="Reset" counter={counter} setCounter={setCounter} />
        </div>
      </div>
      <footer>
        <p>
          Made with <span>React</span> at <span>Le Réacteur </span>by{" "}
          <span>Claire Hart de Keating</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
