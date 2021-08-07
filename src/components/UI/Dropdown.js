/* eslint-disable import/no-anonymous-default-export */

import classes from "./Dropdown.module.css";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
    <div
      className={`${classes.dropdown} ${
        !props.isMedia ? classes.projects_dropdown : ""
      }`}
    >
      <div className={classes.dropbtn}>{props.dropbtncontent}</div>
      <div className={classes.dropdowncontent}>
        <ul>
          {props.links.map((link) => {
            return link.text === "ADMIN" ? (
              link.div
            ) : link.text !== props.exception ? (
              <li>
                <NavLink
                  activeClassName={classes.activelink}
                  exact={true}
                  to={link.linkto}
                  style={link.style || {}}
                >
                  <div className={classes.navdivinternal}>{link.text}</div>
                </NavLink>
              </li>
            ) : (
              <ul>
                {link[props.innerlinks].map((mission) => {
                  return (
                    <li>
                      <NavLink
                        activeClassName={classes.activelink}
                        exact={true}
                        to={mission.linkto}
                        style={mission.style || {}}
                      >
                        <div className={classes.navdivinternal}>
                          {mission.text}
                        </div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
