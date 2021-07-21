/* eslint-disable import/no-anonymous-default-export */
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import hamburger from "../../resources/images/hamburger.svg";
import Dropdown from "../UI/Dropdown";

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
              <li className={classes.listInline}>
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
              <li className={classes.listInline}>
                <Dropdown
                  isMedia={false}
                  extraClass = "projects_dropdown"
                  dropbtncontent="Projects V"
                  links={link.missions}
                  exception={null}
                />
              </li>
            );
          })}
        </ul>
      </div>
        <Dropdown
          isMedia={true}
          dropbtncontent={
            <button style={{ backgroundImage: `url(${hamburger})` }} />
          }
          links={props.links}
          exception= "Projects"
          innerlinks="missions"
        />
    </div>
  );
};