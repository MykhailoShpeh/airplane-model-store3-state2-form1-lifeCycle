import React, { Component } from "react";

// import { ComplexForms } from '@/components/ComplexForms/ComplexForms.jsx'

import { ComplexFormsGenerationID } from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'

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
                {/*//! 4.4.3.Складні форми */}
                {/* <ComplexForms onSubmit={values => console.log(values)} /> */}
                {/* <ComplexForms onSubmit={this.submitForm} /> */}

                {/*//! + 4.4.4.Генерація Id елементів форми */}
                <ComplexFormsGenerationID onSubmit={this.submitForm} />
                <ComplexFormsGenerationID onSubmit={this.submitForm} />
            </>
        );
    }
};
