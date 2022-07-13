import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.css";
import "./css/reset.css";
import "./css/s4yt.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="register" element={<Register />} />
		</Routes>
	</BrowserRouter>
);
