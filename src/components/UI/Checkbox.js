/* eslint-disable import/no-anonymous-default-export */
import classes from "./Checkbox.module.css";
import { useState } from "react";

export default (props) => {
  const array = Array.from(Array(props.items.length).keys()).fill("off");
  const defaultValue = {
    label: props.label,
    value: array
  }
  const [value, setValue] = useState(defaultValue);
  const inputChangeHandler = (e) => {
    console.log(e.target.value);
    setValue((prevData) => {
      prevData.value[e.target.id] = prevData[e.target.id] === "on" ? "off" : "on";
      return prevData;
    });
    props.inputChanged(value);
  };

  return (
    <div className={classes.formPair}>
      <label htmlFor="inp">
        {props.label}
        <p style={{ color: "#ffb302", display: "inline", marginBottom: '10px'}}>
          {props.required ? "*" : ""}
        </p>
      </label>
      {props.items.map((item, idx) => {
        return (
          <label className={classes.containerLabel}>
            {item}
            <input
              id={idx}
              className={classes.checkbox}
              type="checkbox"
              onChange={inputChangeHandler}
            />
            <span className={classes.mark}></span>
          </label>
        );
      })}
    </div>
  );
};
