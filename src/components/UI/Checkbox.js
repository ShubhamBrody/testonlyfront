/* eslint-disable import/no-anonymous-default-export */
import classes from "./Checkbox.module.css";
import { useState } from "react";

export default (props) => {
  const defaultValue = Array.from(Array(props.items.length).keys()).fill("off");
  const realSendVal = {
    label: props.label,
    value: defaultValue,
  }
  const [dataToSend, setDataToSend] = useState(realSendVal);
  const inputChangeHandler = (e) => {
    console.log("Index is : ", e.target.id);
    setDataToSend((prevData) => {
      prevData.value[e.target.id] = prevData.value[e.target.id] === "on" ? "off" : "on";
      return prevData;
    }, (newData) =>  console.log(newData));
    props.inputChanged(dataToSend);
  };

  return (
    <div className={classes.formPair}>
      <label htmlFor="inp">
        {props.label}
        <p style={{ color: "#e0aa3e", display: "inline" }}>
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
