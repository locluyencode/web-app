import logo from "./logo.svg";
import gif from "./gif2.gif";
import "./App.css";
import TodoFuture from "./features/Todo";
import AlbumFuture from "./features/Album";
import Counter from "./components/Counter";
import ColorBox from "./components/ColorBox";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const name = "Cậu Tốm";
  const isMale = true;
  const add = "Đà Nẵng, Việt Nam";
  const fb = "https://facebook.com/baloc.nguyen14";
  const aws = "https://graduation.udacity.com/confirm/EPKHAJHT";
  return (
    <div className="App">
      <header className="App-header">
        {/* <Link to={"/"}>home</Link>
        <Link to={"/todo-list"}>todo-list</Link>
        <Link to={"/album-future"}>album-future</Link>
        <Link to={"/counter"}>counter</Link>
        <Link to={"/color-box"}>color-box</Link> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

        {/* <TodoFuture /> */}
        {/* <AlbumFuture /> */}
        {/* <Counter /> */}
        {/* <ColorBox /> */}
        {/* <Routes>
          <Route path="/todo-list" exact element={<TodoFuture />} />
          <Route path="/album-future" element={<AlbumFuture />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/color-box" element={<ColorBox />} />
          <Route element={<NotFound />} />
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
