import React from "react";

import css from './RegistrationIdentification.module.css'

export function RegistrationIdentification({
    onClose
}) {
    return (
        <div className={css.boxRegistrationIdentification}>
            <h2 >Для здійснення покупок необхідно увійти до свого акаунту →</h2>
            <div className={css.buttonBoxRegistrationIdentification}>
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
            </div>
        </div>
    )
}