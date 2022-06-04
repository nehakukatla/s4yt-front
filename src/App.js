import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="/login" element={<Login />} / >
      <Route path="/register" element={<Register />} / >
      <Route path="/forgot-password" element={<ForgotPassword />} / >
    </Routes>
  );
}



function ForgotPassword() {
  return <h2>Forgot Password</h2>;
}

function Game() {
  return <h2>Game</h2>;
}

export default App;
