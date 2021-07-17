import { Card, CardTitle, } from "react-bootstrap-card";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

var sectionStyle = {
    "background-color": 'black',
    "opacity": 0.4,
    "width": '32rem',
    "height": '20rem',
    "border-radius": "6px",
    "position": "relative",
    "text-align": "center",
    "color": 'white'
}

const Team = (props) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, marginTop: '80px', marginRight: '180px'}}
            onClick={onClick}
          />
        );
    }
      
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, marginTop: '80px', marginLeft: '180px'}}
            onClick={onClick}
          />
        );
    }

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Card style={sectionStyle}>
            <br/>
            <CardTitle style={{color: 'white'}}>Our Team</CardTitle>
            <Carousel {...settings}>
                <div class="slider__item">
                    <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" alt=""/>
                    <p><b>LeBron James</b></p>
                    <p>Founder & Director</p>
                </div>
                <div class="slider__item">
                    <img src="https://www.clipartmax.com/png/middle/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png" alt=""/>
                    <p><b>Savannah James</b></p>
                    <p>Technical Head</p>
                </div>
                <div class="slider__item">
                    <img src="https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png" alt=""/>
                    <p><b>Damian Lillard</b></p>
                    <p>General Manager</p>
                </div>
                <div class="slider__item">
                    <img src="https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png" alt=""/>
                    <p><b>Anthony Davis</b></p>
                    <p>Coach</p>
                </div>
            </Carousel>
        </Card>
    );
};

const Carousel = styled(Slider)`
  .slick-slide > div {
    transform: scale(.5);
    transition: transform .3s cubic-bezier(.4,0,.2,1);
  }

  .slick-center > div {
    transform: scale(1);
  }
  .slider__item > img {
    width: 100%;
    height: 100%;
    border-radius: 8000px;
    border: 4px solid transparent;
    border-color: yellow;
    height: auto;
  }

  p
  {
      color: white;
  }
`;

export default Team;