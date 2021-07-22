import { Card, CardTitle, } from "react-bootstrap-card";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

var sectionStyle = {
    "background-color": '#191919',
    "opacity": "0.8",
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    "paddingBottom": '56.25%',
    "color": 'white'
}

const Team = (props) => {
    let settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        arrows: true,
    };

    return (
        <Card style={sectionStyle}>
            <br/>
            <CardTitle style={{color: 'white'}}>Our Team</CardTitle><br/>
            <Carousel {...settings}>
                <div class="slider__item">
                    <img style={{opacity: 1}} src="/team_members/gauri.jpg" alt=""/>
                    <p><b>Gauri Krishnamoorthy</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/pranitha.jpeg" alt=""/>
                    <p><b>G Pranitha</b></p>
                    <h6 style={{marginBottom: "14px"}}>HR - HOD</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/sohan.jpg" alt=""/>
                    <p><b>MC Sohan</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/mandapaka.jpg" alt=""/>
                    <p><b>Mandapaka Rakshitha</b></p>
                    <h6 style={{marginBottom: "14px"}}>Social Media Head</h6>
                </div> 
                <div class="slider__item">
                <img src="/team_members/mayuri.jpg" alt=""/>
                    <p><b>Mayuri Moroti Gaikwad</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/nidhi.jpg" alt=""/>
                    <p><b>Nidhi Lahoti</b></p>
                    <h6 style={{marginBottom: "14px"}}>Founder & Director</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/nipun.jpeg" alt=""/>
                    <p><b>Nipun Manghi</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/jahnavi.jpg" alt=""/>
                    <p><b>S Jahnavi</b></p>
                    <h6 style={{marginBottom: "14px"}}>PR Head</h6>
                </div>
               <div class="slider__item">
                <img src="/team_members/sakshi.jpg" alt=""/>
                    <p><b>Sakshi Mishra</b></p>
                    <h6 style={{marginBottom: "14px"}}>Design Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/tanvi.jpg" alt=""/>
                    <p><b>Tanvi Pansare</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/vedanti.jpeg" alt=""/>
                    <p><b>Vedanti Anil Kshirsagar</b></p>
                    <h6 style={{marginBottom: "-45px"}}>Administrative & Technical Department Head</h6>
                </div>
            </Carousel>
        </Card>
    );
};

const pfake = styled.p`
    color: black;
`;

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
      font-size: 9px;
      transform: scale(1);
    }

    p {
      padding-top: 10px;
      font-size: 12px;
      transform: scale(1);
    }
  }
  .slider__item > img {
    width: 160px;
    height: 160px;
    border-radius: 8000px;
    border: 4px solid transparent;
    border-color: #ffb83d;
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
  }

  h6 {
    font-size: 13px
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    right: @gutters;
    background: #191919;
    border: none;
    // color: transparent;
    width: 30px;
    height: 30px;
    margin-top: 75px;
    margin-right: 160px;
    padding-bottom: 10px;
    
   
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
