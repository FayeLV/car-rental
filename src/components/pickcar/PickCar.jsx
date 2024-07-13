import { useState } from "react";
import CarBox from "../carbox/CarBox";
import { CAR_DATA } from "../CarData";
import "./pickcar.css";

const carButtons = [
  { id: "btn1", name: "Audi A1 S-Line", carID: 1 },
  { id: "btn2", name: "VW Golf 6", carID: 0 },
  { id: "btn3", name: "Toyota Camry", carID: 2 },
  { id: "btn4", name: "BMW 320 ModernLine", carID: 3 },
  { id: "btn5", name: "Mercedes-Benz GLK", carID: 4 },
  { id: "btn6", name: "VW Passat CC", carID: 5 },
];

function PickCar() {
  const [active, setActive] = useState("btn1");

  const handleButtonClick = (id, carID) => {
    setActive(id);
  };

  const renderButtons = () => {
    return carButtons.map((button) => (
      <button
        key={button.id}
        className={active === button.id ? "colored-button" : ""}
        onClick={() => handleButtonClick(button.id, button.carID)}
      >
        {button.name}
      </button>
    ));
  };

  return (
    <section className="pick-section">
      <div className="container">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="pick-container__car-content">
            <div className="pick-box">{renderButtons()}</div>
            <CarBox
              data={CAR_DATA}
              carID={carButtons.find((button) => button.id === active).carID}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
