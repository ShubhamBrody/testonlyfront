/* eslint-disable import/no-anonymous-default-export */
import classes from "./TextArea.module.css";
import { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("");
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    props.inputChanged({ label: props.label, value: e.target.value });
  };

  return (
    <div className={classes.formPair}>
      <label htmlFor="inp">
        {props.label}
        <p style={{ color: "#e0aa3e", display: "inline" }}>
          {props.required ? "*" : ""}
        </p>
      </label>
      <textarea
        id="inp"
        type={props.type}
        required={props.required}
        value={value}
        onChange={inputChangeHandler}
        step={props.isNumber ? props.step : null}
        min={props.isNumber ? props.min : null}
        cols={props.cols}
        rows={props.rows}
      />
    </div>
  );
};
