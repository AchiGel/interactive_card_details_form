import "../styles/backCard.css";

function BackCard(props: any) {
  return (
    <div className="backCard">
      <div className="backCard-number">
        <span>{props.success ? props.cardCVC : "000"}</span>
      </div>
    </div>
  );
}

export default BackCard;
