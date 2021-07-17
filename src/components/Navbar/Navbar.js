/* eslint-disable import/no-anonymous-default-export */
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import logo from '../../resources/images/logo.png';

export default (props) => {
  return (
    <div className={classes.Navbar}>
      <div
        style={{ backgroundImage: `url(${props.imgSrc})` }}
        className={classes.logo}
      />
      <div className={classes.links}>
        <ul>
          {props.links.map((link) => {
            return (
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
            );
          })}
        </ul>
      </div>
      <div className={classes.dropdown}>
        <div className={classes.dropbtn}>Links(IMG)</div>
        <div className={classes.dropdowncontent}>
          <ul>
            {props.links.map((link) => {
              return (
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
              );
            })}
          </ul>
        </div>        
      </div>
    </div>
  );
};
