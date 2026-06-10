import { Component } from "react";
import cards from "@/json/cards_10-10.json";
import css from "./AppSearchDebounce.module.css";
import debounce from "lodash.debounce";


export class AppSearchDebounce extends Component {

    state = {
        inputValue: "",
        filteredArray: cards,
    }

    performSearch = textInput => {
       const filteredArray = cards.filter(item =>
      item.title.toLowerCase().includes(textInput.trim().toLowerCase())
        );

    this.setState({
      filteredArray
    });
    }

    debouncedSearch = debounce((text) => {
        console.log("⏰debounce_text", text);
        this.performSearch(text);
    }, 500);



    handleChange = (event) => {
        console.log("Подія в input search: ");
        console.log("event: ", event)
        const inputData = event.target.value;

        this.setState({
            inputValue: inputData
        });

        //! 6.1 .Переносимо всю логіку фільтрації в окремий метод performSearch:
    //! _____________Логіка фільтрації___________
    // const filteredArray = cards.filter(item =>
    //   item.title.toLowerCase().includes(inputData.trim().toLowerCase())
    //     );

    // this.setState({
    //   filteredArray
    // });
    //! _________________________________________

        //! 6.2 Запуск debounce з логікою фільтрації:
    this.debouncedSearch(inputData);


        // this.setState({
        //     filteredArray: cards.filter(item => item.title.toLowerCase().includes(inputData.trim().toLowerCase()))
        // })
    }

    componentWillUnmount() {
        this.debouncedSearch.cancel();
    };

    //* Якщо користувач буде вводити: . + * ? [ ] ( )
    //* то RegExp потрібно екранувати допоміжною функцією:
    escapeRegExp = (str) => {
        return str.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );
    };


    //* Функція підсвічування тексту
    highlightText = (text, keyword) => {
        if (!keyword) return text;

        const regex = new RegExp(`(${keyword})`, "gi");

        

        return text
            .split(regex)
            .map((part, index) =>
                part.toLowerCase() === keyword.toLowerCase()
                    ? (
                        <span
                            key={index}
                            className={css.highlight}
                        >
                            {part}
                        </span>
                    )
                    : part
            );
    };

    //* Використання RegExp з экрануванням допоміжною функцією:
    highlightTextProtection = (text, keyword) => {
        if (!keyword) return text;

        const escapedKeyword = this.escapeRegExp(keyword);

        const regex = new RegExp(
            `(${escapedKeyword})`,
            "gi"
        );

        return text
            .split(regex)
            .map((part, index) =>
                part.toLowerCase() === keyword.toLowerCase()
                    ? (
                        <span
                            key={index}
                            className={css.highlight}
                        >
                            {part}
                        </span>
                    )
                    : part
            );
    };

    //* Функція для відмінювання слова “картка”
    getWordForm = (number, words) => {
        const n = Math.abs(number) % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) return words[2];
        if (n1 > 1 && n1 < 5) return words[1];
        if (n1 === 1) return words[0];
        return words[2];
    };




    //     handleChange = debounce((event) => {
    //         console.log("Подія в input search: ");
    //         console.log("event: ", event)
    //         const inputData = event.target.value;

    //         this.setState({
    //             inputValue: inputData,
    //             filteredArray: cards.filter(item => item.title.toLowerCase().includes(inputData.trim().toLowerCase()))
    //         })
    // }, 500) //! не працює






    // console.log("filterArray: ", filterArray)

    // const onlyInputSearchValue = this.state.aircraftsArrAfterFiltration.filter(item => item.name.brief.toLowerCase().startsWith(inputData.trim().toLowerCase()));




    render() {

        const {
            inputValue,
            filteredArray
        } = this.state

        const cardsLength = filteredArray.length

        console.log("inputValue: ", inputValue)
        console.log("filteredArray: ", filteredArray)

        return (
            <>
                <input
                    className={css.input}
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                // onChange={debounce(this.handleChange, 500)} //! не працює

                />
                {/* <h3 className={css.titleCount}>Знайдено: <span>{cardsLength}</span> катрок</h3> */}
                <h3 className={css.titleCount}>Знайдено: {cardsLength} {this.getWordForm(cardsLength, ['картка', 'картки', 'карток'])}</h3>

                <ul className={css.list}>

                    {filteredArray.map(item =>
                        <li className={css.item} key={item.id} >
                            {/* //* Використання RegExp без захисту від введення символів: . + * ? [ ] ( ): */}
                            {/* <h2>{this.highlightText(item.title, inputValue)}</h2> */}
                            {/* //* Використання RegExp з  екрануванням допоміжною функцією: */}
                            <h2>{this.highlightTextProtection(item.title, inputValue)}</h2>
                            <p className={css.text}>{item.body}</p>
                        </li>
                    )}
                </ul>
            </>
        )
    }
}