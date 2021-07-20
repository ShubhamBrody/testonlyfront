/* eslint-disable import/no-anonymous-default-export */
import classes from "./Input.module.css";
import  {useState} from "react";

export default (props) => {
    const [value, setValue] = useState('');
  const inputChangeHandler = (e) => {
      console.log(e.target.value);
    setValue(e.target.value);
    props.inputChanged({ label: props.label, value: e.target.value });
  };

  return (
    <div className={classes.formPair}>
      <label htmlFor="inp">
        {props.label}
        <p style={{ color: "#ffb302", display: "inline" }}>
          {props.required ? "*" : ""}
        </p>
      </label>
      <input
        id="inp"
        type={props.type}
        required={props.required}
        value={value}
        onChange={inputChangeHandler}
        step={props.isNumber ? props.step : null}
        min={props.isNumber ? props.min : null}
      />
    </div>
  );
};
