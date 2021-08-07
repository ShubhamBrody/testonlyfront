/* eslint-disable import/no-anonymous-default-export */
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import hamburger from "../../resources/images/hamburger.svg";
import Dropdown from "../UI/Dropdown";
import SignInorOut from './SignInorOut';

export default (props) => {

  const signedInToken = useSelector(state => state.signedIn);
  const dispatch = useDispatch();

  const signOutTokenHandler = () => {
    dispatch({ type: 'SIGNED_OUT' });
  }

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
                  dropbtncontent={<div className={classes.dropdownHeader}>Projects&nbsp;<div style={{display:'inline-block'}} className={classes.triangle}></div></div>}
                  links={link.missions}
                  exception={null}
                />
              </li>
            );
          })}
          <SignInorOut 
           signIn = {signedInToken}
           linkto = "/signin"
           style= {{fontWeight: 'bold'}}
           signOutHandler = {signOutTokenHandler}
          />
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