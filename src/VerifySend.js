import React, { Component } from "react";
import "./css/register.css";
import Header from "./components/Header";
import VerifySendForm from "./components/VerifySendForm";

export default class VerifySend extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header title="Resend Verify Email" />
				<VerifySendForm />
			</div>
		);
	}
}
