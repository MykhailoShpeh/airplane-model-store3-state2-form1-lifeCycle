import React, { Component } from "react";

import css from './ScaleSelection.module.css'

const INITIAL_STATE = {};

export class ScaleSelection extends Component {
    state = {
        ...INITIAL_STATE
    }

    render() {
        return (
            <div className={css.scaleSelectionBox}>
                <h3 className={css.scaleSelectionTitle}>Оберіть масштаб моделі:</h3>
            <label>
                <select
                    className={css.scaleSelectionSelect}
                    name="modelScale"
                    // value={scale}
                    // onChange={handleChangeModelScale}
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