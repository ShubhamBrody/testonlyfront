/* eslint-disable import/no-anonymous-default-export */
import classes from "./SignIn.module.css";
import { useState } from "react";
import axios from "axios";

export default (props) => {
  const [isSecKeyCorrect, setIsSecKeyCorrect] = useState(false);
  const [secKey, setSecKey] = useState("");
  const [newPass, setNewPass] = useState("");
  const [cnfPass, setCnfPass] = useState("");
  const [error, setError] = useState("I am the error");

  const secKeyInputHandler = (e) => {
    setSecKey(e.target.value);
  };

  const secKeyFormHandler = async (e) => {
      e.preventDefault();
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/securitykeyvalidation", {
        securitykey: secKey,
      })
      .then((res) => {
        if (res.data === "SecurityKeyMatched") setIsSecKeyCorrect(true);
        else{
            timerError("secKeyWrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const timerError = (id) => {
      var newPassError = document.getElementById(id);
      newPassError.style.visibility = "visible";
      setTimeout(() => {
        newPassError.style.visibility = "hidden";
      }, 1500)
  }

  const newPassFormHandler = async (e) => {
    e.preventDefault();
    if (cnfPass !== newPass) {
      setError("Passwords do not match.");
      timerError("newPassWrong");
    } else if (cnfPass.length < 7) {
      setError("Password too short. Must be atleast 7 characters long.");
      timerError("newPassWrong");
    } else {
      await axios
        .post("http://localhost:5000/admin/updatepassword", {
          password: cnfPass,
        })
        .then((res) => {
            window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const newPassChangeHandler = (e) => {
    setNewPass(e.target.value);
  }

  const cnfPassChangeHandler = (e) => {
    setCnfPass(e.target.value);
  }

  return (
    <div>
      {!isSecKeyCorrect ? (
        <form>
          <div className={classes.innerDivs}>
            <h1>ForgotPassword</h1>
          </div>
          <div>
            <div className={classes.innerDivs}>
              <input
                type="text"
                placeholder="Security Key"
                onChange={secKeyInputHandler}
              />
            </div>
            <div>
              <p
                id="secKeyWrong"
                style={{
                  color: "yellow",
                  fontSize: "1rem",
                  textAlign: "center",
                  visibility: "hidden"
                }}
              >
                Security Key is wrong
              </p>
            </div>
            <div className={classes.innerDivs}>
              <button onClick={secKeyFormHandler} type="submit" className={classes.signInButton}>
                Submit
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form>
          <div className={classes.innerDivs}>
            <h1>ForgotPassword</h1>
          </div>
          <div className={classes.innerDivs}>
            <input id='newPass' type="password" placeholder="New Password" onChange={newPassChangeHandler} onMouseOver={(e) => {document.getElementById(e.target.id).style.type = 'text'}}/>
          </div>
          <div className={classes.innerDivs}>
            <input id='cnfPass' type="password" placeholder="Confirm Password" onChange={cnfPassChangeHandler} onMouseOver={(e) => {document.getElementById(e.target.id).style.type = 'text'}}/>
          </div>
          <div>
            <p
              id="newPassWrong"
              style={{
                color: "yellow",
                fontSize: "1rem",
                textAlign: "center",
                visibility: "hidden"
              }}
            >
              {error}
            </p>
          </div>
          <div className={classes.innerDivs}>
            <button
              onClick={newPassFormHandler}
              type="submit"
              className={classes.signInButton}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
