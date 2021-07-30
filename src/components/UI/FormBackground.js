/* eslint-disable import/no-anonymous-default-export */
import classes from './FormBackground.module.css';

export default (props) => {
    return (
        <div style={props.style} className={classes.formConatiner}>
            {props.children}
        </div>
    )
}