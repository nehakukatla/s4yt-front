import React, { Component } from "react";
// import "./css/login.css";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

export default class Login extends Component {
	render = () => (
		<div className="wrapper">
			<Header title="Login" />
			<LoginForm />
		</div>
	);
}
