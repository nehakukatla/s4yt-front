import React, { Component } from "react";
import "./css/message.css";
import Header from "./components/Header";
import MessageSection from "./components/MessageSection";

export default class Message extends Component {
    constructor(props) {
        super(props);
      }
	render() {
		return (
			<div className="wrapper">
				<Header title={this.props.title} />
                <MessageSection primary={this.props.primary} secondary={this.props.secondary}/>
			</div>
		);
	}
}
