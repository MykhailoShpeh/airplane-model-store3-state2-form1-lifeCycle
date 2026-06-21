import React, { Component } from "react";
import { nanoid } from 'nanoid'
import css from "./ComplexFormsGenerationID.module.css";

const INITIAL_STATE = {
    loginInputValue: "",
    passwordInputValue: "",
};

export class ComplexFormsGenerationID extends Component {
    state = { ...INITIAL_STATE };

    //! Для генерації Id елементів форми:
    //! Для кожного інпуту робимо окрему властивість класу:
    loginInputId = nanoid();
    passwordInputId = nanoid();


    //! Скидання state в початкове значення INITIAL_STATE
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("Підтвердження форми");
        const { loginInputValue, passwordInputValue } = this.state;
        console.log(`Login: ${loginInputValue}, Password: ${passwordInputValue}`);
        this.props.onSubmit({ ...this.state });

        //! очищуємо поля всіх інпутів
        this.reset()
    }

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
        console.log("📕 Значення loginInputValue:", loginInputValue);
        console.log("📕 Значення passwordInputValue:", passwordInputValue);
        console.log("______________________________________________");
        return (
            <form
                className={css.loginForm}
                onSubmit={this.handleSubmit}
            >
                <label
                    className={css.loginFormLabel}
                    // htmlFor="username"
                    htmlFor={this.loginInputId} //? для генерації Id елементів форми
                    

                >
                    Логін:
                </label>
                <input
                    className={css.loginFormInput}
                    type="text"
                    value={loginInputValue}
                    name="loginInputValue"
                    // id="username"
                    id={this.loginInputId} //? для генерації Id елементів форми
                    onChange={this.handleChange}
                />

                <label
                    className={css.loginFormLabel}
                    // htmlFor="pwd"
                    htmlFor={this.passwordInputId}//? для генерації Id елементів форми
                >
                    Пароль:
                </label>
                <input
                    className={css.loginFormInput}
                    type="password"
                    value={passwordInputValue}
                    name="passwordInputValue"
                    // id="pwd"
                    id={this.passwordInputId}//? для генерації Id елементів форми
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