import "../styles/input.css";

function Input(props: any) {
  return (
    <div className="input-box">
      {props.inputId !== "cardDate" ? (
        <>
          <label htmlFor={props.inputId}>{props.inputLabel}</label>
          <input
            placeholder={props.placeholder}
            type={props.inputType}
            id={props.inputId}
          />
        </>
      ) : (
        <div className="input-box-date">
          <label htmlFor={props.inputId}>{props.inputLabel}</label>
          <div className="input-box-date-inputs">
            <input
              placeholder={props.placeholder}
              type={props.inputType}
              id={props.inputId}
            />
            <input
              placeholder={props.placeholder2}
              type={props.inputType}
              id={props.inputId}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Input;
