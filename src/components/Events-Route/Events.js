import styled from "styled-components";
import { Card } from "react-bootstrap-card";
import data from "./EventsTextData";

const Events = (props) => {
    const displayContent = data.map((event) => {
        return <>
            <Heading>{event.heading}</Heading>
            <ContentWrapper>
                <Inner>
                    <img src={event.imgsrc} alt="Refresh for img"/>
                </Inner>
                <Inner>
                    <Description>{event.content}</Description>
                </Inner>
            </ContentWrapper>
        </>
    })

    return (
        <Container>     
            <img src="events-title.png" style={{marginTop: "120px", animation: "image 1s ease-in-out"}}></img>
            <p style={{marginTop: "120px", marginBottom: "6px"}}>We have started with our own digital sessions every sunday for rural youth</p>
            <img src="online-sessions.png" alt="Refresh for image" style={{marginTop: "50px", marginBottom: "20px"}}></img>
            
            <SecondDiv>
                <h2>ONGOING EVENTS</h2>
                <p style={{color: "white", textAlign: "center", marginBottom: "100px"}}>In our digital sessions, we are holding ice breaking sessios for our newly joined youth along with the presentations given by the team members regarding personality development. We are recruiting and training volunteers as well.</p>

                { displayContent }
            </SecondDiv> 
        </Container>
    );
};

const Inner = styled.div`
    margin: auto 30px;

    @media (max-width: 1400px) {
        // margin-top: 30px;
    }
`;

const Description = styled.div`
    text-align: justify;
    color: white;
    width: 700px;
    margin-left: -200px;

    @media (max-width: 1400px) {
        width: 500px;
        margin-left: 0px;
    }
`;

const Heading = styled.div`
    text-align: center;
    color: #c5a240;
    font-size: 35px;
    // margin: 20px 50px 50px 50px;
    border-radius: 5px;
`;

const ContentWrapper = styled.div`
    font-size: 20px;
    text-align: justify;
    justify-content: space-around;
    display: flex;
    margin:50px;

    img {
        vertical-align: middle;
        height: 250px;
        width: 250px;
        // margin: 50px;
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
        color: #c5a240;
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
        color: white;
        margin-top: 200px; 
        font-size: 40px;
    }
    p {
        text-align: justify;
        marginTop: 65px;
        color: white;
        width: 900px;
    }

    background-image: url(events-bottom-image.png);
    // background-image: url(events_bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    // background-position-y: bottom;

    background-position: 0% 87%;
    @media (max-width: 1000px) {
        h2 {
            margin-top: 150px; 
        }
        // background-position-y: bottom;

        background-position: 0% -100%;
    }
`;

export default Events;