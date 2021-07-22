import { Card, CardTitle, } from "react-bootstrap-card";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

var sectionStyle = {
    "background-color": '#191919',
    "opacity": 0.8,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    "color": 'white'
}

const Team = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        arrows: true
    };

    return (
        <Card style={sectionStyle}>
            <br/>
            <CardTitle style={{color: 'white'}}>Our Team</CardTitle>
            <Carousel {...settings}>
                <div class="slider__item">
                    <img src="/team_members/nidhi.jpg" alt=""/>
                    <p><b>Nidhi Lahoti</b></p>
                    <h6>Founder & Director</h6>
                </div>
                <div class="slider__item">
                    <img src="/team_members/vedanti.jpeg" alt=""/>
                    <p><b>Vedanti Kshirsagar</b></p>
                    <h6>Administrative Director</h6>
                </div>
                <div class="slider__item">
                    <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" alt=""/>
                    <p><b>Monisha Kulkarni</b></p>
                    <h6>Head- Sessions Department</h6>
                </div>
                <div class="slider__item">
                    <img src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png" alt=""/>
                    <p><b>Ishan Kabra</b></p>
                    <h6>Head- Design Department</h6>
                </div>
                <div class="slider__item">
                    <img src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png" alt=""/>
                    <p><b>Yash Lahoti</b></p>
                    <h6>Head- HR External Affairs</h6>
                </div>
                <div class="slider__item">
                    <img src="/team_members/pranitha.jpeg" alt=""/>
                    <p><b>G Pranitha</b></p>
                    <h6>Head- HR Internal Affairs</h6>
                </div>
            </Carousel>
        </Card>
    );
};

const Carousel = styled(Slider)`
  .slick-slide > div {
    transform: scale(.5);
    transition: transform .3s cubic-bezier(.4,0,.2,1);

    h6 {
      font-size: 0px;
      transform: scale(0);
    }

    p {
      font-size: 0px;
      transform: scale(0);
    }
  }

  .slick-center > div {
    transform: scale(1);

    h6 {
      padding-top: 3px;
      font-size: 13px;
      transform: scale(1);
    }

    p {
      padding-top: 12px;
      font-size: 16px;
      transform: scale(1);
    }
  }
  .slider__item > img {
    width: 160px;
    height: 160px;
    border-radius: 8000px;
    border: 5px solid #e0aa3e;
    height: auto;
  }

  .slick-list {
    margin: 0px -10px;
  }
    
  .slick-dots li button:before {
    opacity: 1;
    color: white;
    margin-right: -50px;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #e0aa3e;
  }

  .slick-dots {
    margin-left: -7px;

    li {
      margin-right: -15px;
      margin-top: 40px;
    }
  }

  p
  {
    color: white;
    margin-bottom: 0;
  }

  h6 {
    font-size: 13px;
    margin-bottom: 0;
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    right: @gutters;
    background: transparent;
    border: none;
    width: 30px;
    height: 30px;
    margin-top: 75px;
    margin-right: 160px;
   
    &:before { 
      content: ">"; 
      color: #ffffff; 
      font-size: 25px;
    }
  }
  
  .slick-prev { 
    left: @gutters; 
    margin-left: 160px;
    z-index: 9999;
    &:before { content: "<"; }
  }
`;

export default Team;