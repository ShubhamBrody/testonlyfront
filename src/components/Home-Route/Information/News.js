import { Card, CardTitle } from "react-bootstrap-card";
import styled from 'styled-components';
import NewsEditForm from "./NewsEditForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import API from '../../../api/ApiLink';

const News = (props) => {

  const signedInToken = useSelector(state => state.signedIn);

  const [newsObj, setNewsObj] = useState({
    date: "",
    news: "",
    hasUpdated: false,
  });

  useEffect(() => {
    console.log("This useeffect ran");
    newsGetter();
  }, []);

  const newsGetter = async () => {
    await axios
      .post(API("news", "get"), {
        header: "News",
      })
      .then((res) => {
        setNewsObj({
          date: res.data.date,
          news: res.data.news,
          hasUpdated: true,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateFields = (date, news) => { 
    setNewsObj((prevData) => ({
      date: date,
      news: news,
      hasUpdated: prevData.hasUpdated,
    }))
  }

    return (
        <Grid>
          <br/>
          <CardTitle style={{color: '#ffffff', zIndex: '-1', width: '70px', margin: "0px auto"}}>News</CardTitle>
            
          <Container>
          {signedInToken && newsObj.hasUpdated
          ? (<NewsEditForm fields={newsObj} updateFields={updateFields} />)
          :  (<>
            <br/>
            <Date type="text" value={newsObj.date}/><br/>
            <TextArea rows="7" cols="60" value={newsObj.news}/>
            </>)}
          </Container>
        </Grid>
    );
};

const Date = styled.input`
  border: none;
  background-color: #191919;
  color: #e0aa3e;
  font-size: 15px;
  margin: 0px auto;
  text-align: center;
  margin-bottom: 20px;
  pointer-events: none;
  z-index: -1;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;

const TextArea = styled.textarea`
  font-size: 18px;
  margin-top: 5px;
  border: none;
  background-color: #191919;
  margin: 0px auto;
  text-align: center;
  resize: none;
  z-index: -1;
  pointer-events: none;
  color: #fff;
  overflow-y: auto;

  @media (max-width: 1400px) {
    font-size: 24px;
  }
`;

const Grid = styled(Card)`
    background-color: #191919;
    opacity: 0.8;
    width: 40rem;
    height: 22.5rem;
    border-radius: 6px;
    position: relative;
    text-align: center;
    color: #fff;
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

export default News;