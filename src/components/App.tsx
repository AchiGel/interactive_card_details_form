import "../styles/App.css";
import Input from "./Input";
import bg_mobile from "../images/bg-main-mobile.png";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

function App() {
  return (
    <div className="App">
      <section className="backGround">
        <img src={bg_mobile} alt="bg" />
        <BackCard />
        <FrontCard />
      </section>
      <form className="card-form">
        <Input
          inputId="cardHolderName"
          inputType="text"
          inputLabel="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
        />
        <Input
          inputId="cardNumber"
          inputType="number"
          inputLabel="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="card-form-row">
          <Input
            inputId="cardDate"
            inputType="number"
            inputLabel="Exp. Date (MM/YY)"
            placeholder="MM"
            placeholder2="YY"
          />
          <Input
            inputId="cardCvc"
            inputType="number"
            inputLabel="CVC"
            placeholder="e.g. 123"
          />
        </div>

        <button>Confirm</button>
      </form>
    </div>
  );
}

export default App;
