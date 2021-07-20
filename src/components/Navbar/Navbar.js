/* eslint-disable import/no-anonymous-default-export */
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import hamburger from "../../resources/images/hamburger.svg";

export default (props) => {
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>
        <NavLink exact={true} to={"/"}>
          <img src={props.imgSrc} alt="GYC Logo" />
        </NavLink>
      </div>
      <div className={classes.links}>
        <ul>
          {props.links.map((link) => {
            return link.text !== "Projects" ? (
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
              <li>
                <div className={(classes.dropdown, classes.projects_dropdown)}>
                  <div className={classes.dropbtn}>Projects v</div>
                  <div className={classes.dropdowncontent}>
                    <ul>
                      {link.missions.map((mission) => {
                        return (
                          <li>
                            <NavLink
                              activeClassName={classes.activelink}
                              exact={true}
                              to={mission.linkto}
                              style={link.style || {}}
                            >
                              <div className={classes.navdivinternal}>
                                {mission.text}
                              </div>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.dropdown}>
        <div className={classes.dropbtn}>
          <button style={{ backgroundImage: `url(${hamburger})` }} />
        </div>
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
