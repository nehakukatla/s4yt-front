import React, { Component } from "react"
import './css/reset.css'
import './css/s4yt.css'
import './css/register.css'
import Header from './components/Header'
import RegisterForm from "./components/RegisterForm"


export default class Register extends Component {
    render = ()  => (
        <div className="wrapper">
            <Header title="Register" />
            <RegisterForm />
        </div>
    );
}