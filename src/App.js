import "./styles.css";
import Header from "./components/header";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";
export default function App() {
  const [output, setOutput] = useState("");
  return (
    <div className="App">
      <Header />
      <Input output={output} setOutput={setOutput} />
      <Output output={output} />
    </div>
  );
}
