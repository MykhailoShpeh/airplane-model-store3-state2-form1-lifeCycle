import React, { Component } from "react";

import { createPortal } from 'react-dom';  //! для модального вікна

import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');  //! для модального вікна


export class Modal extends Component {

    state = {
    }

    componentDidMount() {
        console.log('1️⃣❗️❗️.Modal componentDidMount');

        window.addEventListener(
            'keydown',
             event => {
            console.log("event.code:", event.code);
            if (event.code === "Escape") {
                this.props.onClose()
            }
            
        }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("2️⃣❗️❗️.Modal componentDidUpdate");
    };

    componentWillUnmount() {
        console.log('3️⃣❗️❗️.Modal componentWillUnmount');
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
