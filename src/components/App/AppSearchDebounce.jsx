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
                <ul className={css.list}>

                    {filteredArray.map(item =>
                        <li className={css.item} key={item.id} >
                            <h2 className={css.title}>{item.title}</h2>
                            <p className={css.text}>{item.body}</p>
                        </li>
                    )}
                </ul>
            </>
        )
    }
}