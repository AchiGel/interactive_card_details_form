import "../styles/input.css";

function Input(props: any) {
  return (
    <div className="input-box">
      {props.inputId !== "cardDate" ? (
        <>
          <label htmlFor={props.inputId}>{props.inputLabel}</label>
          <input
            className={props.className}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder}
            type={props.inputType}
            id={props.inputId}
          />
          {props.nameError && props.validateName ? (
            <span className="error">Can't be blank</span>
          ) : null}
          {props.numberError && props.validateNumber ? (
            <span className="error">Wrong format, numbers only</span>
          ) : null}
          {props.cvcError && props.validateCVC ? (
            <span className="error">Can't be blank</span>
          ) : null}
        </>
      ) : (
        <div className="input-box-date">
          <label htmlFor={props.inputId}>{props.inputLabel}</label>
          <div className="input-box-date-inputs">
            <input
              className={props.className}
              value={props.valueMm}
              onChange={props.onChangeMm}
              placeholder={props.placeholder}
              type={props.inputType}
              id={props.inputId}
            />
            <input
              className={props.className}
              value={props.valueYy}
              onChange={props.onChangeYy}
              placeholder={props.placeholder2}
              type={props.inputType}
              id={props.inputId}
            />
          </div>
          {(props.dateMmError || props.dateYyError) &&
          (props.validateDateMm || props.validateDateYy) ? (
            <span className="error">Can't be blank</span>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default Input;
