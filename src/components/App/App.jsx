import css from './App.module.css';
import React, { Component } from "react";
import '@/App.css';
import { Section } from '@/components/Section/Section.jsx';
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';
import aircrafts from '@/json/aircrafts.json';
import { PlanesList } from '@/components/PlanesList/PlanesList.jsx';
import { Filter } from '@/components/Filter/Filter.jsx';
import {updateSelectedModels} from '@/utils/updatesSelectedModels';

// export function App() {
export class App extends Component {

  //!Фільтрація var.1
  state = {
    // isPlanes: false,
    // isHelicopters: false,
    // isAll: false,
    bgColor: "black",
    aircraftTitle: "Магазин моделей літальних апаратів",
    aircraftArray: aircrafts,
    buttonBackground: "",
    //! Візуалізація активної кнопки 
    activeButton: "allButton",
    // activeButtonIndex: null,
    indicesSelectedModels: [], //! масив індексів обраних моделей
    // selectedModels: [], //! масив обраних моделей
    isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"

  }

  
  allFiltration = () => {
    console.log("All")

    this.setState({
      // isAll: true,
      // isPlanes: false,
      // isHelicopters: false,
      bgColor: 'green',
      aircraftTitle: "Магазин моделей літальних апаратів",
      aircraftArray: aircrafts,
      activeButton: "allButton",
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
    });
    console.log("aircraftArray: ", aircrafts);
  };

  planeFiltration = () => {
    console.log("Planes")
    const planesArray = aircrafts.filter(item => item.aircraftType === "plane")
    console.log("planesArray: ", planesArray);
    this.setState({
      // isAll: false,
      // isPlanes: true,
      // isHelicopters: false,
      bgColor: 'yellow',
      aircraftTitle: "Магазин моделей літаків",
      aircraftArray: planesArray,
      activeButton: "planesButton",
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
    });
  };

  biplanesFiltration = () => {
    console.log("Biplanes")
    const biplanesArray = aircrafts.filter(item => item.aircraftType === "biplane")
    console.log("biplanesArray: ", biplanesArray);
    this.setState({
      // isAll: false,
      // isPlanes: true,
      // isHelicopters: false,
      bgColor: '#f59aa9',
      aircraftTitle: "Магазин моделей біпланів",
      aircraftArray: biplanesArray,
      activeButton: "biplanesButton",
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
    });
  };

  helicopterFiltration = () => {
    console.log("Helicopters")

    const helicoptersArray = aircrafts.filter(item => item.aircraftType === "helicopter")
    console.log("helicoptersArray: ", helicoptersArray);
    this.setState({
      // isAll: false,
      // isPlanes: false,
      // isHelicopters: true,
      bgColor: 'lightblue',
      aircraftTitle: "Магазин моделей вертольотів",
      aircraftArray: helicoptersArray,
      activeButton: "helicoptersButton",
      isCartButton: false, //! тригер: "якщо активна кнопка «Кошик»"
    });

  }

    cartFiltration = () => {
      console.log("Корзина")

    const title = this.state.indicesSelectedModels.length === 0 ? "Додайте товари до кошика" : "Кошик"

      // console.log("cartArray: ", cartArray);
      this.setState({
        // isAll: false,
        // isPlanes: false,
        // isHelicopters: true,
        bgColor: 'lightblue',
        aircraftTitle: title,
        aircraftArray: this.state.selectedModels,
        activeButton: "cartButton",
        isCartButton: true, //! тригер: "якщо активна кнопка «Кошик»"
      });
    }
  
  getActiveId = (id) => {
    console.log("id: ", id)
    //! треба створити триггер, який аналізує де натиснута кнопка додати до кошику
    // this.setState({
    //   activeButtonIndex: id,
    // })

    if (this.state.indicesSelectedModels.includes(id)) {
      console.log("Такий індекс вже є,тоді ВИДАЛЯЄМО його!❌");

      //! не = this.state.indicesSelectedModels, а = [...this.state.indicesSelectedModels], бо при 1 варіанті ми даємо посилання замість копії, це зламає роботу state
      const idArray = [...this.state.indicesSelectedModels]

      //! index - 1 замість newindicesSelectedModels.indexOf(index) не працює!
      idArray.splice(idArray.indexOf(id), 1);
      this.setState({
        indicesSelectedModels: idArray
      })
    }
    else {
      console.log("Такого індекса ще немає,тоді ДОДАЄМО його!✅");

      this.setState({
        // activeButtonIndex: index,
        indicesSelectedModels: [...this.state.indicesSelectedModels, id].sort((a, b) => a - b)

      });
    }

    // this.updateSelectedModels()
  }

  //! Формуємо(оновлюємо) масив обраних моделей [selectedModels], імпортуємо
  
  // updateSelectedModels = () => {
  //   console.log("Функція updateSelectedModels")
  //   //todo var.1
  //   // this.state.isCartButton
  //   //   ? this.setState(
  //   // prevState =>
  //   // ({
  //   //   aircraftArray: prevState.indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
  //   //     }))
  //   //   : this.setState(
  //   //     prevState =>
  //   //     ({
  //   //       selectedModels: prevState.indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
  //   //     }))

  //   //todo var.2
  //   // this.setState(
  //   //     prevState =>
  //   //     ({
  //   //       selectedModels: prevState.indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
  //   //   }))
    
  //   //todo var.3
  //   return this.state.indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
  // } 
   

    //!Фільтрація var.2 
    // allFiltration = () => {
    //   console.log("new All")
    //   return "Магазин моделей літальних апаратів"
    // };

    // planeFiltration = () => {
    //   console.log("new Planes")
    //   return "Магазин моделей літаків"
    // };

    // helicopterFiltration = () => {
    //   console.log("new Helicopters")
    //   return "Магазин моделей вертольотів"
    // };

  render() {

    const {
      bgColor,
      aircraftTitle,
      aircraftArray,
      activeButton,
      // activeButtonIndex,
      indicesSelectedModels,
      // selectedModels,
      isCartButton
    } = this.state;
      
    //! Формуємо(оновлюємо) масив обраних моделей [selectedModels]
    // const selectedModels = indicesSelectedModels.flatMap((item) => aircrafts.filter((el) => item === el.id))
    const selectedModels = updateSelectedModels(indicesSelectedModels, aircrafts);


    // console.log("activeButtonIndex: ", activeButtonIndex);
    console.log("indicesSelectedModels: ", indicesSelectedModels);
    console.log('selectedModels: ', selectedModels);

      return (
        <>
          {/*//!  Filter */}
          {/* <div className={css.filterBox}>
                <button
                    className={css.buttonAllFiltration}
                    type="button"
                    onClick={this.allFiltration}
                >
                    ВСІ
                </button>
        
                <button
                    className={css.buttonPlaneFiltration}
                    type="button"
                    onClick={this.planeFiltration}
                >
                    Літаки
                </button>
        
                <button
                    className={css.buttonHelicopterFiltration}
                    type="button"
                    onClick={this.helicopterFiltration}
                >
                    Вертольоти
                </button>
        
                </div> */}
          <Filter
            onAll={this.allFiltration}
            onPlanes={this.planeFiltration}
            onBiplanes={this.biplanesFiltration}
            onHelicopters={this.helicopterFiltration}
            onCart={this.cartFiltration}
            //! Візуалізація активної кнопки 
            activeButton={activeButton}
            selectedLength={indicesSelectedModels.length}
          />
          {/* <Section
          isOn={this.state.isPlanes}
          title="Магазин моделей літаків"
          bgColor={this.state.bgColor}
        >
          <PlanesList items={planes} />
        </Section >
        <Section
          isOn={this.state.isHelicopters}
          title="Магазин моделей гелікоптерів"
          bgColor={this.state.bgColor}
        >
          <PlanesList items={helicopters} />
        </Section > */}
          <Section
            // isOn={this.state.isAll}
            title={aircraftTitle}
            bgColor={bgColor}
          >
            <PlanesList
              //todo var.1
              // items={aircraftArray}
              //todo var.2
              items={isCartButton ? selectedModels : aircraftArray}
              onActiveId={this.getActiveId}
              indicesSelectedModels={indicesSelectedModels}
            />
          </Section >
          {/* <Section
          // isOn={this.state.isPlanes}>
          title="Магазин моделей літаків"
          <PlanesList items={aircrafts} />
        </Section > */}
        </>
      )
    }
  }