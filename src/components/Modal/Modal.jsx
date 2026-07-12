import React, { Component } from "react";

import css from './Modal.module.css'

export class Modal extends Component {

state = {
}

componentDidMount() {
    console.log('1️⃣❗️❗️.Modal componentDidMount');
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
    return (  
      <div className={css.modalBackdrop}>
        <div className={css.modalContent} >
            {this.props.children}
        </div>
      </div>
    );
  };

}
