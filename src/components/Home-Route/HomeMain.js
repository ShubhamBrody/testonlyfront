/* eslint-disable import/no-anonymous-default-export */

import { useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import links from "../Navbar/Navbar.initial";
import logo from "../../resources/images/logo.png";
import Checkbox from '../UI/Checkbox';
import classes from "./HomeMain.module.css";
// import fs from 'fs';

export default () => {
  const [dummy, setDummy] = useState("No value");
  const [newsObj, setNewsObj] = useState({
    date: "??",
    news: "No News...",
  });
  const [passwordEntered, setPasswordEntered] = useState('');

  
  const adminSubmitHandler1 = async () => {
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/login", {
        username: "ShubhamTiwari",
        password: passwordEntered,
      })
      .then((res) => {
        setDummy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adminSubmitHandler2 = async () => {
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/updatepassword", {
        username: "ShubhamTiwari",
        password: passwordEntered,
      })
      .then((res) => {
        setDummy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adminSubmitHandler3 = async () => {
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/add", {
        username: "ShubhamTiwari",
        password: passwordEntered,
        securitykey: "12345",
      })
      .then((res) => {
        setDummy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const adminSubmitHandler4 = async () => {
    console.log("Works!!");
    await axios
      .post("http://localhost:5000/admin/securitykeyvalidation", {
        securitykey: passwordEntered,
      })
      .then((res) => {
        setDummy(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newsSubmitHandler1 = async () => {
    await axios.post("http://localhost:5000/news/create", {
      header: "News",
      date: "MAY 2021",
      news: "Geolife Youth Club has comeup with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focusses on period positivity and eco-friendly sustainable practices for the same.",
    }).then(res => console.log(res)).catch(err => {console.error(err);});
  };

  const newsSubmitHandler2 = async () => {
    await axios.post("http://localhost:5000/news/update", {
      header: "News",
      date: "JULY 2021",
      news: 'The campaign was successful and we plan to organise more campaigns.',
    }).then(res => console.log(res)).catch(err => {console.error(err);});
  };

  const newsSubmitHandler3 = async () => {
    await axios.post('http://localhost:5000/news/get', {
      header: 'News',
    })
    .then(res => {
      setNewsObj({
        date: res.data.date, 
        news: res.data.news
      });
    }).catch(err => {console.error(err);});
  }

  const inputChangeHandler = (e) => {
    setPasswordEntered(e.target.value);
  }

  // function isPasswordValid(pass)
  // {
  //   return pass.length >= 8;
  // }

  const getCheck = (val) => {
    console.log(val);
  }

  const location = useLocation();
  // if(location === null)
  // {
  //   console.log("Location is null");
  // }
  // else if(location.state === null)
  // {
  //   console.log("State is null");
  // }
  // else if(location.state.admin === null)
  // {
  //   console.log("Admin is null");
  // }

  return (
    <Fragment>
      <Navbar links={links} imgSrc={logo} />
      <div className={classes.topimage}>
       <div className={classes.logo}/></div>
      <input type='text' onChange={inputChangeHandler} />
      <button onClick={adminSubmitHandler1}>Login</button>
      <button onClick={adminSubmitHandler2}>Update</button>
      <button onClick={adminSubmitHandler3}>make one pass</button>
      <button onClick={adminSubmitHandler4}>SecurityKeyValidation</button>
      <p>The value is : {dummy}</p>
      <br />
      <br />
      <button onClick={newsSubmitHandler1}>Add News Data</button>
      <button onClick={newsSubmitHandler2}>Update News Data</button>
      <button onClick={newsSubmitHandler3}>Get The News Data</button>
      <p>{newsObj.date}</p>
      <p>{newsObj.news}</p>
      <br/><br/>
      <Checkbox inputChanged={getCheck} label={'JK'} items={['q1', 'q2', 'q3']}/>
      <p>{location.state && location.state.admin ? "ADMIN JUST SIGNED IN" : "YOU AINT ADMIN"}</p>
      <div className={classes.bottomimage}/>
    </Fragment>
  );
};