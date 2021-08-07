/* eslint-disable import/no-anonymous-default-export */

// {
//     linkto: "/signin",
//     text: 'SignIn',
//     style: {fontWeight: 'bold'}
//   }

import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default (props) => { 

    const style = {...props.style,
        cursor: 'pointer',
        userSelect: 'none'
    };

    const signOutHandler = () => {
        console.log("Logged out");
        props.signOutHandler();
    }
    return (
        !props.signIn ?
            <li className={classes.listInline}>
                <NavLink
                  activeClassName={classes.activelink}
                  exact={true}
                  to={props.linkto}
                  style={props.style || {}}
                >
                  <div className={classes.navdivinternal}>SignIn</div>
                </NavLink>
              </li>
              :
              <li className={classes.listInline}>
                  <div onClick={signOutHandler} className={classes.navdivinternal} style={style}>SignOut</div>
              </li>
    )
}