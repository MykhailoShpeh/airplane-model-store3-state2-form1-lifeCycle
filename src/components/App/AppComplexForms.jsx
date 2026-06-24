import React, { Component } from "react";

// import { ComplexForms } from '@/components/ComplexForms/ComplexForms.jsx'

import { ComplexFormsGenerationID } from '@/components/ComplexFormsGenerationID/ComplexFormsGenerationID.jsx'

import { ComplexFormsGenerationIDRadioButton } from '@/components/ComplexFormsGenerationIDRadioButton/ComplexFormsGenerationIDRadioButton.jsx'

import { ComplexFormsGenerationIDRadioButtonCheckboxesSelect } from '@/components/ComplexFormsGenerationIDRadioButtonCheckboxesSelect/ComplexFormsGenerationIDRadioButtonCheckboxesSelect.jsx'

import css from "./AppComplexForms.module.css";



export class AppComplexForms extends Component {
    state = {
        formInputLogin: "",
        formInputPassword: "",
        experience: "junior",
        age: ""
    };

    submitForm = (data) => {
        console.log("✅Дані форми:", data);

        this.setState({
            formInputLogin: data.loginInputValue,
            formInputPassword: data.passwordInputValue,
            experience: data.experience,
            age: data.age
        })
     }

    render() {

        const {
            formInputLogin,
            formInputPassword,
            experience,
            age
        } = this.state

        console.log("----------------------------------------------");
        console.log("📗 Значення formInputLogin:", formInputLogin);
        console.log("📗 Значення formInputPassword:", formInputPassword);
        console.log("📗 Значення experience:", experience);
        console.log("📗 Значення age:", age);
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
                {/* <ComplexFormsGenerationIDRadioButton onSubmit={this.submitForm} /> */}

                {/*//! + 4.4.6.Чекбокси + 4.4.7.Селект */}
                <ComplexFormsGenerationIDRadioButtonCheckboxesSelect onSubmit={this.submitForm} />

            </>
        );
    }
};
