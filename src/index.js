import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
import Message from "./Message";
import Register from "./Register";
import VerifySend from "./VerifySend";
import "bootstrap/dist/css/bootstrap.css";
import "./css/reset.css";
import "./css/s4yt.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="register" element={<Register />} />
      <Route
        path="email-verify"
        element={
          <Message
            title="Email Verify"
            primary="Thanks!"
            secondary="Your email has been verified, please check your inbox."
          />
        }
      />
      <Route
        path="email-verified"
        element={
          <Message
            title="Email Verified"
            primary="Thanks again!"
            secondary="Your email has already been verified. You are ready to play."
          />
        }
      />
      <Route path="verify-resend" element={<VerifySend />} />
    </Routes>
  </BrowserRouter>
);
