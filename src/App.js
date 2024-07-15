import "./App.css";
import gif from "./gif2.gif";

function App() {
  const name = "Cậu Tốm";
  const isMale = true;
  const add = "Đà Nẵng, Việt Nam";
  const fb = "https://facebook.com/baloc.nguyen14";
  const aws = "https://www.udacity.com/certificate/EPKHAJHT";
  const java = "https://www.udacity.com/certificate/RZV6WJTU";
  const react =
    "https://www.udacity.com/certificate/e/72f1d7a0-1db0-11ef-8afc-bfcdf4b90c7e";
  const android =
    "https://www.udacity.com/certificate/e/facf122c-fb5c-11ed-8e86-07065207c643";
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
        <ul>
          <a className="App-link" href={aws}>
            <li>AWS</li>{" "}
          </a>
          <a className="App-link" href={java}>
            <li>JAVA</li>{" "}
          </a>
          <a className="App-link" href={android}>
            <li>ANDROID</li>{" "}
          </a>
          <a className="App-link" href={react}>
            <li>REACT</li>{" "}
          </a>
        </ul>
      </header>
    </div>
  );
}

export default App;
