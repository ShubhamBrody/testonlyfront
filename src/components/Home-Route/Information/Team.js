import { Card, CardTitle, } from "react-bootstrap-card";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

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

        <Grid>
            <br/>
            <CardTitle style={{color: 'white'}}>Our Team</CardTitle><br/>
            <Carousel {...settings}>
              <div class="slider__item">
                  <img src="/team_members/nidhi.jpg" alt=""/>
                    <p><b>Nidhi Lahoti</b></p>
                    <h6 style={{marginBottom: "14px"}}>Founder & Director</h6>
                </div>
                <div class="slider__item">
                    <img style={{opacity: 1}} src="/team_members/gauri.jpg" alt=""/>
                    <p><b>Gauri Krishnamoorthy</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/pranitha.jpeg" alt=""/>
                    <p><b>G Pranitha</b></p>
                    <h6 style={{marginBottom: "14px"}}>Head - Human Resources</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/sohan.jpg" alt=""/>
                    <p><b>MC Sohan</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/mandapaka.jpg" alt=""/>
                    <p><b>Mandapaka Rakshitha</b></p>
                    <h6 style={{marginBottom: "14px"}}>Head - Social Media</h6>
                </div> 
                <div class="slider__item">
                <img src="/team_members/mayuri.jpg" alt=""/>
                    <p><b>Mayuri Gaikwad</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/nipun.jpeg" alt=""/>
                    <p><b>Nipun Manghi</b></p>
                    <h6 style={{marginBottom: "14px"}}>Sessions Department</h6>
                </div>
                <div class="slider__item">
                <img src="/team_members/jahnavi.jpg" alt=""/>
                    <p><b>S Jahnavi</b></p>
                    <h6 style={{marginBottom: "14px"}}>Head - Public Relations</h6>
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
                    <p><b>Vedanti Kshirsagar</b></p>
                    <h6 style={{ marginBottom: "-45px", marginTop:"-5px" }}>Head - Administrative & Technical Department</h6>
                </div>
            </Carousel>
        </Grid>
    );
};

const Grid = styled(Card)`
    background-color: rgba(25, 25, 25, 0.8);
    width: 40rem;
    height: 22.5rem;
    border-radius: 6px;
    position: relative;
    text-align: center;
    color: white;
    // overflow: scroll;

    @media (max-width: 1400px) {
      width: 56rem;
      height: 31.5rem;
  }
`;

const Carousel = styled(Slider)`
  .slick-slide > div {
    transform: scale(.5);
    transition: transform .3s cubic-bezier(.4,0,.2,1);
    justify-content: center;
    text-align: center;

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
    justify-content: center;
    text-align: center;

    h6 {
      padding-top: 3px;
      font-size: 13px;
      transform: scale(1);
    }

    p {
      margin-bottom: 0;
      padding-top: 15px;
      font-size: 16px;
      transform: scale(1);

      @media (max-width: 1400px) {
        font-size: 15px;
        padding-top: 40px;
      }
      
    }
  }
  .slider__item > img {
    width: 160px;
    height: 160px;
    border-radius: 8000px;
    border: 5px solid #e0aa3e;
    height: auto;
    display: initial;

    @media (max-width: 1400px) {
      width: 280px;
      height: 280px;
    }
  }

  .slick-list {
    margin: 0px 0px;
  }
    
  .slick-dots li button:before {
    opacity: 1;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #e0aa3e;
  }

  .slick-dots {
    margin-left: -7px;

    li {
      width: 2px;
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
    background: transparent;
    border: none;
    // color: transparent;
    width: 30px;
    height: 30px;
    margin-top: 75px;
    margin-right: 160px;
    padding-bottom: 10px;

    @media (max-width: 1400px) {
      margin-top: 160px;
      margin-right: 300px;
    }
    
   
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

    @media (max-width: 1400px) {
      margin-left: 300px;
    }
  }

`;

export default Team;