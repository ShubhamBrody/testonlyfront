/* eslint-disable import/no-anonymous-default-export */
import classes from "./Form.module.css";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Textarea from "./TextArea";
import FormBackground from "./FormBackground";

export default (props) => {
  var isFormFilled = props.isFormFilled;
  var bgStyle = props.hasBG ? {
    backgroundImage: `url(${props.imgSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingLeft: "150px",
    paddingRight: "150px",
  } : {};
  
  return !isFormFilled ? (
    <div classNme={classes.background} style={bgStyle}>
      <FormBackground style={props.customStyle}>
        <div className={classes.formTitle}>
          <h3>{props.title}</h3>
        </div>
        <form onSubmit={props.onSubmitHandler}>
          {props.fields.map((field) => {
            return field.fieldType === "input" ? (
              <Input
                key={field.id}
                label={field.label}
                type={field.type}
                required={field.required}
                inputChanged={field.inputChanged}
                min={field.isNumber && field.min}
                step={field.isNumber && field.step}
              />
            ) : field.fieldType === "checkbox" ? (
              <Checkbox
                key={field.id}
                inputChanged={field.inputChanged}
                label={field.label}
                items={field.items}
                required={field.required}
              />
            ) : field.fieldType === "textarea" ? (
              <Textarea
                key={field.id}
                inputChanged={field.inputChanged}
                label={field.label}
                required={field.required}
                height={field.height}
              />
            ) : null;
          })}
          <button className={classes.submitbtn} type="submit">
            Submit
          </button>
        </form>
      </FormBackground>
      {props.contactDetailsTag && (
        <FormBackground style={{ marginTop: "50px", ...props.customStyle }}>
          <p style={{ color: "white", textAlign: "center" }}>
            {props.bottomTabText}
          </p>
        </FormBackground>
      )}
    </div>
  ) : (
    <div style={bgStyle}>
      <FormBackground
        style={{ width: "90%", textAlign: "center" }}
      >
        <h1 style={{ color: "#e0aa3e", fontSize: "6rem" }}>THANK YOU</h1>
        <button
          className={classes.submitbtn}
          onClick={(e) => {
            props.fillAgain() || e.preventDefault();
          }}
        >
          Fill the form Again
        </button>
      </FormBackground>
    </div>
  );
};
