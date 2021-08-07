/* eslint-disable import/no-anonymous-default-export */
import classes from "./SignIn.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
export default (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [credsEntered, setCredsEntered] = useState({
    username: "",
    password: "",
  });

  const passChangeHandler = (e) => {
    setCredsEntered((prevCredsEntered) => {
      return {
        ...prevCredsEntered,
        password: e.target.value,
      };
    });
  };

  const nameChangeHandler = (e) => {
    setCredsEntered((prevCredsEntered) => {
      return {
        ...prevCredsEntered,
        username: e.target.value,
      };
    });
  };

  const adminFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/login", {
        username: credsEntered.username,
        password: credsEntered.password,
      })
      .then((res) => {
        if (res.data === "PassMatched") {
          console.log(res.data);
          dispatch({
            type: "SIGNED_IN",
          });
          history.push({ pathname: "/"});
        } else {
          var error = document.getElementById("userPassWrong");
          error.style.visibility = "visible";
          setTimeout(() => {
            error.style.visibility = "hidden";
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <div className={classes.innerDivs}>
          <h1>Sign In</h1>
        </div>
        <div className={classes.innerDivs}>
          <input
            type="text"
            placeholder="Username"
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.innerDivs}>
          <input
            type="password"
            placeholder="Password"
            onChange={passChangeHandler}
          />
        </div>
        <div>
          <p
            id="userPassWrong"
            style={{
              color: "yellow",
              fontSize: "1rem",
              textAlign: "center",
              visibility: "hidden",
            }}
          >
            Username/Password is wrong
          </p>
        </div>
        <div className={classes.innerDivs}>
          <button
            onClick={adminFormSubmit}
            type="submit"
            className={classes.signInButton}
          >
            Submit
          </button>
        </div>
      </form>
      <div className={classes.forgot}>
        <p
          onClick={() => {
            props.wrongCreds(true);
          }}
        >
          Forgot Password
        </p>
      </div>
    </div>
  );
};
