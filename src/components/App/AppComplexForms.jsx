import React, { Component } from "react";
import css from "./AppComplexForms.module.css";

const INITIAL_STATE = {
    loginInputValue: "",
    passwordInputValue: "",
};


export class AppComplexForms extends Component {
    // state = {
    
    //     // inputValue: "asd",
    //     loginInputValue: "",
    //     passwordInputValue: "",
    // };

    state = { ...INITIAL_STATE };

    //! Скидання state в початкове значення INITIAL_STATE
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };


    // todo: OLD
    // handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.currentTarget;
    //     const login = form.elements.login.value;
    //     const password = form.elements.password.value;
    //     console.log(login, password);
    //     this.props.onSubmit({ login, password });
    //     form.reset();
    // };

    // todo: NEW
    handleSubmit = event => { 
        event.preventDefault();
        console.log("Підтвердження форми");
        const { loginInputValue, passwordInputValue } = this.state;
        console.log(`Login: ${loginInputValue}, Password: ${passwordInputValue}`);
        this.props.onSubmit({ ...this.state });
        
        //! очищуємо поля всіх інпутів
        this.reset()
    }


    // handleChangeLogin = event => {
    //     console.log("event.currentTarget:", event.currentTarget);
    //     console.log("event.currentTarget.name:", event.currentTarget.name);
    //     console.log("event.currentTarget.value:", event.currentTarget.value);

    //     // console.log("event.target.value:", event.target.value);
    //     const text = event.target.value;

    //     this.setState({
    //         loginInputValue: text
    //      });
    // };

    // handleChangePassword = event => {
    //     console.log("event.target.value:", event.target.value);
    //     const text = event.target.value;

    //     this.setState({
    //         passwordInputValue: text
    //     });
    // };

    handleChange = event => {
        // console.log("event.currentTarget:", event.currentTarget);
        // console.log("event.currentTarget.name:", event.currentTarget.name);
        // console.log("event.currentTarget.value:", event.currentTarget.value);

        //! Деструктуризуємо:
        const { name, value } = event.currentTarget;

        console.log("Значення name:", name);
        console.log("Значення value:", value);

        // //! Зберігаємо значення інпутів в state
        this.setState({
            //! Використовуємо властивості об'єкта, що обчислюються
            [name]: value,
        });

    };

    render() {

        const {
            loginInputValue,
            passwordInputValue
        } = this.state

        console.log("----------------------------------------------");
        console.log("Значення loginInputValue:", loginInputValue);
        console.log("Значення passwordInputValue:", passwordInputValue);
        console.log("______________________________________________");
        return (
            <form
                className={css.loginForm}
                onSubmit={this.handleSubmit}
            >
                <label
                    className={css.loginFormLabel}
                    htmlFor="username"
                >
                    Логін:
                </label>
                <input
                    className={css.loginFormInput}
                    type="text"
                    value={loginInputValue}
                    name="loginInputValue"
                    id="username"
                    // onChange={this.handleChangeLogin}
                    onChange={this.handleChange}
                />

                <label
                    className={css.loginFormLabel}
                    htmlFor="pwd"
                >
                    Пароль:
                </label>
                <input
                    className={css.loginFormInput}
                    type="password"
                    value={passwordInputValue}
                    name="passwordInputValue"
                    id="pwd"
                    // onChange={this.handleChangePassword}
                    onChange={this.handleChange}
                />

                <button
                    className={css.loginButton}
                    type="submit"
                >
                    Login
                </button>
            </form>
        );
    }
};
