import logo from "./logo.svg";
import gif from "./gif2.gif";
import "./App.css";
import TodoFuture from "./features/Todo";

function App() {
  const name = "Cậu Tốm";
  const isMale = true;
  const add = "Đà Nẵng, Việt Nam";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={gif} className="App-logo" alt="logo" />
        <p>{name}</p>
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}
        <p>{add}</p>
        <a
          className="App-link"
          href="https://facebook.com/baloc.nguyen14"
          target="_blank"
          rel="noopener noreferrer"
        >
          My FB
        </a>
        {/* <TodoFuture /> */}
      </header>
    </div>
  );
}

export default App;
