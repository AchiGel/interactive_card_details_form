import "../styles/App.css";
import Input from "./Input";
import bg_mobile from "../images/bg-main-mobile.png";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { useState } from "react";
import successIcon from "../images/icon-complete.svg";

function App() {
  const [cardHolderName, setCardHolderName] = useState<string | number>("");
  const [cardNumber, setCardNumber] = useState<string | number>("");
  const [cardDateMm, setCardDateMm] = useState<string | number>("");
  const [cardDateYy, setCardDateYy] = useState<string | number>("");
  const [cardCVC, setCardCVC] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [dateMmError, setDateMmError] = useState(false);
  const [dateYyError, setDateYyError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  function validateName(value: string | number) {
    return value === "";
  }

  function validateNumber(value: any) {
    if (value.match(/[a-zA-Z]/) || value === "") {
      return true;
    }
    return false;
  }

  function validateDateMm(value: any) {
    return value === "";
  }
  function validateDateYy(value: any) {
    return value === "";
  }

  function validateCVC(value: number | null) {
    return value === null;
  }

  return (
    <div className="App">
      <section className="backGround">
        <img src={bg_mobile} alt="bg" />
        <BackCard cardCVC={cardCVC} success={success} />
        <FrontCard
          cardDateMm={cardDateMm}
          cardDateYy={cardDateYy}
          cardHolderName={cardHolderName}
          cardNumber={cardNumber}
          success={success}
        />
      </section>
      {success ? (
        <div className="success-page">
          <img src={successIcon} alt="Complete" />
          <span className="success-thanks">THANK YOU!</span>
          <span className="success-text">We’ve added your card details</span>
          <button
            onClick={() => {
              setSuccess(!success);
              setCardCVC(null);
              setCardDateMm("");
              setCardDateYy("");
              setCardNumber("");
              setCardHolderName("");
              setCvcError(false);
              setDateMmError(false);
              setDateYyError(false);
              setNameError(false);
              setNumberError(false);
            }}
          >
            Continue
          </button>
        </div>
      ) : (
        <form
          className="card-form"
          onSubmit={(e) => {
            e.preventDefault();

            if (
              !validateCVC(cardCVC) &&
              !validateDateMm(cardDateMm) &&
              !validateDateYy(cardDateYy) &&
              !validateName(cardHolderName) &&
              !validateNumber(cardNumber)
            ) {
              setSuccess(!success);
            } else {
              setCvcError(true);
              setDateMmError(true);
              setDateYyError(true);
              setNameError(true);
              setNumberError(true);
            }
          }}
        >
          <Input
            className={
              nameError && validateName(cardHolderName)
                ? "input-error"
                : "input-success"
            }
            nameError={nameError}
            value={cardHolderName}
            onChange={(e: any) => {
              setCardHolderName(e.target.value);
              validateName(e.target.value);
            }}
            validateName={validateName(cardHolderName)}
            inputId="cardHolderName"
            inputType="text"
            inputLabel="Cardholder Name"
            placeholder="e.g. Jane Appleseed"
          />
          <Input
            className={
              numberError && validateNumber(cardNumber)
                ? "input-error"
                : "input-success"
            }
            numberError={numberError}
            value={cardNumber}
            validateNumber={validateNumber(cardNumber)}
            onChange={(e: any) => {
              const input = e.target.value.replace(/\s/g, "");
              const formattedInput = input.replace(/(\d{4})/g, "$1 ").trim();
              if (formattedInput.length > 20) {
                return;
              }
              setCardNumber(formattedInput);
              validateNumber(formattedInput);
            }}
            inputId="cardNumber"
            inputType="text"
            inputLabel="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <div className="card-form-row">
            <Input
              className={
                (dateMmError || dateYyError) &&
                (validateDateMm(cardDateMm) || validateDateYy(cardDateYy))
                  ? "input-error"
                  : "input-success"
              }
              dateMmError={dateMmError}
              dateYyError={dateYyError}
              valueMm={cardDateMm}
              valueYy={cardDateYy}
              onChangeMm={(e: any) => {
                if (e.target.value.length > 2) {
                  return;
                }
                setCardDateMm(e.target.value);
                validateDateMm(e.target.value);
              }}
              onChangeYy={(e: any) => {
                if (e.target.value.length > 2) {
                  return;
                }
                setCardDateYy(e.target.value);
                validateDateYy(e.target.value);
              }}
              validateDateMm={validateDateMm(cardDateMm)}
              validateDateYy={validateDateYy(cardDateYy)}
              inputId="cardDate"
              inputType="number"
              inputLabel="Exp. Date (MM/YY)"
              placeholder="MM"
              placeholder2="YY"
            />
            <Input
              className={
                cvcError && validateCVC(cardCVC)
                  ? "input-error"
                  : "input-success"
              }
              value={cardCVC}
              cvcError={cvcError}
              onChange={(e: any) => {
                if (e.target.value.length > 3) {
                  return;
                }
                setCardCVC(e.target.value);
                validateCVC(e.target.value);
              }}
              validateCVC={validateCVC(cardCVC)}
              inputId="cardCvc"
              inputType="number"
              inputLabel="CVC"
              placeholder="e.g. 123"
            />
          </div>

          <button>Confirm</button>
        </form>
      )}
    </div>
  );
}

export default App;
