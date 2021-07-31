/* eslint-disable import/no-anonymous-default-export */
import classes from "./Video.module.css";

export default (props) => {
  return (
    <iframe
      title={props.title}
      className={classes.video}
      src={props.vidSrc}
      width={props.width}
      height={props.height}
    />
  );
};
