import React from "react";

import css from './RegistrationIdentification.module.css'

export function RegistrationIdentification({
    onClose,
    activeUser,
    onSignOut
}) {

    console.log("👍activeUser: ", activeUser);

    return (

        <div className={css.boxRegistrationIdentification}>
            {!activeUser &&
                <>
                    <h2 className={css.titleRegistrationIdentification}>Для здійснення покупок необхідно увійти до свого акаунту →</h2>
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
                </>
            }

            {activeUser &&
                <>
                    <h2 className={css.titleRegistrationIdentification}>
                        Вітаю вас,
                        <span className={css.titleUserRegistrationIdentification}>
                            {activeUser.userName}
                        </span>
                    </h2>

                    <button
                        className={`${css.buttonRegistrationIdentification} ${css.buttonSignOut}`}
                        type="button"
                        onClick={onSignOut}
                    >
                        SignOut
                    </button>
                </>
            }
        </div>
    )
}