import InputShortness from "./components/InputShortness";
import Background from "./components/Background";
import LinkResult from "./components/LinkResult";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortness setInputValue={setInputValue} />
      <Background />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
