import React, { Component } from "react";

import aircrafts from '@/json/aircrafts.json';

import css from './ScaleSelection.module.css'

const INITIAL_STATE = {
    modelScale: "all"
};

export class ScaleSelection extends Component {
    state = {
        ...INITIAL_STATE
    }

    //! Скидання state в початкове значення INITIAL_STATE
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    handleChangeModelScale = event => {
        //! Деструктуризуємо:
        const { name, value } = event.currentTarget;

        console.log("Значення name:", name);
        console.log("Значення value:", value);


        const modelsSelectedScale = value == "all"
            ? aircrafts
            : aircrafts.filter(aircraft => aircraft.model.scale.some(item =>
                item === Number(value)))

        console.log("modelsSelectedScale: ", modelsSelectedScale);

        // //! Зберігаємо значення інпутів в state
        this.setState({
            //! Використовуємо властивості об'єкта, що обчислюються
            [name]: value,
        });
    }

    render() {

        const {
            modelScale
        } = this.state

        console.log("modelScale: ", modelScale)

        return (
            <div className={css.scaleSelectionBox}>
                <h3 className={css.scaleSelectionTitle}>Оберіть масштаб моделі:</h3>
                <label>
                    <select
                        className={css.scaleSelectionSelect}
                        name="modelScale"
                        value={modelScale}
                        onChange={this.handleChangeModelScale}
                    >
                        <option className={css.scaleSelectionOption} value="all">Всі</option>
                        <option className={css.scaleSelectionOption} value="200">1:200</option>
                        <option className={css.scaleSelectionOption} value="144">1:144</option>
                        <option className={css.scaleSelectionOption} value="100">1:100</option>
                        <option className={css.scaleSelectionOption} value="72">1:72</option>
                        <option className={css.scaleSelectionOption} value="60">1:60</option>
                        <option className={css.scaleSelectionOption} value="48">1:48</option>
                        <option className={css.scaleSelectionOption} value="32">1:32</option>
                    </select>
                </label>
            </div>
        )
    }
}