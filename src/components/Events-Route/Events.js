import React, { Component } from "react";
import $ from "jquery";
import styled from "styled-components";
import { Card, CardTitle, } from "react-bootstrap-card";
import data from "./EventsTextData";

class Events extends Component 
{
  componentDidMount() 
  {
        $('#image').click(function()
        {
            $('#myfile').click()
        })
                        
        $("#myfile").change(function()
        {
            if (this.files && this.files[0]) 
            {
                var reader = new FileReader();            
                reader.onload = function (e) 
                {
                    $('#image').attr('src', e.target.result);
                }
                                
                reader.readAsDataURL(this.files[0]);
            }
        });
  }

  edit = false

  displayContent = data.map((event) => {
    return <>
        <ContentDiv>
            <Heading>{event.heading}</Heading>
            {this.edit ? (
            <span style={{ zIndex: 10, height: '40px', marginTop: '-7%', marginRight: '15px', float: 'right' }}>
                <button className="btn btn-light" type="submit" 
                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#e0aa3e' }}>
                Save </button>
                <button className="btn btn-light" onClick={this.cancelOnClick}
                style={{ backgroundColor: "transparent", borderColor: "transparent", color: '#e0aa3e' }}>
                Cancel </button>
            </span>
            ) : (
            <span style={{ zIndex: 10, height: '40px', marginTop: '-7%', marginRight: '15px', float: 'right' }}>
            <button className="btn btn-light btn-sm" onClick={this.editOnClick}
              style={{ backgroundColor: "transparent", border: "transparent" }}>
              <img src="pencil-alt-solid.svg" style={{ width: "20px", height: "20px"}} alt="pencil" />
            </button>
            <button className="btn btn-light btn-sm" onClick={this.editOnClick}
              style={{ height: '40px', backgroundColor: "transparent", border: "transparent" }}>
              <img src="trash.svg" style={{ width: "22px", height: "27px"}} alt="trash" />
            </button>
            </span> 
            )}
            <ContentWrapper>
                <Inner>
                    <img src={event.imgsrc} alt="Refresh for img"/>
                </Inner>
                <Inner>
                    <Description>{event.content}</Description>
                </Inner>
            </ContentWrapper>
        </ContentDiv>
        <br/>
    </>
    })

  render() {
     
    return (
        <Container>     
            <img src="events-title.png" style={{marginTop: "120px", animation: "image 1s ease-in-out"}}></img>
            <p style={{marginTop: "120px", marginBottom: "6px"}}>We have started with our own digital sessions every sunday for rural youth</p>
            <img src="online-sessions.png" style={{marginTop: "50px", marginBottom: "40px"}}></img>
            
            <SecondDiv>
                <h2>ONGOING EVENTS</h2>
                <p style={{ color: '#fff', textAlign: "center", marginBottom: "100px" }}>In our digital sessions, we are holding ice breaking sessios for our newly joined youth along with the presentations given by the team members regarding personality development. We are recruiting and training volunteers as well.</p>

                { this.displayContent }
                <button style={{ backgroundColor: 'rgba(25, 25, 25, 0.8)', color: '#e0aa3e', fontSize: '22px', margin: '0px 40px 40px 75%', padding: '15px', width: '220px' }}>Add new Event</button>
                <Grid>
                    <br/>
                    <CardTitle style={{ color: '#e0aa3e' }}>Create Event</CardTitle>
                    <span style={{ marginTop: '-4%', marginLeft: '87%' }}>
                    <button style={{ width: '30px', height: 'auto', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <img src="checked.svg" style={{ height: "25px", marginLeft: '-5px' }} alt="Tick"/></button>
                    <button style={{ marginLeft: '7px', width: '30px', height: 'auto', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <img src="cancel.svg" style={{ height: "30px", marginLeft: '-6px' }} alt="Cross"/></button>
                    </span>
                    <br/>
                    <MyForm>
                        <input type="text" placeholder="Event Name"/>
                        <br />
                        <img id="image" src="https://image.flaticon.com/icons/png/512/25/25340.png"/>
                        <input type="file" id="myfile" style={{ display: "none" }}/>

                        <textarea rows="9" cols="70" placeholder="Event Description"/>
                    </MyForm>
                </Grid>
            </SecondDiv>             
        </Container>
    );
  }
}

const MyForm = styled.form`
    input {
        width: 80%;
        height: 35px;
        margin-bottom: 25px;
        // background-color: transparent;
    }

    img {
        width: 250px;
        height: 250px;
        border-radius: 300px;

        margin-left: 60px;
        margin-top: 0px;
        float: left;
    }

    textarea {
        margin-left: 0px;
        margin-top: 12px;
        resize: none;
        overflow: auto;
        // background-color: transparent;
    }

    @media (max-width: 1050px) {
        img {
            margin-left: 20px;
        }
    }
`;

const Grid = styled(Card)`
    background-color: rgba(25, 25, 25, 0.8);
    width: 64rem;
    height: 27rem;
    border-radius: 6px;
    position: relative;
    text-align: center;
    color: white;

    margin: 0px auto;
    margin-bottom: 60px;

    @media (max-width: 1050px) {
      width: 56rem;
  }
`;

const Inner = styled.div`
    margin: auto 30px;

    @media (max-width: 1400px) {
        // margin-top: 30px;
    }
`;

const Description = styled.div`
    text-align: justify;
    color: #fff;
    width: 700px;
    margin-left: -100px;
    // margin-top: 20px;

    @media (max-width: 1400px) {
        width: 500px;
        margin-left: -50px;
    }
    @media (max-width: 1200px) {
        width: 500px;
        margin-left: -60px;
    }
`;

const Heading = styled.div`
    text-align: center;
    color: #e0aa3e;
    font-size: 35px;
    border-radius: 5px;
    font-weight: 800;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
    font-size: 20px;
    text-align: justify;
    justify-content: space-around;
    display: flex;

    img {
        vertical-align: middle;
        height: 250px;
        width: 250px;
        border-radius: 300px;
    }
`;

const Container = styled(Card)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
    border-radius: 0px;

    p
    {
        text-align: center;
        // margin-left: 200px;
        // margin-right: 200px;
        // margin-top: 30px;

        margin: 30px auto;
    }

    h2
    {
        text-align: center;
        color: #e0aa3e;
    }

    @keyframes image {
        from {
            opacity: 0;
            transform: translateX(-200px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    background: url("background.png") center center / cover no-repeat fixed;
`;

const SecondDiv = styled.div`
    h2 {
        color: black;
        margin-top: 200px; 
        font-size: 40px;
    }
    p {
        text-align: justify;
        marginTop: 65px;
        color: black;
        width: 900px;
    }

    @media (max-width: 1000px) {
        h2 {
            margin-top: 150px; 
        }
    }
`;

const ContentDiv = styled.div`
    background-color: rgba(25, 25, 25, 0.8);
    border-radius: 10px;
    position: relative;
    margin: 0px 150px 30px 150px;
    padding: 30px 0px 40px 0px;

    @media (max-width: 1200px) {
        margin: 0px 100px 30px 100px;
    }
    @media (max-width: 1040px) {
        margin: 0px 50px 30px 50px;
    }
`;

export default Events;