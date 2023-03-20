import gif from "./gif2.gif";
import "./App.css";

function App() {
  const name = "Cậu Tốm";
  const isMale = true;
  const add = "Đà Nẵng, Việt Nam";
  const fb = "https://facebook.com/baloc.nguyen14";
  const aws = "https://graduation.udacity.com/confirm/EPKHAJHT";
  const java = "https://graduation.udacity.com/confirm/RZV6WJTU";
  return (
    <div className="App">
      <header className="App-header">
        <img src={gif} className="App-logo" alt="logo" />
        <p>{name}</p>
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}
        <p>{add}</p>
        <a
          className="App-link"
          href={fb}
          target="_blank"
          rel="noopener noreferrer"
        >
          My FB
        </a>
        <p>Study</p>
        <a className="App-link" href={aws}>
          <li>AWS</li>{" "}
        </a>
        <a className="App-link" href={java}>
          <li>JAVA</li>{" "}
        </a>
      </header>
    </div>
  );
}

export default App;
