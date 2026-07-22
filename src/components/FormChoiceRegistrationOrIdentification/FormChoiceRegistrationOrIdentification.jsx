import React, { Component } from "react";

import css from './FormChoiceRegistrationOrIdentification.module.css'

export function FormChoiceRegistrationOrIdentification({


}) {

    return (

        <div>
                <h2 className={css.titleRegistrationIdentification}>Шановний користувач,</h2>
                <h2 className={css.titleRegistrationIdentification}>для здійснення покупок</h2>
                <h2 className={css.titleRegistrationIdentification}>вам необхідно:</h2>
                <h2 className={`${css.titleRegistrationIdentification} ${css.titleRegistration}`}><u>пройти реєстрацію</u></h2>
                <h2 className={css.titleRegistrationIdentification}>та/або</h2>
                <h2 className={`${css.titleRegistrationIdentification} ${css.titleIdentification}`}><u>увійти до свого акаунту</u></h2>
                <div className={css.registrationIdentificationButtonBox}>
                    <button className={`${css.buttonRegistrationIdentification} ${css.buttonRegistration}`}>Registration</button>
                    <button className={`${css.buttonRegistrationIdentification} ${css.buttonLogin}`}>Login</button>
                    <button className={`${css.buttonRegistrationIdentification} ${css.buttonCancel}`}>Cancel</button>
                </div>
        </div>
    )
}