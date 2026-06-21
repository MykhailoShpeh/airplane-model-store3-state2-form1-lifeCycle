import React, { Component } from "react";

import { ComplexForms } from '@/components/ComplexForms/ComplexForms.jsx'

import css from "./AppComplexForms.module.css";



export class AppComplexForms extends Component {
    state = {
        formInputLogin: "",
        formInputPassword: "",
    };

    submitForm = (data) => {
        console.log("✅Дані форми:", data);

        this.setState({
            formInputLogin: data.loginInputValue,
            formInputPassword: data.passwordInputValue
        })
     }

    render() {

        const {
            formInputLogin,
            formInputPassword
        } = this.state

        console.log("----------------------------------------------");
        console.log("📗 Значення formInputLogin:", formInputLogin);
        console.log("📗 Значення formInputPassword:", formInputPassword);
        console.log("______________________________________________");
        return (
            <>
                {/* <ComplexForms onSubmit={values => console.log(values)} /> */}
                <ComplexForms onSubmit={this.submitForm} />
            </>
        );
    }
};
