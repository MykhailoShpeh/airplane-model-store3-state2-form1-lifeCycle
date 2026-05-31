import css from './Sorter.module.css'

export function Sorter({
    onHandleChangeInputSearchValue, //? Підняття стану
    searchInputValue, //? Значення інпуту
    onHandleChangeRadioButtonValue,
    radioButtonValue
}) {
    return (
        <div className={css.sorter}>
            <h3 className={css.formTitle}>Вибір параметра для пошуку/фільтрації:</h3>
            <form>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="brief"
                        checked={radioButtonValue === "brief"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Назва 
                </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="nickname"
                        checked={radioButtonValue === "nickname"}
                        onChange={onHandleChangeRadioButtonValue}

                    />
                    Прізвисько
                </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="country"
                        checked={radioButtonValue === "country"}
                        onChange={onHandleChangeRadioButtonValue}

                         />
                    Країна виробник
                    </label>
                <label >
                    <input
                        type="radio"
                        name="sort"
                        value="year"
                        checked={radioButtonValue === "year"}
                        onChange={onHandleChangeRadioButtonValue}

                         />
                    Рік випуску
                </label >
            </form>

            {/* <h2 className={css.title}>Пошук ЛА за іменем</h2> */}
            <input
                className={css.input}
                type="text"
                placeholder="Введіть ім'я ЛА"
                value={searchInputValue}
                // onChange={() => { console.log("Робота з input") }}
                // onChange={(event) => { onHandleChangeInputSearchValue(event.target.value) }} //todo var.1 ✅
                onChange={onHandleChangeInputSearchValue}
            />
        </div>
    )
}
