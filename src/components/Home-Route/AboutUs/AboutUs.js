import styled from "styled-components";
import { React, useState } from 'react';
import Video from "../Video";

const details = {
  "About Us": "GYC is organised into seven structured departments namely- Public relations, HR external affairs, HR internal affairs, Sessions management, Social media, Content development, Design. We work inter-departmentally as well as intra-departmentally in a well-coordinated fashion. Volunteers are recruited based on their skill post interview. Their work is assessed every week. Weekly meetings are conducted to discuss the progress as well as new assignments. We conduct competitions and deliver presentations to inculcate import skills for their overall development.​",
  "Mission": "We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​",
  "Vision": "We intend to motivate the youth of rural India with a vision to bring rural and urban India at par by guiding them for the fulfilment of this purpose. Our vision is to make holistic education accessible and affordable to one and all which will drastically help in the development of the youth, ultimately in the development of our country",
  "History": "Geolife Youth Club is a platform established for the career counselling of young minds of rural India in the year 2017. We started by conversing with the rural youth to understand their academic issues. We connect these kids to our team of mentors who guide the kids by clearing the doubts and sharing their own experience"
}

const Viewers = (props) => {
  const [content, setContent] = useState("GYC is organised into seven structured departments namely- Public relations, HR external affairs, HR internal affairs, Sessions management, Social media, Content development, Design. We work inter-departmentally as well as intra-departmentally in a well-coordinated fashion. Volunteers are recruited based on their skill post interview. Their work is assessed every week. Weekly meetings are conducted to discuss the progress as well as new assignments. We conduct competitions and deliver presentations to inculcate import skills for their overall development.​")

  const displayContent = () => {
        if(content === "GYC is organised into seven structured departments namely- Public relations, HR external affairs, HR internal affairs, Sessions management, Social media, Content development, Design. We work inter-departmentally as well as intra-departmentally in a well-coordinated fashion. Volunteers are recruited based on their skill post interview. Their work is assessed every week. Weekly meetings are conducted to discuss the progress as well as new assignments. We conduct competitions and deliver presentations to inculcate import skills for their overall development.​") {
            return (
                <p visible={false} style={{ color:"#ffffff", paddingTop: '50px', textAlign: "center" }}>
                    {content}
                </p>
            )
        }

        return (
            <p visible={false} style={{ color:"#ffffff", paddingTop: '60px', position: "relative", textAlign: "center" }}>
                {content}
            </p>
        )
  }

  function changeColour1()
  {
    document.getElementById("aboutus").style.color = "#c5a240";
    document.getElementById("mission").style.color = "#ffffff";
    document.getElementById("vision").style.color = "#ffffff";
    document.getElementById("history").style.color = "#ffffff";
  }

  function changeColour2()
  {
    document.getElementById("aboutus").style.color = "#ffffff";
    document.getElementById("mission").style.color = "#c5a240";
    document.getElementById("vision").style.color = "#ffffff";
    document.getElementById("history").style.color = "#ffffff";
  }

  function changeColour3()
  {
    document.getElementById("aboutus").style.color = "#ffffff";
    document.getElementById("mission").style.color = "#ffffff";
    document.getElementById("vision").style.color = "#c5a240";
    document.getElementById("history").style.color = "#ffffff";
  }

  function changeColour4()
  {
    document.getElementById("aboutus").style.color = "#ffffff";
    document.getElementById("mission").style.color = "#ffffff";
    document.getElementById("vision").style.color = "#ffffff";
    document.getElementById("history").style.color = "#c5a240";
  }

  return (
    <Container>
      <Wrap1>
              <Nav>
                <NavMenu>
                    <button onClick={() => { setContent(details["About Us"]); changeColour1()} } style={{color: "black"}}>
                        <span style={{color: "#c5a240"}} id={"aboutus"}>About Us</span>
                    </button>
                    <button onClick={() => { setContent(details["Mission"]);changeColour2()} } style={{color: "black"}}>
                        <span id={"mission"}>Mission</span>
                    </button>
                    <button onClick={() => { setContent(details["Vision"]);changeColour3()} } style={{color: "black"}}>
                        <span id={"vision"}>Vision</span>
                    </button>
                    <button onClick={() => { setContent(details["History"]); changeColour4()} } style={{color: "black"}}>
                        <span id={"history"}>History</span>
                    </button>
                </NavMenu>
              </Nav>
            <Pfake>{ displayContent() }</Pfake>
            
      </Wrap1>
        <Wrap2>
            <Video youtubeId="nJJp7R77NYo" /> 
        </Wrap2> 
    </Container>
  );
};

const Pfake = styled.p`
  text-align: justify;

  padding-right: 100px;
  height: 260px;

  border-right: 2px solid #c5a240;

  @media (max-width: 1300px) {
    width: 100%;
    margin: 0px auto;
    border-right: 0px;
    padding-right: 0px;
  }
`;

const Container = styled.div`
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 100px;
  gap: 100px;

  margin-left: 0px;
  margin-right: 0px;

  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: minmax(350px, auto);
  @media (max-width: 1300px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap1 = styled.div`
  width: 860px;
  height: 450px;
  cursor: pointer;
  position: relative;

  padding-left: 40px;
  padding-right: 200px;

  @media (max-width: 1300px) {
    padding-right: 40px;
    margin: 0px auto;
  }

  background: url('aboutus.png');
  background-size: cover;
`;

const Wrap2 = styled.div`
  padding-top: 8%;
  padding-left: 0px;
  width: 600px;
  height: 500px;

  cursor: pointer;
  position: relative;

  @media (max-width: 1300px) {
    margin: 0px auto;
    margin-bottom: -50px;
    width: 700px;
    height: 600px;
  }
`;

const Nav = styled.div`
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  letter-spacing: 14px;
  z-index: 3;
  margin-top: 70px;
  padding-right: 20px;
  border-right: 2px solid #c5a240;

  p {
    margin: 0px auto;
    text-align: justify;
  }

  @media (max-width: 1300px) {
    margin: 0px auto;
    border-right: 0px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: -40px;
  
  button {
    display: flex;
    align-items: center;
    padding: 0 48px;
    text-decoration: none;
    background-color: transparent;
    border-color: transparent;
    border: none;

    @media (max-width: 1300px) {
      padding: 0 80px;
    }

    span {
      color: white;
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        color: #c5a240;
        background-color: rgb(197, 162, 64);
        border-radius: 0px 0px 0px 0px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        color: #c5a240;
      }
    }
  }
`;


export default Viewers;