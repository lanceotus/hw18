import React from 'react';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default class MainDiv extends React.Component {
    showRegister(event) {
        let els = document.getElementsByClassName("form");
        els[0].style.display = 'flex'
        els[1].style.display = 'none'
    }

    showLogin(event) {
        let els = document.getElementsByClassName("form");
        els[0].style.display = 'none'
        els[1].style.display = 'flex'
    }

    render() {
        return (
            <div className="main">
                <div style={{display: "flex"}}>
                    <div><input type="radio" name="choose_form"
                                onClick={this.showRegister}/>Регистрация</div>
                    <div><input type="radio" name="choose_form" onClick={this.showLogin}/>Вход</div>
                </div>

                <RegisterForm/>
                <LoginForm/>
            </div>
        );
    }
}
