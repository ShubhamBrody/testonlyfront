import { Card, CardTitle, CardSubtitle } from "react-bootstrap-card";
import EdiText from 'react-editext';
import styled from 'styled-components';
import NewsEditForm from "./NewsEditForm";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const News = (props) => {

  const [dummy, setDummy] = useState("No value");
  const [newsObj, setNewsObj] = useState({
    date: "??",
    news: "No News...",
  });
  const [passwordEntered, setPasswordEntered] = useState("");

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
    await axios
      .post("http://localhost:5000/news/create", {
        header: "News",
        date: "MAY 2021",
        news: "Geolife Youth Club has comeup with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focusses on period positivity and eco-friendly sustainable practices for the same.",
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  const newsSubmitHandler2 = async () => {
    await axios
      .post("http://localhost:5000/news/update", {
        header: "News",
        date: "JULY 2021",
        news: "The campaign was successful and we plan to organise more campaigns.",
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  };

  const newsSubmitHandler3 = async () => {
    await axios
      .post("http://localhost:5000/news/get", {
        header: "News",
      })
      .then((res) => {
        setNewsObj({
          date: res.data.date,
          news: res.data.news,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const inputChangeHandler = (e) => {
    setPasswordEntered(e.target.value);
  };

  const getCheck = (val) => {
    console.log(val);
  };

  const location = useLocation();


    const [fields, updateFields] = useState({
      date: "MAY 2021",
      news: "GeoLife Youth Club has come up with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focuses on period positivity and eco-friendly sustainable practices for the same."
    });

    return (
        <Grid>
          <br/>
          <CardTitle style={{color: '#ffffff', zIndex: '-1', width: '70px', margin: "0px auto"}}>News</CardTitle>
            
          <Container>

          {location.state && location.state.admin
          ? (<NewsEditForm fields={fields} updateFields={updateFields} />)
          :  (<>
            <br/>
            <Date type="text" value="MAY 2021"/><br/>
            <TextArea rows="6" cols="68" value="GeoLife Youth Club has come up with the PROJECT RED DOT campaign to raise awareness about menstruation and sanitary menstruation practices. This campaign focuses on period positivity and eco-friendly sustainable practices for the same."/>
            </>)}
          </Container>
        </Grid>
    );
};

const Date = styled.input`
  border: none;
  background-color: #191919;
  color: #e0aa3e;
  font-weight: 600;
  font-size: 14px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 20px;
  pointer-events: none;
  z-index: -1;
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  border: none;
  background-color: #191919;
  margin: 0px auto;
  text-align: center;
  resize: none;
  z-index: -1;
  pointer-events: none;
  color: white;
`;

const Grid = styled(Card)`
    margin-top: -300px;
    background-color: #191919;
    opacity: 0.8;
    width: 40rem;
    height: 22.5rem;
    border-radius: 6px;
    position: relative;
    text-align: center;
    color: white;
    // overflow: scroll;

    @media (max-width: 1400px) {
      margin-top: 0px;
      width: 56rem;
      height: 31.5rem;
  }
`;

const Container = styled.div`
  padding: 10px;
  // padding-bottom: 10px;
  padding-left: 35px;
  padding-right: 35px;
  z-index: -2;
`;

const StyledEdiText = styled(EdiText)`
  button {
    border-radius: 5px;
    width: 50px;
    height: 35px;
    margin-top: -210px;
    margin-left: 480px;
    padding-top: 10px;
    z-index: 300;
    font-size: 15px;
    color: white;
  }
  button[editext="edit-button"] {
    border-radius: 50%;
    color: white;
    background-color: transparent;
    border: transparent;
    // font-size: large;
    
    &:before { 
      content: url("pencil-alt-solid.svg"); 
      font-size: 30px;
      padding-left: 20px;
    }
  }
  button[editext="save-button"] {
    width: 45px;
    height: 40px;
    margin-top: -270px;
    margin-left: 390px;
    background-color: transparent;
    border: transparent;
    &:hover {
      color: #fff;
      background-color: transparent;
      border: transparent;
    }
  }
  button[editext="cancel-button"] {
    width: 45px;
    height: 40px;
    margin-top: -270px;
    margin-left: 0px;
    background-color: transparent;
    border: transparent;
    &:hover {
      color: #fff;
      background-color: transparent;
      border: transparent;
    }
  }
  input, textarea {
    background: transparent;
    color: #fff;
    resize: none;
    scrollable: true;
    text-align: justify;
    // font-weight: bold;
    // border-radius: 5px;
    // margin-top: 0px;
    // width: 300px;
    // height: 300px;
  }
  .my-custom-view-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .my-custom-view-wrapper div:last-child {
    /* Here we are styling the button container. */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: right;
    color: #191919;
  }
;`

export default News;