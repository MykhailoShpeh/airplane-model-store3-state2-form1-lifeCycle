import React, { Component } from "react";

import css from './FormIdentification.module.css'

const INITIAL_STATE = {
    userEmail: "",
    userPassword: ""
};

export class FormIdentification extends Component {

    state = {
        ...INITIAL_STATE
    }

    //! Скидання state в початкове значення INITIAL_STATE
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log("Підтвердження форми");
        const { loginInputValue, passwordInputValue } = this.state;
        console.log(`Login: ${loginInputValue}, Password: ${passwordInputValue}`);
        this.props.onAccountLogin({ ...this.state });

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

    handleChangeCheckbox = event => {
        console.log("event.currentTarget.checked:", event.currentTarget.checked);
        //! Деструктуризуємо:
        const { checked } = event.currentTarget;

        this.setState({ userLicence: checked });

    }

    render() {

        const {
            userEmail,
            userPassword,
        } = this.state

        console.log("------------STATE FormIdentification------------");
        console.log("userEmail: ", userEmail);
        console.log("userPassword: ", userPassword);
        console.log("------------------------------------------------------------");


        return (
            <div>
                <h2>Ідентифікація/Аутентифікація</h2>
                <form
                    className={css.loginForm}
                    onSubmit={this.handleSubmit}
                >
                    <label className={css.loginFormLabel}>
                        E-mail:
                        <input
                            className={css.loginFormInput}
                            type="email"
                            name="userEmail"
                            value={userEmail}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={css.loginFormLabel}>
                        Пароль:
                        <input
                            className={css.loginFormInput}
                            type="password"
                            name="userPassword"
                            value={userPassword}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button
                    type="submit"
                    >
                        Login
                    </button>
                    <button
                        className={css.loginButton}
                        type="button"
                    // onClick={this.props.onClose}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        )
    }
}