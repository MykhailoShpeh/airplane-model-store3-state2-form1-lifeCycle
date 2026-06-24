import React, { Component } from "react";

// import { ComplexForms } from '@/components/ComplexForms/ComplexForms.jsx'

import { ComplexFormsGenerationID } from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'

import { ComplexFormsGenerationIDRadioButton } from '@/components/ComplexFormsGenerationIDRadioButton/ComplexFormsGenerationIDRadioButton.jsx'

import css from "./AppComplexForms.module.css";



export class AppComplexForms extends Component {
    state = {
        formInputLogin: "",
        formInputPassword: "",
        experience: "junior"
    };

    submitForm = (data) => {
        console.log("✅Дані форми:", data);

        this.setState({
            formInputLogin: data.loginInputValue,
            formInputPassword: data.passwordInputValue,
            experience: data.experience
        })
     }

    render() {

        const {
            formInputLogin,
            formInputPassword,
            experience
        } = this.state

        console.log("----------------------------------------------");
        console.log("📗 Значення formInputLogin:", formInputLogin);
        console.log("📗 Значення formInputPassword:", formInputPassword);
        console.log("📗 Значення experience:", experience);
        console.log("______________________________________________");
        return (
            <>
                {/*//! 4.4.3.Складні форми */}
                {/* <ComplexForms onSubmit={values => console.log(values)} /> */}
                {/* <ComplexForms onSubmit={this.submitForm} /> */}

                {/*//! + 4.4.4.Генерація Id елементів форми */}
                {/* <ComplexFormsGenerationID onSubmit={this.submitForm} />
                <ComplexFormsGenerationID onSubmit={this.submitForm} /> */}

                {/*//! 4.4.5 Радіокнопки */}
                <ComplexFormsGenerationIDRadioButton onSubmit={this.submitForm} />
            </>
        );
    }
};
