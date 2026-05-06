import css from './Filter.module.css';


export function Filter({ onAll, onPlanes, onBiplanes, onHelicopters, onCart, activeButton, selectedLength }) {
    // console.log("activeButton", activeButton);

    return (
        <div className={css.filterBox}>
            <button
                // className={css.buttonAllFiltration}
                className={activeButton === "allButton" ? `${css.buttonAllFiltration} ${css.active}` : css.buttonAllFiltration}
                type="button"
                onClick={onAll}
            >
                ВСІ
            </button>

            <button
                // className={css.buttonPlaneFiltration}
                className={activeButton === "planesButton" ? `${css.buttonPlaneFiltration} ${css.active}` : css.buttonPlaneFiltration}
                type="button"
                onClick={onPlanes}
            >
                Літаки
            </button>

            <button
                // className={css.buttonBiplaneFiltration}
                className={activeButton === "biplanesButton" ? `${css.buttonBiplaneFiltration} ${css.active}` : css.buttonBiplaneFiltration}
                type="button"
                onClick={onBiplanes}
            >
                Біплани
            </button>

            <button
                // className={css.buttonHelicopterFiltration}
                className={
                    activeButton === "helicoptersButton"
                        ? `${css.buttonHelicopterFiltration} ${css.active}`
                        : css.buttonHelicopterFiltration
                }
                type="button"
                onClick={onHelicopters}
            >
                Вертольоти
            </button>

            <button
                // className={css.buttonHelicopterFiltration}
                className={
                    activeButton === "cartButton"
                        ? `${css.buttonCartFiltration} ${css.active}`
                        : css.buttonCartFiltration
                }
                type="button"
                onClick={onCart}
            >
                Кошик
                &nbsp;
                <span className={
                    selectedLength
                        ? `${css.cartSpan} ${css.redBack}`
                        : css.cartSpan
                }>{null ? 0 : selectedLength}</span>
            </button>

        </div>
    )
}