/* eslint-disable import/no-anonymous-default-export */

import { useState, Fragment } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import links from "../Navbar/Navbar.initial";
import logo from "../../resources/images/logo.png";

export default () => {
  const [dummy, setDummy] = useState("qwqwqw");
  const [newsObj, setNewsObj] = useState({
    date: "??",
    news: "No News...",
  });
  const [passwordEntered, setPasswordEntered] = useState('');

  const adminSubmitHandler1 = () => {
    console.log("Works!!");
    axios
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

  const adminSubmitHandler2 = () => {
    console.log("Works!!");
    axios
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

  const adminSubmitHandler3 = () => {
    console.log("Works!!");
    axios
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

  const adminSubmitHandler4 = () => {
    console.log("Works!!");
    axios
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

  const newsSubmitHandler1 = () => {
    axios.post("http://localhost:5000/news/create", {
      header: "News",
      date: "MAY 2021",
      news: "Geolife Youth Club has comeup with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focusses on period positivity and eco-friendly sustainable practices for the same.",
    }).then(res => console.log(res)).catch(err => {console.error(err);});
  };

  const newsSubmitHandler2 = () => {
    axios.post("http://localhost:5000/news/update", {
      header: "News",
      date: "JULY 2021",
      news: 'The campaign was successful and we plan to organise more campaigns.',
    }).then(res => console.log(res)).catch(err => {console.error(err);});
  };

  const newsSubmitHandler3 = () => {
    axios.post('http://localhost:5000/news/get', {
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


  return (
    <Fragment>
      <Navbar links={links} imgSrc={logo} />
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
    </Fragment>
  );
};