import { React, useState } from 'react';
import { Card, CardText } from "react-bootstrap-card";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const sectionStyle = {
    "background-color": "transparent",
    "opacity": 1,
    "width": '40rem',
    "height": '24rem',
    "border-radius": "0px",
    "border-color": "transparent",
    "position": "relative",
    "text-align": "center",
    "justify": "center",
    "paddingTop": '1.5rem',
    "paddingRight": '30px',
    "color": '#fff',
    "border-right": '2px solid #e0aa3e'
}

const details = {
    "About Us": "GYC is organised into seven structured departments namely- Public relations, HR external affairs, HR internal affairs, Sessions management, Social media, Content development, Design. We work inter-departmentally as well as intra-departmentally in a well-coordinated fashion. Volunteers are recruited based on their skill post interview. Their work is assessed every week. Weekly meetings are conducted to discuss the progress as well as new assignments. We conduct competitions and deliver presentations to inculcate import skills for their overall development.​ We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.",
    "Mission": "We aim for free educational guidance, overall personality development and upliftment of the youth of rural India by providing career counselling and one to one mentoring. Our mission is to establish a platform for the youth to exchange their views and ideas.​",
    "Vision": "We intend to motivate the youth of rural India with a vision to bring rural and urban India at par by guiding them for the fulfilment of this purpose. Our vision is to make holistic education accessible and affordable to one and all which will drastically help in the development of the youth, ultimately in the development of our country",
    "History": "Geolife Youth Club is a platform established for the career counselling of young minds of rural India in the year 2017. We started by conversing with the rural youth to understand their academic issues. We connect these kids to our team of mentors who guide the kids by clearing the doubts and sharing their own experience"
}

function CardTabs(props) {
    const [content, setContent] = useState("About Us")

    const displayContent = () => {
            const id = document.getElementById(content)
            if(id !== null)
                id.setAttribute('color', 'e0aa3e')
        return (
            <CardText visible={false} style={{ color:"#fff", marginTop: '50px', position: "relative", justifyContent: "center", marginRight: "5%", marginLeft: "5%", height: "510px", overflowY: "auto" }}>
                {details[content]}
            </CardText>
        )
    }

    return (
        <Card style={sectionStyle}>
            <Nav>
                <NavMenu>
                    <a onClick={() => setContent("About Us") }>
                        <span id="About Us">About Us</span>
                    </a>
                    <a onClick={() => setContent("Mission") }>
                        <span id="Mission">Mission</span>
                    </a>
                    <a onClick={() => setContent("Vision") }>
                        <span id="Vision">Vision</span>
                    </a>
                    <a onClick={() => setContent("History") }>
                        <span id="History">History</span>
                    </a>
                </NavMenu>
            </Nav>
            { displayContent() }
        </Card>
    )
}

const Nav = styled.div`
//   position: fixed;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
  letter-spacing: 14px;
  z-index: 3;
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
  margin-left: -5px;
  
  a {
    display: flex;
    align-items: center;
    padding: 0 48px;
    text-decoration: none;

    span {
    //   color: rgb(255, 255, 255);
      font-size: 15px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(255, 255, 255);
        border-radius: 0px 0px 4px 4px;
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
        color: '#e0aa3e';
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;


export default CardTabs;