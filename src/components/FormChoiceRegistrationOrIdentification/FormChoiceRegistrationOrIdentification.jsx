import React, { Component } from "react";

import css from './FormChoiceRegistrationOrIdentification.module.css'

export function FormChoiceRegistrationOrIdentification({
    onClose
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
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonRegistration}`}
                    // onClick={(event) => onClose(event.currentTarget.textContent)}
                    onClick={onClose}

                >
                    Registration
                </button>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonLogin}`}
                    // onClick={(event) => onClose(event.currentTarget.textContent)}
                    onClick={onClose}

                >
                    Login
                </button>
                <button
                    type="button"
                    className={`${css.buttonRegistrationIdentification} ${css.buttonCancel}`}
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}