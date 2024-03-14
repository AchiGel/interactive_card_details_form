import "../styles/frontCard.css";
import icons from "../images/card-logo.svg";

function FrontCard(props: any) {
  return (
    <div className="frontCard">
      <div className="frontCard-icons">
        <img src={icons} alt="icons" />
      </div>
      <div className="frontCard-number">
        <span className="frontCard-number-nums">
          {props.success ? props.cardNumber : "0000 0000 0000 0000"}
        </span>
      </div>
      <div className="frontCard-bottom">
        <span className="frontCard-name">
          {props.success ? props.cardHolderName : "JANE APPLESEED"}
        </span>
        <span className="frontCard-date">
          {props.success ? props.cardDateMm : "00"}/
          {props.success ? props.cardDateYy : "00"}
        </span>
      </div>
    </div>
  );
}

export default FrontCard;
