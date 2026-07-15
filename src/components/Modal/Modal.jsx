import React, { Component } from "react";

import { createPortal } from 'react-dom';  //! для модального вікна

import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');  //! для модального вікна


export class Modal extends Component {

    state = {
    }

    handleKeyDownESC = event => {
        console.log("event.code:", event.code);
        if (event.code === "Escape") {
            console.log("Натиснули ❌ESC, потрібно закрити модалку");
            this.props.onClose()
        }
    }

    componentDidMount() {
        console.log('1️⃣❗️❗️.Modal componentDidMount');

        window.addEventListener(
            'keydown',
            this.handleKeyDownESC
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("2️⃣❗️❗️.Modal componentDidUpdate");
    };

    componentWillUnmount() {
        console.log('3️⃣❗️❗️.Modal componentWillUnmount');

        window.removeEventListener('keydown',this.handleKeyDownESC)
    };


    render() {
        console.log("0️⃣❗️❗️.Modal render");
        //! Без createPortal
        // return (  
        //   <div className={css.modalBackdrop}>
        //     <div className={css.modalContent} >
        //         {this.props.children}
        //     </div>
        //   </div>
        //; )

        //* Для модального вікна з createPortal
        return createPortal(
            <div className={css.modalBackdrop} >
                <div className={css.modalContent} >{this.props.children}</div>
            </div>,
            modalRoot,
        );

    };

}
