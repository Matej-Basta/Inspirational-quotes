import logo from "./logo.svg";
import "./App.css";
import { Quote } from "./components/Quote";
import { RandomQuotes } from "./components/RandomQuotes";

function App() {
  return (
    <>
      <Quote quote="A solution is never just a solution" />
      <RandomQuotes />
    </>
  );
}

export default App;
