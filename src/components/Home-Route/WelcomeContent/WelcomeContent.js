import styled from "styled-components";
import { React } from 'react';

const Welcome = (props) => {
  return (
    <Container>
      <VerticalButton>
        <a href="/" target="_blank">Join Us</a>
      </VerticalButton>
      <img src="geolife-youth-club.png" alt="GYC"/>
      <SecondDiv />
    </Container>
  );
};

const SecondDiv = styled.div`
  background-image: url(top-image.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 500px 0px ;
  text-align: center;
  margin-bottom:0px;
`;

const VerticalButton = styled.div`
    padding:0px 0px 0px 0px;
    text-align: center;
    margin:0px;
    width: 160px;
    height:40px;
    background:#191919;
    z-index:15;
    border-radius: 5px 5px 0px 0px;
    -moz-transform:rotate(-90deg);
    -ms-transform:rotate(-90deg);
    -o-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg);
    transform-origin: bottom right;
    position: fixed;
    right: 0px;
    margin-top: -90px;    

    a {
        color:#e0aa3e;
        font-size: 16px;
        display:inline-block;
        line-height:40px;
    }
`;


const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    margin-top:-100px;
    padding:0;

    h3 {
        display: inline;
        color: white;
    }

    span {
        font-size: 120%;
    }

    img {
      margin-bottom: -900px;
    }
`;

export default Welcome;