import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" />
        <Route path="/register" />
        <Route path="/forgot-password" />
        <Route path="/game" />
      </Routes>
    </div>
  );
}

export default App;
