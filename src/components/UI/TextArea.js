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
        <p style={{ color: "#ffb302", display: "inline" }}>
          {props.required ? "*" : ""}
        </p>
      </label>
      <textarea
        id="inp"
        required={props.required}
        value={value}
        onChange={inputChangeHandler}
        style={{height: props.height, resize: 'none'}}
      />
    </div>
  );
};
