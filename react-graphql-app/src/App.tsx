import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Book } from "./Components/Book.js";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Book />
    </>
  );
}

export default App;
